import React, { useState } from "react";

function CreateArea(prop) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    prop.addlist((prevItems) => {
      return [...prevItems, note];
    });

    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          name="title"
          value={note.title}
          onChange={handleInput}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleInput}
          placeholder="Take a note..."
          rows="4"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
