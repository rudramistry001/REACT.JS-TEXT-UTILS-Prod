import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleButtonClickLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleButtonClickClr = () => {
    let newText = '';
    setText(newText);
  };
  // Function to count words in the text
  const countWords = () => {
    // Split text by whitespace characters (\s+)
    const words = text.trim().split(/\s+/);
    // Filter out empty strings (e.g., due to multiple consecutive spaces)
    const filteredWords = words.filter(word => word !== "");
    // Return the count of filtered words
    return filteredWords.length;
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder='Enter the text here'
            ></textarea>
          </div>
          <button
            className="btn btn-primary mx-2"
            onClick={handleButtonClick}
          >
            Convert to Uppercase
          </button>

          <button
            className="btn btn-primary mx-2 "
            onClick={handleButtonClickLow}
          >
            Convert to LowerCase
          </button>

          <button
            className="btn btn-primary mx-2"
            onClick={handleButtonClickClr}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{countWords()} words</p>
        <p>{text.length} characters</p>
        <p> This text will take {countWords() * 0.008} miniutes to read out once.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
