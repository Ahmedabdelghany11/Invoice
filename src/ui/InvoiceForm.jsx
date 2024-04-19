import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FormElement from "./FormElement";
import ItemList from "./ItemList";
import Overlay from "./Overlay";
import { useRef } from "react";
import useModalEffects from "../hooks/useModalEffects";

const StyledFormContainer = styled.div`
  width: 50%;
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
    padding-left: 6rem;
    padding-top: 12rem;
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
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: var(--main-transition);
  background-color: var(--secondary-color);
  color: var(--text-color);
  cursor: pointer;
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

function InvoiceForm({ close, isOpen }) {
  const { id } = useParams();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const formRef = useRef();

  useModalEffects(formRef, isOpen, close);

  function onSubmit() {}

  return (
    <Overlay>
      <StyledFormContainer ref={formRef}>
        <StyledHeading>
          Edit <span>#</span>
          {id}
        </StyledHeading>
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <StyledFormBox>
            <StyledFormBoxHeading>Bill From</StyledFormBoxHeading>

            <StyledFormBoxBody>
              <StyledInputsRow>
                <FormElement
                  key="streetAddressFrom"
                  label="Street Address"
                  error={errors?.streetAddressFrom?.message}
                >
                  <StyledInput
                    id="streetAddressFrom"
                    type="text"
                    placeholder="19 Union Terrace"
                    name="streetAddressFrom"
                    // disabled={isFormLoading}
                    {...register("streetAddressFrom", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="cityFrom"
                  label="City"
                  error={errors?.cityFrom?.message}
                >
                  <StyledInput
                    id="cityFrom"
                    type="text"
                    placeholder="London"
                    name="cityFrom"
                    // disabled={isFormLoading}
                    {...register("cityFrom", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="postCodeFrom"
                  label="Post Code"
                  error={errors?.postCodeFrom?.message}
                >
                  <StyledInput
                    id="postCodeFrom"
                    type="text"
                    placeholder="E1 3EZ"
                    name="postCodeFrom"
                    // disabled={isFormLoading}
                    {...register("postCodeFrom", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="countryFrom"
                  label="Country"
                  error={errors?.countryFrom?.message}
                >
                  <StyledInput
                    id="countryFrom"
                    type="text"
                    placeholder="United Kingdom"
                    name="countryFrom"
                    // disabled={isFormLoading}
                    {...register("countryFrom", {
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
                  key="streetAddressTo"
                  label="Street Address"
                  error={errors?.streetAddressTo?.message}
                >
                  <StyledInput
                    id="streetAddressTo"
                    type="text"
                    placeholder="84 Chrunch Way"
                    name="streetAddressTo"
                    // disabled={isFormLoading}
                    {...register("streetAddressTo", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="cityTo"
                  label="City"
                  error={errors?.cityTo?.message}
                >
                  <StyledInput
                    id="cityTo"
                    type="text"
                    placeholder="London"
                    name="cityTo"
                    // disabled={isFormLoading}
                    {...register("cityTo", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="postCodeTo"
                  label="Post Code"
                  error={errors?.postCodeTo?.message}
                >
                  <StyledInput
                    id="postCodeTo"
                    type="text"
                    placeholder="E1 3EZ"
                    name="postCodeTo"
                    // disabled={isFormLoading}
                    {...register("postCodeTo", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
                <FormElement
                  key="countryTo"
                  label="Country"
                  error={errors?.countryTo?.message}
                >
                  <StyledInput
                    id="countryTo"
                    type="text"
                    placeholder="United Kingdom"
                    name="countryTo"
                    // disabled={isFormLoading}
                    {...register("countryTo", {
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
                  key="invoiceDate"
                  label="Invoice Date"
                  error={errors?.invoiceDate?.message}
                >
                  <StyledInput
                    id="invoiceDate"
                    type="date"
                    name="invoiceDate"
                    // disabled={isFormLoading}
                    {...register("invoiceDate", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>

                <FormElement
                  key="paymentTerms"
                  label="Payment Terms"
                  error={errors?.paymentTerms?.message}
                >
                  <StyledSelect
                    id="paymentTerms"
                    name="paymentTerms"
                    // disabled={isFormLoading}
                    {...register("paymentTerms", {
                      required: "This field is required",
                    })}
                  >
                    <option value="Net 30 Days" key="Net 30 Days">
                      Net 30 Days
                    </option>
                  </StyledSelect>
                </FormElement>
              </StyledInputsRow>

              <StyledInputsRow>
                <FormElement
                  key="projectDescription"
                  label="Project Description"
                  error={errors?.projectDescription?.message}
                >
                  <StyledInput
                    id="projectDescription"
                    type="text"
                    placeholder="Graphic Design"
                    name="projectDescription"
                    // disabled={isFormLoading}
                    {...register("projectDescription", {
                      required: "This field is required",
                    })}
                  />
                </FormElement>
              </StyledInputsRow>
            </StyledFormBoxBody>
          </StyledFormBox>

          <ItemList />

          <StyledBtnsContainer>
            <StyledBtn className="cancel" onClick={close}>
              Cancel
            </StyledBtn>
            <StyledBtn className="save">Save Changes</StyledBtn>
          </StyledBtnsContainer>
        </StyledForm>
      </StyledFormContainer>
    </Overlay>
  );
}

export default InvoiceForm;
