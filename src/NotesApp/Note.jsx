import React from 'react';


const Note = ({ title, content, onSelect, id }) => {
  return (

    <div className="note">
      <h3 className="title">{title}</h3>
      <p className="details">{content}</p>
      <div className="del-box">
        <button className=" btn btn-outline-danger" onClick={() => {
          onSelect(id);
        }}>Delete</button>
      </div>

    </div>

  )
}

export default Note;