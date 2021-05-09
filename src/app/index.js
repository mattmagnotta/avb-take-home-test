import React, { useState, useEffect } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

import axios from "axios";
import "app/App.css";

//components
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comments from "components/Comments";

// using app as the closest ancestor to share state between components
function App() {
  //global state to be used by the child components
  const [comments, setComments] = useState([]);
  //creating the theme for the app
  const theme = createMuiTheme({
    shadows: ["none"],
    palette: {
      primary: {
        main: "#00BCD4",
      },
      secondary: {
        main: "#f1f1f1",
      },
    },
  });

  //fetching data from the provided api and setting the state with the data
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
    <MuiThemeProvider theme={theme}>
      <>
        <Header comments={comments} />
        <CommentModal comments={comments} setComments={setComments} />
        <Comments comments={comments} />
      </>
    </MuiThemeProvider>
  );
}

export default App;
