import React from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import Todo from '../Todo/Todo';
import {useState,useEffect} from 'react';
import './TodoList.css'
import {toggleDone} from '../../Redux/Actions/Actions'

const TodoList = () => {
  const  {Todos}  = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showDone, setShowDone] = useState(false);
  const [showNotDone, setSowNotDone] = useState(false);
  const [list,setList]=useState([]);
  const handleDone=()=>{ setShowDone(true)     }
  const handleNotDone=()=>{setSowNotDone(true); setShowDone(false); }
  const handleReset = () => {
    setSowNotDone(false);
    setShowDone(false);
    dispatch(toggleDone);
   
  };
   useEffect(() => {
     setList(Todos.Todos);
     if (showDone === true) {
       setList(list.filter((obj) => obj.Done === true));
     } else if (showNotDone === true) {
       setList(list.filter((obj) => obj.Done === false));
     }
   }, [showDone, showNotDone,list]);
   

  return (
    <div>
      <div className="filter">
        <button className="button" onClick={handleDone}>
          Filter by Done
        </button>
        <button className="button" onClick={handleNotDone}>
          Filter by Not Done
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className='container'>
        {list.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList
