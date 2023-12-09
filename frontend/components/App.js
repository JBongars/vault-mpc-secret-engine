import React, { useState } from "react";
import FileUploadComponent from "./FileUploadComponent";
import DisplayComponent from "./DisplayComponent";

function App() {
  const [content, setContent] = useState(null);

  const decodeJWE = (file) => {
    setContent("hello world!");
  };

  return (
    <div className="App">
      <FileUploadComponent decodeJWE={decodeJWE} />
      <DisplayComponent content={content} />
    </div>
  );
}

export default App;
