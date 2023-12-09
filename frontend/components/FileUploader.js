import React, { useState } from "react";

function FileUploadComponent() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!uploadedFile) {
      alert("Please upload a file");
      return;
    }
    // Call the function to handle file (e.g., decodeJWE)
    decodeJWE(uploadedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export { FileUploadComponent };
