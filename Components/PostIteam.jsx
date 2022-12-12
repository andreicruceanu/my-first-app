import React from "react";

function PostIteam(props) {
  const { author, comment } = props;
  return (
    <div>
      <h5>Author: {author}</h5>
      <h5>Comment: {comment}</h5>
    </div>
  );
}

export default PostIteam;
