import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FormElement from "./FormElement";
import ItemList from "./ItemList";
import Overlay from "./Overlay";
import { useRef, useState } from "react";
import useModalEffects from "../hooks/useModalEffects";
import { getPaymentDue, getTotalItemsPrice } from "../utilities/helpers";
import { useDispatch } from "react-redux";
import { addInvoiceToList, updateInvoice } from "../features/invoiceSlice";
import { v4 as uuidv4 } from "uuid";

const StyledFormContainer = styled.div`
  width: 60%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 3rem 3rem 0;
  background-color: var(--main-color);
  padding: 6rem;
  padding-left: 12rem;

  @media screen and (max-width: 991px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12rem;
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`;

const StyledHeading = styled.h3`
  > span {
    color: var(--third-color);
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
`;

const StyledFormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const StyledFormBoxHeading = styled.h4`
  color: var(--logo-dark-color);
  font-size: 1.4rem;
  font-weight: bold;
`;

const StyledFormBoxBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const StyledInputsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  position: relative;
  gap: 5%;
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

const StyledBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.5rem;
  position: relative;
  margin-top: 2rem;
`;

const StyledBtn = styled.button`
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--text-color);
  font-weight: bold;
  cursor: pointer;

  &.cancel {
    background-color: var(--secondary-color);
  }

  &.save {
    background-color: var(--logo-light-color);
    color: #fff;
  }
