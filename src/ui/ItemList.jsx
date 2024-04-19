import { useState } from "react";
import { HiTrash } from "react-icons/hi";
import styled from "styled-components";
import FormElement from "./FormElement";
import { useForm } from "react-hook-form";

const StyledItemList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledItemListHeading = styled.h3`
  font-size: 1.8rem;
  color: var(--third-color);
  font-weight: bold;
`;

const StyledItemListRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1.2fr 1.8fr 1.2fr 0.6fr;
  column-gap: 2.4rem;
  align-items: start;
`;

const StyledItemListHeader = styled(StyledItemListRow)``;

const StyledItemListColumn = styled.span`
  > svg {
    color: var(--third-color);
    cursor: pointer;
    font-size: 2rem;
  }
`;

const StyledItemListBtn = styled.button`
  width: 100%;
  padding: 12px 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--text-color);
  font-size: 1.6rem;
  font-weight: bold;
  background-color: var(--secondary-color);
  color: var(--text-color);
  cursor: pointer;
  margin-top: 1rem;
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
`;

function ItemList() {
  const [itemListCount, setItemListCount] = useState(0);
  const { register, formState } = useForm();
  const { errors } = formState;

  function handleAddListItem() {
    setItemListCount((count) => count + 1);
  }
  return (
    <StyledItemList>
      <StyledItemListHeading>Item List</StyledItemListHeading>

      {itemListCount > 0 && (
        <StyledItemListHeader>
          <StyledItemListColumn key="itemNameHeader">
            Item Name
          </StyledItemListColumn>
          <StyledItemListColumn key="qtyHeader">Qty.</StyledItemListColumn>
          <StyledItemListColumn key="priceHeader">Price</StyledItemListColumn>
          <StyledItemListColumn key="totalHeader">Total</StyledItemListColumn>
          <StyledItemListColumn key="operationsHeader"></StyledItemListColumn>
        </StyledItemListHeader>
      )}

      {itemListCount > 0 &&
        Array.from({ length: itemListCount }, (_, index) => (
          <StyledItemListRow key={`item${index}`}>
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

            <FormElement
              key="itemQuantity"
              error={errors?.itemQuantity?.message}
            >
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
                placeholder="160.00"
                type="number"
                {...register("itemPrice", {
                  required: "This field is required",
                })}
              />
            </FormElement>
            <StyledItemListColumn>160.00</StyledItemListColumn>
            <StyledItemListColumn>
              <HiTrash />
            </StyledItemListColumn>
          </StyledItemListRow>
        ))}

      <StyledItemListBtn onClick={handleAddListItem}>
        Add Item
      </StyledItemListBtn>
    </StyledItemList>
  );
}

export default ItemList;
