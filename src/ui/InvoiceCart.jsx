import styled from "styled-components";
import InvoiceForm from "./InvoiceForm";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { formatCurrency, formatDate } from "../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInvoiceFromList,
  getInvoiceByID,
  updateInvoice,
} from "../features/invoiceSlice";

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

  @media screen and (max-width: 991px) {
    padding-top: 6rem;
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
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

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
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
  text-transform: capitalize;

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

  @media screen and (max-width: 767px) {
    gap: 2rem;
  }
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
  const { id: idParam } = useParams();
  const invoice = useSelector(getInvoiceByID(idParam));
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const {
    status,
    id,
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    items,
    total,
  } = invoice;
  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  function handleUpdateStatus(newStatus) {
    dispatch(updateInvoice({ ...invoice, status: newStatus }));
  }

  function handleDeleteInvoice() {
    dispatch(deleteInvoiceFromList(id));
    navigate("/");
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
            <StatusValue className={status}>
              <GoDotFill />
              {status}
            </StatusValue>
          </StyledStatus>
          <StyledStatusBtnsContainer>
            <StyledStatusBtn className="edit" onClick={openForm}>
              Edit
            </StyledStatusBtn>
            <StyledStatusBtn className="delete" onClick={handleDeleteInvoice}>
              Delete
            </StyledStatusBtn>
            {status !== "paid" ? (
              <StyledStatusBtn
                className="mark"
                onClick={() => handleUpdateStatus("paid")}
              >
                Mark as Paid
              </StyledStatusBtn>
            ) : (
              <StyledStatusBtn
                className="mark"
                onClick={() => handleUpdateStatus("pending")}
              >
                Mark as Pending
              </StyledStatusBtn>
            )}
          </StyledStatusBtnsContainer>
        </StyledStatusBox>

        <StyledCartContent>
          <StyledCartContentHeader>
            <StyledCartContentInfo>
              <StyledCartContentInfoHeading>
                <span># </span>
                {id}
              </StyledCartContentInfoHeading>
              <StyledCartContentInfoDescription>
                {description}
              </StyledCartContentInfoDescription>
            </StyledCartContentInfo>
            <StyledCartContentAddressBox>
              <span>{senderAddress.street}</span>
              <span>{senderAddress.city}</span>
              <span>{senderAddress.postCode}</span>
              <span>{senderAddress.country}</span>
            </StyledCartContentAddressBox>
          </StyledCartContentHeader>

          <StyledCartPaymentContent>
            <StyledCartPaymentDatesBox>
              <StyledCartPaymentDate>
                <StyledCartPaymentDateHeading>
                  Invoice Date
                </StyledCartPaymentDateHeading>
                {formatDate(new Date(createdAt).getTime())}
              </StyledCartPaymentDate>
              <StyledCartPaymentDate>
                <StyledCartPaymentDateHeading>
                  Payment Due
                </StyledCartPaymentDateHeading>
                {formatDate(new Date(paymentDue).getTime())}
              </StyledCartPaymentDate>
            </StyledCartPaymentDatesBox>
            <StyledCartClientBox>
              <span>Bill to</span>
              <StyledCartClient>{clientName}</StyledCartClient>
              <StyledCartClientAddress>
                <span>{clientAddress.street}</span>
                <span>{clientAddress.city}</span>
                <span>{clientAddress.postCode}</span>
                <span>{clientAddress.country}</span>
              </StyledCartClientAddress>
            </StyledCartClientBox>
            <StyledCartSentToBox>
              <StyledCartSentToBoxHeading>Sent To</StyledCartSentToBoxHeading>
              <StyledCartSentToEmail>{clientEmail}</StyledCartSentToEmail>
            </StyledCartSentToBox>
          </StyledCartPaymentContent>

          {items.length > 0 && (
            <StyledCartItemListContainer>
              <StyledCartItemList>
                <StyledCartItemListHeader key="itemHeader">
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

                {items.map((item) => (
                  <StyledCartItemListRow key={item.name ? item.name : `item-`}>
                    <StyledCartItemListColumn>
                      {item.name}
                    </StyledCartItemListColumn>
                    <StyledCartItemListColumn>
                      {item.quantity}
                    </StyledCartItemListColumn>
                    <StyledCartItemListColumn>
                      {formatCurrency(item.price)}
                    </StyledCartItemListColumn>
                    <StyledCartItemListColumn>
                      {formatCurrency(item.total)}
                    </StyledCartItemListColumn>
                  </StyledCartItemListRow>
                ))}
              </StyledCartItemList>
              <StyledCartItemListFooter>
                Amount Due
                <span>{formatCurrency(total)}</span>
              </StyledCartItemListFooter>
            </StyledCartItemListContainer>
          )}
        </StyledCartContent>
      </StyledInvoiceCart>
      {isFormOpen && (
        <InvoiceForm close={closeForm} isOpen={isFormOpen} invoice={invoice} />
      )}
    </StyledInvoiceCartContainer>
  );
}

export default InvoiceCart;
