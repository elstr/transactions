import styled from "styled-components";

export const Toggle = styled.div`
color: white;
  background: ${(props) => (props.type === "credit" ? "#4caf50" : "#f57f17")};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  width: 350px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Detail = styled.div`
  text-align: left;
  margin-left: 30px;
`;
