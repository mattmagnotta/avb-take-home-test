import styled from "styled-components";

export const TopCommentersContainer = styled.div`
  display: flex;
  margin: 0 auto;
  background: #00bcd4;
  height: 500px;
`;
export const TopCommentersContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0% auto;
  max-width: 1300px;
  width: 80%;
`;

export const TopCommentersTextBlockContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const TopCommentersBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const TopCommentersText = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

export const TopCommentersName = styled.p`
  display: flex;
  margin: 0 5px;
  font-weight: bold;
  color: white;
`;

export const TopCommentersCount = styled.p`
  color: white;
  margin: 0 5px;
`;

export const Heading = styled.h1`
  color: white;
`;
