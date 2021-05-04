import React from "react";
import EditNote from "./Notes/EditNote";
import Home from "./Notes/Home";
import CreateNote from "./Notes/CreateNote";
import Hearder from "./Notes/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Notes({ setIsLogin }) {
  return (
    <Router>
      <div className="notes-page">
        <Hearder setIsLogin={setIsLogin} />
        <section>
          <Route path="/" component={Home} exact />
          <Route path="/create" component={CreateNote} exact />
          <Route path="/edit/:id" component={EditNote} exact />
        </section>
      </div>
    </Router>
  );
}

export default Notes;
