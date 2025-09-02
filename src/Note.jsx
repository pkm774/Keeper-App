import React from "react";

function Note(prop) {
  return (
    <div className="note">
      <h1>{prop.title}</h1>
      <p>{prop.content}</p>
      <button
        style={{ background: "none" }}
        onClick={() => {
          prop.onDelete(prop.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
