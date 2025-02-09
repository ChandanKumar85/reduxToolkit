import React from "react";

function UserforwardRef({ inputRef }) {
  console.log("Child Comp.....");
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default UserforwardRef;
