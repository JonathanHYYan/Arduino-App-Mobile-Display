import { useState } from "react";
import { TextInput } from "./EditableTextStyles";

// Renders title the takes in a text and replaces it with a an input  on click
const EditableText = ({ text, textTag }) => {
  const [editState, setEditState] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  
  return (
    <>
      {editState ? (
        <TextInput
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      ) : (
        <p onClick={() => setEditState(true)}>{inputValue}</p>
      )}
    </>
  );
};

export default EditableText;
