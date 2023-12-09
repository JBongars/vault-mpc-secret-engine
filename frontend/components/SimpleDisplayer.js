import React from "react";

function SimpleDisplayComponent({ content }) {
  return <div>{content && <pre>{JSON.stringify(content, null, 2)}</pre>}</div>;
}

export { SimpleDisplayComponent };
