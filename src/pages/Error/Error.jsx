import styled from "styled-components";

const ErrorBox = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #cfcece7b;
  color: #333;
  font-size: 4rem;
`;

function Error() {
  return <ErrorBox>Error loading this route 😥😥</ErrorBox>;
}

export default Error;
