import ReactDOM from "react-dom";

interface ModalPixelProps {
  isOpen: boolean,
  toggleModal: () => void,
  children: any | undefined,
  activeToggleModal: boolean
}

function ModalPixel(props: ModalPixelProps){
  const modalStyle = {
    display: props.isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    zIndex: '999',
  };

  return props.isOpen
    ? ReactDOM.createPortal(
        <div style={modalStyle}>
          {props.children}
          {props.activeToggleModal?
            <button onClick={props.toggleModal}>Cerrar</button>: null}
        </div>,
        document.body
      )
    : null;
}

export default ModalPixel
