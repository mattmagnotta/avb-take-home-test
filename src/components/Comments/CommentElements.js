import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  max-width: 500px;
  width: 40vw;
`;
export const Comment = styled.div`
  display: flex;
  padding: 10px;
  height: 10vh;
  margin: 5px;
`;
export const CommentName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: blue;
`;
export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin: 0 auto;
  justify-content: center;
  padding: 10px;
`;
