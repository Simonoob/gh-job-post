import React from "react";

const Loading = () => {
  return (
    <Spinner animation="grow" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;
