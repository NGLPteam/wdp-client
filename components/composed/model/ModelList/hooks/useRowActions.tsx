import React from "react";
import { Authorize } from "components/auth";
import { ButtonControl } from "components/atomic/buttons";
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
    label: "Edit",
    icon: "edit",
    action: "self.update",
    iconRotate: 0,
  },
  delete: {
    label: "Delete",
    icon: "delete",
    action: "self.delete",
    iconRotate: 0,
  },
};

function renderOneAction<D extends Record<string, unknown>>(
  row: Row<D>,
  action: ActionKeys,
  actionConfig: ActionConfig<D>
) {
  const actionDefinition = availableActions[action];

  const buttonProps = {
    "aria-label": actionDefinition.label,
    icon: actionDefinition.icon,
    iconRotate: actionDefinition.iconRotate || 0,
    ...(actionConfig.handleClick && {
      onClick: () => actionConfig.handleClick({ row }),
    }),
  };

  const allowedActions = row?.original?.allowedActions as string[] | undefined;
  const content = <ButtonControl key={action} {...buttonProps} />;

  if (!allowedActions) return content;

  return (
    <Authorize
      key={action}
      actions={actionDefinition.action}
      allowedActions={allowedActions}
    >
      {content}
    </Authorize>
  );
}

function renderActions<D extends Record<string, unknown>>(
  row: Row<D>,
  configuration: ActionConfigurations<D>
) {
  const keys = Object.keys(configuration) as Array<ActionKeys>;
  return (
    <div className="t-align-right">
      {keys.map((action) => {
        const actionConfig = configuration[action];
        if (!actionConfig) return null;
        return renderOneAction<D>(row, action, actionConfig);
      })}
    </div>
  );
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
