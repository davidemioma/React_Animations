import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { useState } from "react";
import Transition from "react-transition-group/Transition";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const showBlockHandler = () => {
    setShowBlock((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1>React Animations!</h1>

      <button
        style={{ margin: "1rem" }}
        className="Button"
        onClick={showBlockHandler}
      >
        Toggle
      </button>

      <Transition in={showBlock} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              opacity: state === "exiting" ? 0 : 1,
              transition: "opacity 0.5s ease-out",
            }}
          ></div>
        )}
      </Transition>

      <Modal show={modalIsOpen} closed={closeModal} />

      {modalIsOpen && <Backdrop show={modalIsOpen} />}

      <button className="Button" onClick={showModal}>
        Show Modal
      </button>

      <h3>Animating Lists</h3>

      <List />
    </div>
  );
}

export default App;
