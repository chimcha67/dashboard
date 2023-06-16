import React from "react";

const PostActionComp = (props, text) => {
  return (
    <button
      onClick={props.onClick}
      className="flex done-status-icon gap-2" 
    >
      <props.icon /> Done
      
    </button>
  );
};

export default PostActionComp;
