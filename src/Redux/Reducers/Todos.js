
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO } from '../Constants/Actions-types';
import { TOGGLE_IS_DONE } from "../Constants/Actions-types";
import {TOGGLE_DONE} from "../Constants/Actions-types";
import {EDIT_TODO} from "../Constants/Actions-types";
const initialeState = {
  Todos: [
    {
      id: uuidv4(),
      description: "Read a book",
      Done: false,
    },
    {
      id: uuidv4(),
      description: "read a newsletter",
      Done: false,
    },
    {
      id: uuidv4(),
      description: "read a document",
      Done: true,
    },
    {
      id: uuidv4(),
      description: "pratic a sport",
      Done: true,
    },
  ],
};

const Todos = (state=initialeState,action) => {
  const{type,payload}=action
  
switch (type) {
  case ADD_TODO: {
    return {
      Todos: [
        ...state.Todos,
        { id: uuidv4(), description: payload, Done: false },
      ],
    };
  }

  case TOGGLE_IS_DONE:
    console.log(payload, "reducer");
    return {
      Todos: state.Todos.map((obj) =>
        obj.id === payload ? { ...obj, Done: !obj.Done } : obj
      ),
    };
  case TOGGLE_DONE:
    
    return {
      Todos: state.Todos.map((obj) =>
        obj.id === payload ? { ...obj, Done: false } : obj
      ),
    };
    case EDIT_TODO:
    console.log(payload)
      return {
        Todos: state.Todos.map((obj) =>
          obj.id === payload.id ? { ...obj,description:payload.edited } : obj
        ),
      };
  default:
    return state;
} 
}

export default Todos;


