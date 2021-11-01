import React from "react";
import i18next from "i18next";
import {
  ButtonControlGroup,
  ButtonControl,
  ButtonControlConfirm,
  ButtonControlDownload,
} from "components/atomic/buttons";
import type { Hooks, Row } from "react-table";
import IconFactory from "components/factories/IconFactory";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;

type ActionConfig<D extends Record<string, unknown>> = {
  handleClick: ({ row }: { row: Row<D> }) => void;
  modalConfirm?: boolean;
  handleLink?: ({ row }: { row: Row<D> }) => string;
};

type ActionKeys = "edit" | "delete" | "download";

interface ActionDefinition {
  label: string;
  icon: IconFactoryProps["icon"];
  action: string;
  iconRotate: number;
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
  edit: {
    label: i18next.t("edit"),
    icon: "edit",
    action: "self.update",
    iconRotate: 0,
  },
  delete: {
    label: i18next.t("delete"),
    icon: "delete",
    action: "self.delete",
    iconRotate: 0,
    modalLabel: i18next.t("messages.delete.confirm_label"),
    modalBody: (
      <p className="t-copy-sm">{i18next.t("messages.delete.confirm_body")}</p>
    ),
  },
  download: {
    label: i18next.t("download"),
    icon: "arrow",
    iconRotate: 180,
    action: "",
  },
};

function getButtonControlChildren<D extends Record<string, unknown>>(
  row: Row<D>,
  action: ActionKeys,
  actionConfig?: ActionConfig<D>
) {
  const actionDefinition = availableActions[action];

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
    ></ButtonControlConfirm>
  ) : action === "download" && actionConfig?.handleLink ? (
    <ButtonControlDownload
      key="download"
      aria-label={actionDefinition.label}
      {...(actionConfig?.handleLink && {
        href: actionConfig.handleLink({ row }),
      })}
    ></ButtonControlDownload>
  ) : (
    <ButtonControl
      key={action}
      aria-label={actionDefinition.label}
      icon={actionDefinition.icon}
      iconRotate={actionDefinition.iconRotate || 0}
      {...(actionConfig?.handleClick && {
        onClick: () => actionConfig.handleClick({ row }),
      })}
    ></ButtonControl>
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

function useRowActions<D extends Record<string, unknown>>(hooks: Hooks<D>) {
  hooks.allColumns.push((columns, { instance }) => {
    const { actions } = instance;
    if (!actions) return columns;
    const actionColumn = {
      Header: () => null,
      id: "actions",
      align: "right",
      cellType: "actions",
      Cell: ({ row }: { row: Row<D> }) => {
        return renderActions<D>(row, actions);
      },
    };

    return [...columns, actionColumn];
  });
}

useRowActions.pluginName = "useRowActions";

export default useRowActions;
