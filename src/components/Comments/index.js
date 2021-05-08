import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

//elements
import {
  CommentContainer,
  Comment,
  CommentName,
  CommentBody,
} from "./CommentElements";

const useStyles = makeStyles((theme) => ({
  blue: {
    color: "white",
    backgroundColor: "#00BCD4",
  },
}));

// Comments component receives the comments array via props then maps through the array and returns jsx with comment information
const Comments = (props) => {
  const classes = useStyles();
  let { comments } = props;

  //checking to see if the array has data before trying to access the properties
  if (comments.length > 1) {
    return (
      <CommentContainer>
        {comments.map((comment, index) => {
          return (
            <Comment key={index}>
              <Avatar className={classes.blue}>
                {comment.name.slice(0, 1)}
              </Avatar>
              <div>
                <CommentName> {comment.name} </CommentName>
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
