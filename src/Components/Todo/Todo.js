import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleDone } from "../../Redux/Actions/Actions";
 import {toggleIsDone} from "../../Redux/Actions/Actions"   ;
 import './Todo.css';
 import Button from "react-bootstrap/Button";
 import Modal from "react-bootstrap/Modal";
 import {editTodo} from "../../Redux/Actions/Actions";


const Todo = ({ todo}) => {
  const dispatch = useDispatch();
  
  const handelIsDone = () => {
    dispatch(toggleIsDone(todo.id));
  };
  const handelDone = () => {
    dispatch(toggleDone(todo.id));
  };
  const [show, setShow] = useState(false);
  const [edited,setEdited]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave=()=>{dispatch(editTodo({edited,id:todo.id}))}
   
const handleInput=(e)=>{setEdited(e.target.value) }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
        width:"1000px",
      }}
    >
      <h4>{todo.description}</h4>
      {todo.Done ? (
        <button className="btnundo" onClick={handelDone}>
          Undone
        </button>
      ) : (
        <button className="btndo" onClick={handelIsDone}>
          Done
        </button>
      )}
      <Button  onClick={handleShow} style={{background:"blueviolet", width:"100px", border:"0", borderRadius:"20px"}}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" placeholder='Edit text' defaultValue={todo.description}
        onChange={handleInput} />  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{background:"bluviolet"}} onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Todo
