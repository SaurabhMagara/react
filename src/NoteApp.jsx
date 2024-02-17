import React, { useState } from 'react';
import Header from './NotesApp/Header';
import CreateNote from './NotesApp/CreateNote';
import Note from './NotesApp/Note';
import './NotesApp/notes.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NoteApp = () => {
  const [not, setNot] = useState([]);

  const update = (data) => {
    const { title, content } = data;
    if (title !== "" || content !== "") {
      setNot((oldItems) => {
        return [...oldItems, data];
      });
    }
  };

  const remove = (id) => {
    setNot((oldItems) => {
      return oldItems.filter((ele, index) => {
        return id !== index;
      });
    });
    console.log(not)
  };

  return (
    <>
      <div className="main">
        <Header />
        <CreateNote passNote={update} />
        <div className='notes-box'>
          {
            not.map((value, index) => {
              return <Note key={index} title={value.title} content={value.content} onSelect={remove} id={index} />
            })
          }
        </div>
      </div>

    </>
  );

};

export default NoteApp;