import React from "react";
import { Authorize } from "components/auth";
import { ButtonControl } from "components/atomic/buttons";
import type { Hooks, Row } from "react-table";
import IconFactory from "components/factories/IconFactory";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;

type ActionConfig = { handleClick: ({ row }: { row: Row }) => void };

type ActionKeys = "edit" | "delete";

interface ActionDefinition {
  label: string;
  icon: IconFactoryProps["icon"];
  action: string;
  iconRotate: number;
}

type AvailableActions = {
  [K in ActionKeys]: ActionDefinition;
};

const availableActions: AvailableActions = {
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

const renderOneAction = (
  row: Row,
  action: ActionKeys,
  actionConfig: ActionConfig
) => {
  const actionDefinition = availableActions[action];

  const buttonProps = {
    "aria-label": actionDefinition.label,
    icon: actionDefinition.icon,
    iconRotate: actionDefinition.iconRotate || 0,
    ...(actionConfig.handleClick && {
      onClick: () => actionConfig.handleClick({ row }),
    }),
  };

  return (
    <Authorize
      key={action}
      actions={actionDefinition.action}
      allowedActions={row?.original?.allowedActions}
    >
      <ButtonControl {...buttonProps} />
    </Authorize>
  );
};

const renderActions = (row: Row, configuration: AvailableActions) => {
  return (
    <div className="t-align-right">
      {Object.keys(configuration).map((action) => {
        return renderOneAction(row, action, configuration[action]);
      })}
    </div>
  );
};

const useRowActions = (hooks: Hooks) => {
  hooks.allColumns.push((columns, { instance }) => {
    const { actions: actionsConfiguration } = instance;
    if (!actionsConfiguration) return columns;
    const actions = {
      Header: () => null,
      id: "actions",
      Cell: ({ row }: { row: Row }) => {
        return renderActions(row, actionsConfiguration);
      },
    };

    return [...columns, actions];
  });
};

useRowActions.pluginName = "useRowActions";

export default useRowActions;
