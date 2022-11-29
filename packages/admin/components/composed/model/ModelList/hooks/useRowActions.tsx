import React, { useMemo } from "react";
import i18next from "i18next";
import type {
  ColumnDef,
  ModelTableActionProps,
  Row,
} from "@tanstack/react-table";
import {
  ButtonControlGroup,
  ButtonControl,
  ButtonControlConfirm,
  ButtonControlDownload,
} from "components/atomic/buttons";
import IconFactory from "components/factories/IconFactory";
import { ButtonControlView } from "components/atomic/buttons/ButtonControl";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;

type ActionConfig<D extends Record<string, unknown>> = {
  handleClick: ({ row }: { row: Row<D> }) => void;
  modalConfirm?: boolean;
  handleHide?: ({ row }: { row: Row<D> }) => boolean;
  handleLink?: ({ row }: { row: Row<D> }) => string | void;
};

type ActionKeys =
  | "download"
  | "edit"
  | "delete"
  | "view"
  | "enable"
  | "disable";

// Change the sort order of action buttons here
const ACTION_ORDER = [
  "download",
  "view",
  "edit",
  "enable",
  "disable",
  "delete",
];

interface ActionDefinition {
  label: string;
  icon?: IconFactoryProps["icon"];
  action?: string;
  iconRotate?: number;
  modalLabel?: string;
  modalBody?: React.ReactNode;
}

type ActionDefinitions = {
  [K in ActionKeys]: ActionDefinition;
};

type ActionConfigurations<D extends Record<string, unknown>> = {
  [K in ActionKeys]?: ActionConfig<D>;
};

const availableActions: ActionDefinitions = {
  download: {
    label: i18next.t("common.download"),
    iconRotate: 180,
  },
  edit: {
    label: i18next.t("common.edit"),
    icon: "edit",
    action: "self.update",
  },
  delete: {
    label: i18next.t("common.delete"),
    icon: "delete",
    action: "self.delete",
    modalLabel: i18next.t("messages.delete.confirm_label"),
    modalBody: (
      <p className="t-copy-sm">{i18next.t("messages.delete.confirm_body")}</p>
    ),
  },
  view: {
    label: i18next.t("common.view"),
  },
  enable: {
    label: i18next.t("common.enable"),
    action: "self.edit",
    modalLabel: i18next.t("messages.enable.confirm_label"),
    modalBody: (
      <p className="t-copy-sm">{i18next.t("messages.enable.confirm_body")}</p>
    ),
  },
  disable: {
    label: i18next.t("common.disable"),
    action: "self.delete",
    modalLabel: i18next.t("messages.disable.confirm_label"),
    modalBody: (
      <p className="t-copy-sm">{i18next.t("messages.disable.confirm_body")}</p>
    ),
  },
};

function getButtonControlChildren<D extends Record<string, unknown>>(
  row: Row<D>,
  action: ActionKeys,
  actionConfig?: ActionConfig<D>
) {
  const actionDefinition = availableActions[action];

  if (actionConfig?.handleHide && actionConfig?.handleHide({ row }))
    return <></>;

  const buttonControl = actionConfig?.modalConfirm ? (
    <ButtonControlConfirm
      key={action}
      aria-label={actionDefinition.label}
      icon={actionDefinition.icon}
      iconRotate={actionDefinition.iconRotate || 0}
      {...(actionConfig?.handleClick && {
        onClick: () => actionConfig.handleClick({ row }),
      })}
      modalLabel={actionDefinition.modalLabel}
      modalBody={actionDefinition.modalBody ?? null}
    >
      {actionDefinition.icon ? null : actionDefinition.label}
    </ButtonControlConfirm>
  ) : action === "download" && actionConfig?.handleLink ? (
    <ButtonControlDownload
      key={action}
      aria-label={actionDefinition.label}
      {...(actionConfig?.handleLink && {
        href: actionConfig.handleLink({ row }),
      })}
    ></ButtonControlDownload>
  ) : action === "view" && actionConfig?.handleLink ? (
    <ButtonControlView
      key={action}
      aria-label={actionDefinition.label}
      href={`${process.env.NEXT_PUBLIC_FE_URL}${actionConfig.handleLink({
        row,
      })}`}
    />
  ) : (
    <ButtonControl
      key={action}
      aria-label={actionDefinition.label}
      icon={actionDefinition.icon}
      iconRotate={actionDefinition.iconRotate || 0}
      {...(actionConfig?.handleClick && {
        onClick: () => actionConfig.handleClick({ row }),
      })}
    >
      {actionDefinition.icon ? null : actionDefinition.label}
    </ButtonControl>
  );

  const allowedActions = row?.original?.allowedActions as string[] | undefined;

  if (!allowedActions) return buttonControl;

  return React.cloneElement(buttonControl, {
    actions: actionDefinition.action,
    allowedActions,
  });
}

