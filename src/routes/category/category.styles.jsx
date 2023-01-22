import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h2`
  font-size: 58px;
  margin-bottom: 25px;
  text-align: center;
`;
