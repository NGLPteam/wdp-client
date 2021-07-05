import { ButtonControl } from "components/atomic";
import React from "react";

const availableActions = {
  edit: {
    label: "Edit",
    icon: "arrow",
    iconRotate: 90,
  },
  delete: {
    label: "Delete",
    icon: "delete",
  },
};

const renderOneAction = (row, action, actionConfig) => {
  const actionDefinition = availableActions[action];

  const buttonProps = {
    key: action,
    "aria-label": actionDefinition.label,
    icon: actionDefinition.icon,
    iconRotate: actionDefinition.iconRotate || 0,
    ...(actionConfig.handleClick && {
      onClick: () => actionConfig.handleClick({ row }),
    }),
  };

  return <ButtonControl {...buttonProps} />;
};

const renderActions = (row, configuration) => {
  return (
    <>
      {Object.keys(configuration).map((action) => {
        return renderOneAction(row, action, configuration[action]);
      })}
    </>
  );
};

const useRowActions = (hooks) => {
  hooks.allColumns.push((columns, { instance }) => {
    const { actions: actionsConfiguration } = instance;
    if (!actionsConfiguration) return columns;
    const actions = {
      Header: () => null,
      id: "actions",
      Cell: ({ row }) => renderActions(row, actionsConfiguration),
    };

    return [...columns, actions];
  });
};

useRowActions.pluginName = "useRowActions";

export default useRowActions;
