import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: bold;
  gap: 2rem;
  position: relative;
`;

const StyledFilterInput = styled.select`
  width: 14rem;
  background-color: var(--third-color);
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 1.6rem;
`;

const StyledFilterOption = styled.option``;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = !searchParams.get("filter")
    ? ""
    : searchParams.get("filter");
  const [filter, setFilter] = useState(filterParam);

  function handleFilterChange(e) {
    const newValue = e.target.value;
    setFilter(newValue);
    if (newValue === "") {
      searchParams.delete("filter");
    } else {
      searchParams.set("filter", newValue);
    }
    setSearchParams(searchParams);
  }

  return (
    <StyledFilterContainer>
      <label>Filter By Status</label>
      <StyledFilterInput
        id="filter"
        onChange={handleFilterChange}
        value={filter}
      >
        <StyledFilterOption value="" key="all">
          All
        </StyledFilterOption>
        <StyledFilterOption value="paid" key="paid">
          Paid
        </StyledFilterOption>
        <StyledFilterOption value="pending" key="pending">
          Pending
        </StyledFilterOption>
        <StyledFilterOption value="draft" key="draft">
          Draft
        </StyledFilterOption>
      </StyledFilterInput>
    </StyledFilterContainer>
  );
}

export default Filter;
