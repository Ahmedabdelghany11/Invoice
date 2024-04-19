import styled from "styled-components";
import InvoiceForm from "./InvoiceForm";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

const StyledInvoiceCartContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInvoiceCart = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;
`;

const StyledBackLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 2rem;

  > svg {
    font-size: 2.6rem;
    color: var(--logo-light-color);
  }
`;

const StyledStatusBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  background-color: var(--secondary-color);
  color: var(--text-color);
  transition: var(--main-transition);
  padding: 3rem;
  border-radius: 1.5rem;
`;

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const StatusValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  position: relative;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: bold;

  &.paid {
    color: var(--paid-color);
    background-color: var(--paid-bg);
  }

  &.pending {
    color: var(--pending-color);
    background-color: var(--pending-bg);
  }

  &.draft {
    color: var(--draft-color);
    background-color: var(--draft-bg);
  }
`;

const StyledStatusBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const StyledStatusBtn = styled.button`
  padding: 8px 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &.edit {
    background-color: var(--overlay-background);
  }

  &.delete {
    background-color: #ed5756;
  }

  &.mark {
    background-color: var(--logo-light-color);
  }
`;

const StyledCartContent = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--secondary-color);
  color: var(--text-color);
  transition: var(--main-transition);
  padding: 3rem;
  padding-bottom: 5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledCartContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
`;

const StyledCartContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledCartContentInfoHeading = styled.h3`
  > span {
    color: var(--third-color);
  }
`;

const StyledCartContentInfoDescription = styled.span`
  color: var(--third-color);
  font-size: 1.4rem;
  font-weight: bold;
`;

const StyledCartContentAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.4rem;

  span {
    color: var(--third-color);
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const StyledCartPaymentContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
`;

const StyledCartPaymentDatesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledCartPaymentDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
  color: var(--text-color);
`;

const StyledCartPaymentDateHeading = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--third-color);
`;

const StyledCartClientBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > span {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--third-color);
  }
`;

const StyledCartClient = styled.h3``;

const StyledCartClientAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    color: var(--third-color);
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const StyledCartSentToBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledCartSentToBoxHeading = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--third-color);
`;

const StyledCartSentToEmail = styled.h3``;

const StyledCartItemListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledCartItemList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #252946;
  padding: 3rem;
`;

const StyledCartItemListRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1.2fr 1.8fr 1.8fr;
  column-gap: 2.4rem;
  align-items: start;
  font-weight: bold;
  font-size: 1.6rem;
  color: #fff;
`;

const StyledCartItemListHeader = styled(StyledCartItemListRow)`
  font-weight: bold;
  font-size: 1.4rem;
  color: var(--third-color);
`;

const StyledCartItemListColumn = styled.span``;

const StyledCartItemListFooter = styled.div`
  width: 100%;
  background-color: #0b0e15;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem;
  font-size: 1.4rem;

  > span {
    font-size: 2.4rem;
    font-weight: bold;
  }
`;

function InvoiceCart() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { id } = useParams();

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <StyledInvoiceCartContainer>
      <StyledInvoiceCart>
        <StyledBackLink to="/">
          <HiChevronLeft />
          Go back
        </StyledBackLink>

        <StyledStatusBox>
          <StyledStatus>
            Status
            <StatusValue className="paid">
              <GoDotFill />
              Paid
            </StatusValue>
          </StyledStatus>
          <StyledStatusBtnsContainer>
            <StyledStatusBtn className="edit" onClick={openForm}>
              Edit
            </StyledStatusBtn>
            <StyledStatusBtn className="delete">Delete</StyledStatusBtn>
            <StyledStatusBtn className="mark">Mark as Paid</StyledStatusBtn>
          </StyledStatusBtnsContainer>
        </StyledStatusBox>

        <StyledCartContent>
          <StyledCartContentHeader>
            <StyledCartContentInfo>
              <StyledCartContentInfoHeading>
                <span>#</span>
                {id}
              </StyledCartContentInfoHeading>
              <StyledCartContentInfoDescription>
                Graphic Design
              </StyledCartContentInfoDescription>
            </StyledCartContentInfo>
            <StyledCartContentAddressBox>
              <span>19 Union Terrace</span>
              <span>London</span>
              <span>E1 3EZ</span>
              <span>United Kingdom</span>
            </StyledCartContentAddressBox>
          </StyledCartContentHeader>

          <StyledCartPaymentContent>
            <StyledCartPaymentDatesBox>
              <StyledCartPaymentDate>
                <StyledCartPaymentDateHeading>
                  Invoice Date
                </StyledCartPaymentDateHeading>
                21 Aug 2021
              </StyledCartPaymentDate>
              <StyledCartPaymentDate>
                <StyledCartPaymentDateHeading>
                  Payment Due
                </StyledCartPaymentDateHeading>
                20 Sep 2021
              </StyledCartPaymentDate>
            </StyledCartPaymentDatesBox>
            <StyledCartClientBox>
              <span>Bill to</span>
              <StyledCartClient>Alex Grim</StyledCartClient>
              <StyledCartClientAddress>
                <span>84 Chrunch Way</span>
                <span>Bradford</span>
                <span>BD1 9PB</span>
                <span></span>
              </StyledCartClientAddress>
            </StyledCartClientBox>
            <StyledCartSentToBox>
              <StyledCartSentToBoxHeading>Sent To</StyledCartSentToBoxHeading>
              <StyledCartSentToEmail>alexgrim@mail.com</StyledCartSentToEmail>
            </StyledCartSentToBox>
          </StyledCartPaymentContent>

          <StyledCartItemListContainer>
            <StyledCartItemList>
              <StyledCartItemListHeader>
                <StyledCartItemListColumn key="itemNameHeader">
                  Item Name
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="qtyHeader">
                  QTY.
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="priceHeader">
                  Price
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="totalHeader">
                  Total
                </StyledCartItemListColumn>
              </StyledCartItemListHeader>

              <StyledCartItemListRow>
                <StyledCartItemListColumn key="itemName">
                  Banner Design
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="qty">1</StyledCartItemListColumn>
                <StyledCartItemListColumn key="price">
                  156.00
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="total">
                  156.00
                </StyledCartItemListColumn>
              </StyledCartItemListRow>

              <StyledCartItemListRow>
                <StyledCartItemListColumn key="itemName">
                  Email Design
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="qty">2</StyledCartItemListColumn>
                <StyledCartItemListColumn key="price">
                  200.00
                </StyledCartItemListColumn>
                <StyledCartItemListColumn key="total">
                  400.00
                </StyledCartItemListColumn>
              </StyledCartItemListRow>
            </StyledCartItemList>
            <StyledCartItemListFooter>
              Amount Due
              <span>556.00</span>
            </StyledCartItemListFooter>
          </StyledCartItemListContainer>
        </StyledCartContent>
      </StyledInvoiceCart>
      {isFormOpen && <InvoiceForm close={closeForm} isOpen={isFormOpen} />}
    </StyledInvoiceCartContainer>
  );
}

export default InvoiceCart;
