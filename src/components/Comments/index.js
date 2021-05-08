import Avatar from "@material-ui/core/Avatar";

//elements
import {
  CommentContainer,
  Comment,
  CommentName,
  CommentBody,
} from "./CommentElements";

const Comments = (props) => {
  let { comments } = props;
  if (comments.length > 1) {
    console.log(comments);
    return (
      <CommentContainer>
        {comments.map((comment, index) => {
          return (
            <Comment>
              <Avatar>{comment.name.slice(0, 1)}</Avatar>
              <div>
                <CommentName key={comment.id}> {comment.name} </CommentName>
                <CommentBody> {comment.body} </CommentBody>
              </div>
            </Comment>
          );
        })}
      </CommentContainer>
    );
  }
  return <></>;
};
export default Comments;
