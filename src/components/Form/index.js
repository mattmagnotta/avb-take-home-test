import React, { useState } from "react";
import {
  FormContainer,
  FForm,
  FormInput,
  FormTextArea,
} from "./FormElements.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  primary: {
    color: "white",
    background: "blue",
  },
}));

// creating a custom hook to get the input values from the form
const useInputValue = (intailValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

//Form takes in a array of comments from the parent and a setter function to set the comments with the input values from the form
const Form = (props) => {
  const classes = useStyles();

  let { comments, setComments, handleClose } = props;

  // input values from the form
  const commentText = useInputValue("");
  const commentName = useInputValue("");

  const handleSubmit = (e) => {
    if (!commentName.value) {
      alert("You must enter your name");
    } else if (!commentText) {
      alert("You must enter your name");
    }
    setComments([
      { name: commentName.value, body: commentText.value },
      ...comments,
    ]);
    handleClose();
  };

  return (
    <FormContainer>
      <FForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <FormInput
          placeholder="Name (First Last)"
          autoFocus={true}
          {...commentName}
        />
        <FormTextArea
          placeholder="Start typing to add your comment"
          {...commentText}
        />
        <Button type="submit" color={classes.primary}>
          {" "}
          ADD COMMENT{" "}
        </Button>
      </FForm>
    </FormContainer>
  );
};
export default Form;
