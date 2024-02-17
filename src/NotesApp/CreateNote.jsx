import React, { useState } from 'react';


const CreateNote = (props) => {

  const [data, setData] = useState({
    title: "",
    content: ""
  });

  const [show, setShow] = useState(false);


  const addInput = (e) => {
    const { value, name } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value
      }
    })
  };

  const updates = () => {
    props.passNote(data);

    setData({
      title: "",
      content: ""
    })
  };

  const toggle = () => {
    setShow(true)
  }


  return (
    <div className='create-note'>
      <div className="note-panel">
        <input
          type="text"
          className="input font-monospace"
          name='title'
          value={data.title}
          onChange={addInput}
          placeholder='Add Title' 
          onClick={toggle}/>
        {show && 
          <textarea
            name="content"
            className='text'
            rows="5"
            value={data.content}
            onChange={addInput}
            placeholder='Add Details'></textarea>
        }{
          show && <div className="add-btn-box">
            <button className="btn btn-success" onClick={updates}>Add</button>
          </div>
        }

          </div>
        </div>
  )
}

        export default CreateNote;