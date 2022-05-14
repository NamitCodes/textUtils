import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handleUp clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLowClick = () => {
    // console.log("handleUp clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    setOText(event.target.value);
  };
  const handleOTextClick = () => {
    setText(Otext);
    props.showAlert("Reverted back to Original!", "success");
  };

  const [text, setText] = useState("");
  const [Otext, setOText] = useState("");
  return (
    <>
      <div
        className="container mb-3 my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
          // color: props.mode === "danger" ? "white" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#232323" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          id="my-box"
          rows="8"
        ></textarea>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"}
           my-3 mx-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"}
          my-3 mx-1`}
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"}
          my-3 mx-1`}
          onClick={handleOTextClick}
        >
          Back to Original
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(" ").length : 0} words,{" "}
          {text.length} characters
        </p>
        <p>{Math.round(0.008 * text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text-box above to preview it here."}
        </p>
      </div>
    </>
  );
}
