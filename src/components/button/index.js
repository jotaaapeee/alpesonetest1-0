import React from "react";

import "./button.scss";

function Button({ handleModalOpen, children }) {
  return <button onClick={handleModalOpen}>{children}</button>;
}

export default Button;
