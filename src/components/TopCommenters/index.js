import {
  TopCommentersContainer,
  TopCommentersBlock,
} from "./TopCommentersElements";
import Avatar from "@material-ui/core/Avatar";
import { useEffect } from "react";

const TopCommenters = (props) => {
  const { comments } = props;
  console.log(comments);
  const getTop3 = (comments) => {
    const commentsMap = new Map();

    comments.forEach((comment, i) => {
      if (!commentsMap.has(comment.name)) {
        commentsMap.set(comment.name, 1);
      } else {
        commentsMap.set(comment.name, commentsMap.get(comment.name) + 1);
      }
    });

    const sortedCommentsMap = new Map(
      [...commentsMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let topCommentsArray = Array.from(sortedCommentsMap, ([name, value]) => ({
      name,
      value,
    }));

    console.log(topCommentsArray);

    return topCommentsArray;
  };

  let topCommentsArray = getTop3(comments).slice(0, 3);
  console.log(topCommentsArray);
  return (
    <TopCommentersContainer>
      {topCommentsArray.map((comment, index) => {
        return (
          <TopCommentersBlock>
            <Avatar>{comment.name.slice(0, 1)}</Avatar>
            <div>
              <div>{comment.name}</div>
              <div>Total Comments: {comment.value} </div>
            </div>
          </TopCommentersBlock>
        );
      })}
    </TopCommentersContainer>
  );
};
export default TopCommenters;
