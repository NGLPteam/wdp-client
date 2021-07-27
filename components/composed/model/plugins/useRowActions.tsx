import React from "react";
import { Authorize } from "components/auth";
import { ButtonControl } from "components/atomic/buttons";

const availableActions = {
  edit: {
    label: "Edit",
    icon: "edit",
    action: "self.update",
  },
  delete: {
    label: "Delete",
    icon: "delete",
    action: "self.delete",
  },
};

const renderOneAction = (row, action, actionConfig) => {
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

const renderActions = (row, configuration) => {
  return (
    <div className="t-align-right">
      {Object.keys(configuration).map((action) => {
        return renderOneAction(row, action, configuration[action]);
      })}
    </div>
  );
};

const useRowActions = (hooks) => {
  hooks.allColumns.push((columns, { instance }) => {
    const { actions: actionsConfiguration } = instance;
    if (!actionsConfiguration) return columns;
    const actions = {
      Header: () => null,
      id: "actions",
      Cell: ({ row }) => {
        return renderActions(row, actionsConfiguration);
      },
    };

    return [...columns, actions];
  });
};

useRowActions.pluginName = "useRowActions";

export default useRowActions;
