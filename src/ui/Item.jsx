import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormElement from "./FormElement";
import { HiTrash } from "react-icons/hi";
import { formatCurrency } from "../utilities/helpers";

const StyledItemListRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1.2fr 1.8fr 1.2fr 0.6fr;
  column-gap: 2.4rem;
  align-items: start;
`;

const StyledItemListColumn = styled.span`
  > svg {
    color: var(--third-color);
    cursor: pointer;
    font-size: 2rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: var(--main-transition);
  background-color: var(--secondary-color);
  color: var(--text-color);

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

function Item({ item }) {
  const { register, formState } = useForm({
    defaultValues: {
      itemName: item?.name || "",
      itemQuantity: item?.quantity || "",
      itemPrice: item?.price || "",
    },
  });
  const { errors } = formState;

  return (
    <StyledItemListRow>
      <FormElement key="itemName" error={errors?.itemName?.message}>
        <StyledInput
          id="itemName"
          name="itemName"
          placeholder="Banner Design"
          type="text"
          {...register("itemName", {
            required: "This field is required",
          })}
        />
      </FormElement>

      <FormElement key="itemQuantity" error={errors?.itemQuantity?.message}>
        <StyledInput
          id="itemQuantity"
          name="itemQuantity"
          placeholder="1"
          type="number"
          {...register("itemQuantity", {
            required: "This field is required",
          })}
        />
      </FormElement>

      <FormElement key="itemPrice" error={errors?.itemPrice?.message}>
        <StyledInput
          id="itemPrice"
          name="itemPrice"
          placeholder="$160.00"
          type="number"
          {...register("itemPrice", {
            required: "This field is required",
          })}
        />
      </FormElement>
      <StyledItemListColumn>
        {item?.total ? formatCurrency(item.total) : ""}
      </StyledItemListColumn>
      <StyledItemListColumn>
        <HiTrash />
      </StyledItemListColumn>
    </StyledItemListRow>
  );
}

export default Item;
