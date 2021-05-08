import React, { useState, useEffect } from "react";
import axios from "axios";
import "app/App.css";
import logo from "app/logo.svg";

//components
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comments from "components/Comments";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );

      setComments(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header comments={comments} />

      <CommentModal comments={comments} setComments={setComments} />

      <div className="App-header"></div>
      <Comments comments={comments} />
    </>
  );
}

export default App;
