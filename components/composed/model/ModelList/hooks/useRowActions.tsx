import React from "react";
import i18next from "i18next";
import { ButtonControlGroup } from "components/atomic/buttons";
import type { Hooks, Row } from "react-table";
import IconFactory from "components/factories/IconFactory";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;

type ActionConfig<D extends Record<string, unknown>> = {
  handleClick: ({ row }: { row: Row<D> }) => void;
};

type ActionKeys = "edit" | "delete";

interface ActionDefinition {
  label: string;
  icon: IconFactoryProps["icon"];
  action: string;
  iconRotate: number;
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
  },
};

function getButtonProps<D extends Record<string, unknown>>(
  row: Row<D>,
  action: ActionKeys,
  actionConfig?: ActionConfig<D>
) {
  const actionDefinition = availableActions[action];

  const buttonProps = {
    "aria-label": actionDefinition.label,
    icon: actionDefinition.icon,
    iconRotate: actionDefinition.iconRotate || 0,
    ...(actionConfig?.handleClick && {
      onClick: () => actionConfig.handleClick({ row }),
    }),
  };

  const allowedActions = row?.original?.allowedActions as string[] | undefined;

  if (!allowedActions) return buttonProps;

  return { ...buttonProps, actions: actionDefinition.action, allowedActions };
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
      return getButtonProps<D>(row, action, actionConfig);
    });

  return buttons ? (
    <ButtonControlGroup
      toggleLabel={i18next.t("options")}
      menuLabel={"Options list"}
      breakpoint={70}
      buttons={buttons}
    />
  ) : null;
}

function useRowActions<D extends Record<string, unknown>>(hooks: Hooks<D>) {
  hooks.allColumns.push((columns, { instance }) => {
    const { actions } = instance;
    if (!actions) return columns;
    const actionColumn = {
      Header: () => null,
      id: "actions",
      Cell: ({ row }: { row: Row<D> }) => {
        return renderActions<D>(row, actions);
      },
    };

    return [...columns, actionColumn];
  });
}

useRowActions.pluginName = "useRowActions";

export default useRowActions;
