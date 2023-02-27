import {
  ADD_TODO,
  TOGGLE_DONE,
  TOGGLE_IS_DONE,
  EDIT_TODO,
} from "../Constants/Actions-types";

export const add_todo=(payload)=>{
     return{
        type:ADD_TODO,
        payload
    }
}
    
   export const toggleIsDone = (payload) => { 
     return {
       type: TOGGLE_IS_DONE,
       payload,
     };
   };
   export const toggleDone = (payload) => {
     return {
       type: TOGGLE_DONE,
       payload,
     };
   };
    export const editTodo = (payload) => {
      console.log(payload, "action");
      return {
        type: EDIT_TODO,
        payload,
      };
    };