import styled from "styled-components";
import Item from "./Item";
import { checkAvailabiltyToAddItem } from "../utilities/helpers";

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

function ItemList({ items, editItemsList }) {
  function handleAddListItem() {
    const newItemsList = [...items, { name: "" }];
    editItemsList(newItemsList);
  }

  function updateListItem(body) {
    let newItemsList = [...items];
    const itemIndex = newItemsList.findIndex((item) => item.name === body.name);

    if (
      newItemsList[itemIndex]?.name !== body.name ||
      newItemsList[itemIndex]?.quantity !== body.quantity ||
      newItemsList[itemIndex]?.price !== body.price
    ) {
      newItemsList[itemIndex] = { ...body };
      editItemsList(newItemsList);
    }
  }

  return (
    <StyledItemList>
      <StyledItemListHeading>Item List</StyledItemListHeading>

      {items && items?.length > 0 && (
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

      {items &&
        items?.length > 0 &&
        items?.map((item) => (
          <Item
            key={`item${item.name}`}
            item={item}
            updateListItem={updateListItem}
          />
        ))}

      {(items?.length === 0 || checkAvailabiltyToAddItem(items)) && (
        <StyledItemListBtn onClick={handleAddListItem}>
          Add Item
        </StyledItemListBtn>
      )}
    </StyledItemList>
  );
}

export default ItemList;
