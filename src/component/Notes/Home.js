import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

function Home() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get("api/notes", {
      headers: { Authorization: token },
    });
    //console.log(res);
    setNotes(res.data);
  };
  //console.log(notes);
  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  const deleteNote = async (id) => {
    try {
      if (token) {
        await axios.delete(`api/notes/${id}`, {
          headers: { Authorization: token },
        });
        getNotes(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div className="note-wrapper">
      {notes &&
        notes.length > 0 &&
        notes.map((note) => (
          <div className="card" key={note._id}>
            <h4 title={note.title}>{note.title}</h4>
            <div className="text-wrapper">
              <p>{note.content}</p>
            </div>
            <p className="date">{format(note.date)}</p>
            <div className="wrapper-footer">
              {note.name}
              <button className="edit">
                <Link to={`edit/${note._id}`}>Edit</Link>
              </button>
            </div>
            <button
              className="close"
              onClick={() => deleteNote(note._id)}
              style={{ width: 20, height: 20, fontWeight: 500, color: "red" }}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default Home;
