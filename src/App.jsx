import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [list, addList] = useState([]);

  function onDelete(id) {
    addList((prevList) => {
      return prevList.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <Header />
      <CreateArea addlist={addList} />
      <div className="clearfix">
        {list.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={onDelete}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