function renderActions<D extends Record<string, unknown>>(
  row: Row<D>,
  configuration: ActionConfigurations<D>
) {
  const keys = Object.keys(configuration) as Array<ActionKeys>;

  const buttons = keys
    .sort((actionA, actionB) => {
      return ACTION_ORDER.indexOf(actionA) - ACTION_ORDER.indexOf(actionB);
    })
    .filter((action) => {
      // Filter out any actions that are not configured
      const actionConfig = configuration[action];
      return actionConfig ? action : null;
    })
    .map((action) => {
      // Map actions to button props
      const actionConfig = configuration[action];
      return getButtonControlChildren<D>(row, action, actionConfig);
    });

  return buttons ? (
    <ButtonControlGroup
      toggleLabel={i18next.t("options")}
      menuLabel={"Options list"}
      breakpoint={70}
    >
      {buttons}
    </ButtonControlGroup>
  ) : null;
}

export interface Actions<T extends Record<string, unknown>> {
  handleEdit?: (props: ModelTableActionProps<T>) => void;
  handleDelete?: (props: ModelTableActionProps<T>) => void;
  hideDelete?: (props: ModelTableActionProps<T>) => boolean;
  handleDownload?: (props: ModelTableActionProps<T>) => void;
  handleView?: (props: ModelTableActionProps<T>) => void;
  handleEnable?: (props: ModelTableActionProps<T>) => void;
  hideEnable?: (props: ModelTableActionProps<T>) => boolean;
  handleDisable?: (props: ModelTableActionProps<T>) => void;
  hideDisable?: (props: ModelTableActionProps<T>) => boolean;
}

function useRowActions<D extends Record<string, unknown>>(
  columns: ColumnDef<D>[],
  actions: Actions<D>
) {
  // Setup actions
  const rowActions = useMemo(
    () => ({
      ...(actions.handleEdit && { edit: { handleClick: actions.handleEdit } }),
      ...(actions.handleDelete && {
        delete: {
          handleClick: actions.handleDelete,
          modalConfirm: true,
          handleHide: actions.hideDelete,
        },
      }),
      ...(actions.handleDownload && {
        download: {
          handleLink: actions.handleDownload,
          handleClick: () => null,
        },
      }),
      ...(actions.handleView && {
        view: { handleLink: actions.handleView, handleClick: () => null },
      }),
      ...(actions.handleEnable && {
        enable: {
          handleClick: actions.handleEnable,
          handleHide: actions.hideEnable,
          modalConfirm: true,
        },
      }),
      ...(actions.handleDisable && {
        disable: {
          handleClick: actions.handleDisable,
          handleHide: actions.hideDisable,
          modalConfirm: true,
        },
      }),
    }),
    [actions]
  );

  const actionColumn = {
    header: () => <span className="a-hidden">Actions</span>,
    id: "actions",
    cell: ({ row }: { row: Row<D> }) => {
      return renderActions<D>(row, rowActions);
    },
    meta: {
      cellType: "actions",
      columnAlign: "right",
    },
  };

  return [...columns, actionColumn];
}

useRowActions.pluginName = "useRowActions";

export default useRowActions;
