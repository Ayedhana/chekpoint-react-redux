import React from 'react'
import './AddTodo.css';
import {useState} from 'react';
import {add_todo} from "../../Redux/Actions/Actions";
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  
    const dispatch=useDispatch()
    const[newTodo,setNewTodo]=useState("");
    const handelInput=(e)=>{
        setNewTodo(e.target.value);
    }
    
    const handelSubmit=(e)=>{
        
        dispatch(add_todo(newTodo));
        setNewTodo("");
        
    }
  return (
    <div>
      <h1>Add Todo</h1>
      <div className='form'>
        <form>
          <input
            type="text"
            placeholder="Add a new Task"
            className="input"
            value={newTodo}
            onChange={handelInput}
          ></input>
          </form>
          <button
            className="button"
            disabled={!newTodo}
            type="submit"
            onClick={handelSubmit}
          >
            Add Todo
          </button>
      </div>
    </div>
  );
}

export default AddTodo
