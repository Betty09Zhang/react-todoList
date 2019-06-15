import {INPUT_VALUE,ADD_TODO,DELE_TODO_ITEM,INIT_DATA} from '../store/actionTypes.js';
import axios from 'axios'

export const initData =(value) =>(
    {
        type: INIT_DATA,
        value
    }
)
export const inputValue =(value) =>(
    {
        type: INPUT_VALUE,
        value
    }
   
)
// 方法返回一个对象
export const addTodo= (value)=> (
   {
        type: ADD_TODO,
        value
    }
  
  
)

export const deleTodoItem =(value) =>(
   {
        type: DELE_TODO_ITEM,
        value
    }
   
)

export const getData =()=>{
    //返回一个函数 自动接收到dispatch 方法
    return (dispatch)=>{
        axios.get('/getData').then((res) =>{
            console.log(res);
            const action =initData(res.data);
            // store 接收原始action 对象。
            dispatch(action);
        })
    }

   
}