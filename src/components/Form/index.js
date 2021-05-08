import React, { useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
// custom hook to get the input value from the form
const useInputValue = (intailValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const Form = (props) => {
  let { comments, setComments, handleClose } = props;

  const commentText = useInputValue("");
  const commentName = useInputValue("");

  return (
    <div style={{ background: "#ffff" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComments([
            { name: commentName.value, body: commentText.value },
            ...comments,
          ]);
          handleClose();
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Name (First Last)"
          autoFocus={true}
          {...commentName}
        />
        <TextField variant="outlined" {...commentText} />
        <Button type="submit"> ADD COMMENT </Button>
      </form>
    </div>
  );
};
export default Form;
