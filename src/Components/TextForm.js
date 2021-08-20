import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase Button was Clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Lowercase Button was Clicked");
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    // console.log("Lowercase Button was Clicked");
    setText("");
  };

  const handleCopyText = () => {
    // console.log("Copy text Button was Clicked");
    let selectText = document.getElementById("myBox");
    selectText.select();
    navigator.clipboard.writeText(selectText.value);
  };

  const handleExtraSpace = () => {
    // console.log("Remove extra space Button was Clicked");
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleTextareaOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={Text}
            onChange={handleTextareaOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="mx-2 btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="mx-2 btn btn-primary" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="mx-2 btn btn-primary" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="mx-2 btn btn-primary" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="mx-2 btn btn-primary" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          <strong>{Text.split(" ").length}</strong> words and{" "}
          <strong>{Text.length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * Text.split(" ").length}</strong> Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
