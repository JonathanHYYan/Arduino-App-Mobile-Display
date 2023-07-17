import { useState } from "react";
import { TextInput } from "./EditableTextStyles";

const EditableText = ({ text, data, setDataBase }) => {
  const [editState, setEditState] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const updateDeviceName = (name) => {
    setInputValue(name);
    setDataBase();
  }

  return (
    <>
      {editState ? (
        <TextInput
          type="text"
          value={inputValue}
          onChange={(event) => updateDeviceName(event.target.value)}
        />
      ) : (
        <p onClick={() => setEditState(true)}>{inputValue}</p>
      )}
    </>
  );
};

export default EditableText;