`;

function InvoiceForm({ invoice, close, isOpen }) {
  const { id } = useParams();
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      senderAddressStreet: invoice?.senderAddress.street || "",
      senderAddressCity: invoice?.senderAddress.city || "",
      senderAddressPostCode: invoice?.senderAddress.postCode || "",
      senderAddressCountry: invoice?.senderAddress.country || "",
      clientAddressStreet: invoice?.clientAddress.street || "",
      clientAddressCity: invoice?.clientAddress.city || "",
      clientAddressPostCode: invoice?.clientAddress.postCode || "",
      clientAddressCountry: invoice?.clientAddress.country || "",
      clientName: invoice?.clientName || "",
      clientEmail: invoice?.clientEmail || "",
      createdAt: invoice?.createdAt || "",
      description: invoice?.description || "",
      paymentTerms: invoice?.paymentTerms || "",
    },
  });
  const { errors } = formState;
  const formRef = useRef();
  const [itemsList, setItemsList] = useState(invoice?.items || []);
  const dispatch = useDispatch();

  useModalEffects(formRef, isOpen, close);

  function onSubmit({
    createdAt,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    senderAddressStreet,
    senderAddressCity,
    senderAddressPostCode,
    senderAddressCountry,
    clientAddressStreet,
    clientAddressCity,
    clientAddressPostCode,
    clientAddressCountry,
  }) {
    if (invoice) {
      dispatch(
        updateInvoice({
          id: invoice.id,
          createdAt,
          paymentDue: getPaymentDue(createdAt, paymentTerms),
          description,
          paymentTerms,
          clientName,
          clientEmail,
          status: invoice.status || "pending",
          senderAddress: {
            street: senderAddressStreet,
            city: senderAddressCity,
            postCode: senderAddressPostCode,
            country: senderAddressCountry,
          },
          clientAddress: {
            street: clientAddressStreet,
            city: clientAddressCity,
            postCode: clientAddressPostCode,
            country: clientAddressCountry,
          },
          items: itemsList,
          total: getTotalItemsPrice(itemsList),
        })
      );
      close();
    } else {
      dispatch(
        addInvoiceToList({
          id: uuidv4().slice(0, 6).toUpperCase(),
          createdAt,
          paymentDue: getPaymentDue(createdAt, paymentTerms),
          description,
          paymentTerms,
          clientName,
          clientEmail,
          status: "pending",
          senderAddress: {
            street: senderAddressStreet,
            city: senderAddressCity,
            postCode: senderAddressPostCode,
            country: senderAddressCountry,
          },
          clientAddress: {
            street: clientAddressStreet,
            city: clientAddressCity,
            postCode: clientAddressPostCode,
            country: clientAddressCountry,
          },
          items: itemsList,
          total: getTotalItemsPrice(itemsList),
        })
      );
      close();
    }
  }

  return (
    <Overlay>
      <StyledFormContainer ref={formRef}>
        {invoice && (
          <StyledHeading>
            Edit <span>#</span>
            {id}
          </StyledHeading>
        )}
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <StyledFormBox>
            <StyledFormBoxHeading>Bill From</StyledFormBoxHeading>

            <StyledFormBoxBody>
              <StyledInputsRow>
                <FormElement
                  key="senderAddressStreet"
                  label="Street Address"
                  error={errors?.senderAddressStreet?.message}
                >
                  <StyledInput
                    id="senderAddressStreet"
                    type="text"
                    placeholder="19 Union Terrace"
                    name="senderAddressStreet"
                    // disabled={isFormLoading}
                    {...register("senderAddressStreet", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="senderAddressCity"
                  label="City"
                  error={errors?.senderAddressCity?.message}
                >
                  <StyledInput
                    id="senderAddressCity"
                    type="text"
                    placeholder="London"
                    name="senderAddressCity"
                    // disabled={isFormLoading}
                    {...register("senderAddressCity", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="senderAddressPostCode"
                  label="Post Code"
                  error={errors?.senderAddressPostCode?.message}
                >
                  <StyledInput
                    id="senderAddressPostCode"
                    type="text"
                    placeholder="E1 3EZ"
                    name="senderAddressPostCode"
                    // disabled={isFormLoading}
                    {...register("senderAddressPostCode", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="senderAddressCountry"
                  label="Country"
                  error={errors?.senderAddressCountry?.message}
                >
                  <StyledInput
                    id="senderAddressCountry"
                    type="text"
                    placeholder="United Kingdom"
                    name="senderAddressCountry"
                    // disabled={isFormLoading}
                    {...register("senderAddressCountry", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>
            </StyledFormBoxBody>
          </StyledFormBox>

          <StyledFormBox>
            <StyledFormBoxHeading>Bill To</StyledFormBoxHeading>
            <StyledFormBoxBody>
              <StyledInputsRow>
                <FormElement
                  key="clientName"
                  label="Client's Name"
                  error={errors?.clientName?.message}
                >
                  <StyledInput
                    id="clientName"
                    type="text"
                    placeholder="Alex Grim"
                    name="clientName"
                    // disabled={isFormLoading}
                    {...register("clientName", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="clientEmail"
                  label="Client's Email"
                  error={errors?.clientEmail?.message}
                >
                  <StyledInput
                    id="clientEmail"
                    type="email"
                    placeholder="client@mail.com"
                    name="clientEmail"
                    // disabled={isFormLoading}
                    {...register("clientEmail", {
                      required: "This field is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provide a valid email address",
                      },
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="clientAddressStreet"
                  label="Street Address"
                  error={errors?.clientAddressStreet?.message}
                >
                  <StyledInput
                    id="clientAddressStreet"
                    type="text"
                    placeholder="84 Chrunch Way"
                    name="clientAddressStreet"
                    // disabled={isFormLoading}
                    {...register("clientAddressStreet", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="clientAddressCity"
                  label="City"
                  error={errors?.clientAddressCity?.message}
                >
                  <StyledInput
                    id="clientAddressCity"
                    type="text"
                    placeholder="London"
                    name="clientAddressCity"
                    // disabled={isFormLoading}
                    {...register("clientAddressCity", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="clientAddressPostCode"
                  label="Post Code"
                  error={errors?.clientAddressPostCode?.message}
                >
                  <StyledInput
                    id="clientAddressPostCode"
                    type="text"
                    placeholder="E1 3EZ"
                    name="clientAddressPostCode"
                    // disabled={isFormLoading}
                    {...register("clientAddressPostCode", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="clientAddressCountry"
                  label="Country"
                  error={errors?.clientAddressCountry?.message}
                >
                  <StyledInput
                    id="clientAddressCountry"
                    type="text"
                    placeholder="United Kingdom"
                    name="clientAddressCountry"
                    // disabled={isFormLoading}
                    {...register("clientAddressCountry", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>
            </StyledFormBoxBody>
          </StyledFormBox>

          <StyledFormBox>
            <StyledFormBoxBody>
              <StyledInputsRow>
                <FormElement
                  key="createdAt"
                  label="Invoice Date"
                  error={errors?.createdAt?.message}
                >
                  <StyledInput
                    id="createdAt"
                    type="date"
                    name="createdAt"
                    // disabled={isFormLoading}
                    {...register("createdAt", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>

                <FormElement
                  key="paymentTerms"
                  label="Payment Terms"
                  error={errors?.paymentTerms?.message}
                >
                  <StyledInput
                    id="paymentTerms"
                    type="number"
                    name="paymentTerms"
                    // disabled={isFormLoading}
                    {...register("paymentTerms", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="description"
                  label="Project Description"
                  error={errors?.description?.message}
                >
                  <StyledInput
                    id="description"
                    type="text"
                    placeholder="Graphic Design"
                    name="description"
                    // disabled={isFormLoading}
                    {...register("description", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>
            </StyledFormBoxBody>
          </StyledFormBox>

          <ItemList items={itemsList} editItemsList={setItemsList} />

          <StyledBtnsContainer>
            <StyledBtn className="cancel" onClick={close}>
              Cancel
            </StyledBtn>
            <StyledBtn className="save" type="submit">
              {invoice ? "Save Changes" : "Add Invoice"}
            </StyledBtn>
          </StyledBtnsContainer>
        </StyledForm>
      </StyledFormContainer>
    </Overlay>
  );
}

export default InvoiceForm;
