import React from "react";
import PostIteam from "./PostIteam";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.post.map((post, index) => {
      return (
        <PostIteam
          author={post.title}
          comment={post.body}
          key={index}
        ></PostIteam>
      );
    });
  }
}

export default PostList;
