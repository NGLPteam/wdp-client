import { graphql, useFragment } from "react-relay";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { OrderDefinitionSelectControlFragment$key } from "@/relay/OrderDefinitionSelectControlFragment.graphql";
import OrderDefinitionSelectDropdown from "./OrderDefinitionSelect";

export default function OrderDefinitionSelectControl({ name, data }: Props) {
  // Get the entity schema ranks
  const entity = useFragment<OrderDefinitionSelectControlFragment$key>(
    fragment,
    data,
  );

  const { control } = useFormContext();

  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (val) =>
          val && val?.length > 7
            ? (t("forms.validation.order_by_max") as string)
            : !val || val.length === 0
              ? (t("forms.validation.order_by_min") as string)
              : true,
      }}
      render={({ field: { ...props } }) => (
        <OrderDefinitionSelectDropdown data={entity} {...props} />
      )}
    />
  );
}

interface Props {
  name: string;
  data: OrderDefinitionSelectControlFragment$key;
}

// export default forwardRef(OrderDefinitionSelectControl);

const fragment = graphql`
  fragment OrderDefinitionSelectControlFragment on Entity {
    ...OrderDefinitionSelectFragment
  }
`;
