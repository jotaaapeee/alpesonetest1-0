import React, { useState } from "react";

import Header from "./pages/header";
import Modal from "./components/modal";
import PageIndex from "./pages/mainPage";
import Button from "./components/button";
import Form from "./pages/form";

import "./styles/App.scss";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Header />
      <div className="button-wrapper">
        <Button handleModalOpen={() => setIsModalVisible(true)}>
          Solicite uma cotação
        </Button>
      </div>
      {isModalVisible ? (
        <Modal handleModalClose={() => setIsModalVisible(false)}>
          <Form />
        </Modal>
      ) : null}
      <PageIndex />
    </>
  );
}

export default App;
