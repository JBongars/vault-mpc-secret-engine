import { decode } from "jsonwebtoken";

async function decodeJWE(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const fileContent = e.target.result;
    // Decode the JWE here
    try {
      const decoded = decode(fileContent);
      console.log(decoded); // Process the decoded data
    } catch (error) {
      console.error("Error decoding JWE:", error);
    }
  };
  reader.readAsText(file);
}

export { decodeJWE };
