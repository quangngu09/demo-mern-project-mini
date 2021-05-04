import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateNote() {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
    date: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };
  const history = useHistory();
  const createNotes = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, date } = notes;
        const newNote = {
          title,
          content,
          date,
        };
        await axios.post(`api/notes`, newNote, {
          headers: { Authorization: token },
        });
      }
      return history.push("/");
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      
      <form onSubmit={createNotes} className="create-note"><h2>Create Note</h2>
        <div className="row">
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={notes.title}
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label>Content</label>
          <textarea
            type="text"
            id="title"
            name="content"
            value={notes.content}
            required
            onChange={onChangeInput}
          />
        </div>

        <label htmlFor="date">Date</label>
        <div className="row">
          <input
            type="datetime-local"
            id="title"
            name="date"
            required
            onChange={onChangeInput}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateNote;
