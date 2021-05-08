import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: -80px;
  width: 50vw;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  background: #f1f1f1;
  background: white;
`;

export const Comment = styled.div`
  display: flex;
  margin: 10px;
`;

export const CommentName = styled.p`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0px 10px;
  font-weight: bold;
`;

export const CommentBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin: 10px;
`;
