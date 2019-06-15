import React from 'react';
import 'antd/dist/antd.css';
import store from '../store';
import TodoListUI from './TodoListUI.js';
import {inputValue,deleTodoItem,addTodo,initData, getData} from '../store/actionCreators.js';
import {connect} from 'react-redux';

class Todo extends React.Component{
    constructor(props){
        super(props);
      
      //  this.state = store.getState();
      
        this.onHandleChange=this.onHandleChange.bind(this);
        this.updateHandle = this.updateHandle.bind(this);
        this.onHandleSubmit= this.onHandleSubmit.bind(this);
        this.handleItemDelete= this.handleItemDelete.bind(this);
       
        //订阅 store 的变化；组件更新变化，
       store.subscribe(this.updateHandle);
    }

    componentDidMount(){
       const action =getData();
       // 传给store 时  action函数 直接执行（thunk 中间件的缘故）
        store.dispatch(action);
       
        
    }
    updateHandle(){
        console.log('update');
        //每当store 变化时 重新赋值
        this.setState(store.getState());
    }
    onHandleChange(e){
        // const action={
        //     type: INPUT_VALUE,
        //     value: e.target.value
        // }
        // console.log(e.target.value);
        const action =inputValue(e.target.value);
        store.dispatch(action);
      
    }
    onHandleSubmit(){
     
        // const action={
        //     type: ADD_TODO,
        //     value: this.state.inputValue
        // }
       
        
       const action= addTodo(this.state.inputValue);
        store.dispatch(action);

    }
    handleItemDelete(value){
        // const action={
        //     type: DELE_TODO_ITEM,
        //     value: index
        // }
        
        const action =deleTodoItem(value);
        store.dispatch(action);
      
    }
    render(){
        return(
           <TodoListUI inputValue={this.props.inputValue} onHandleChange={this.props.onHandleChange} 
           onHandleSubmit={this.props.onHandleSubmit} handleItemDelete={this.props.handleItemDelete}  list={this.props.list}/>
        )
    }

}

// 连接规则  state 指代store里面的数据  store 映射为组件中的 props
const mapStateToProps =(state) =>{
    return{
        inputValue: state.inputValue,
        list: state.list
    }
}

// dispatch 方法挂载到props 上   改变store 内容
const mapDispatchToProps=(dispatch) =>{
    return{
        onHandleChange(e){
            // const action={
            //     type: INPUT_VALUE,
            //     value: e.target.value
            // }
            // console.log(e.target.value);
            const action =inputValue(e.target.value);
            dispatch(action);
          
        },
        onHandleSubmit(){
     
            // const action={
            //     type: ADD_TODO,
            //     value: this.state.inputValue
            // }
           
            
           const action= addTodo(this.state.inputValue);
           dispatch(action);
    
        },
        handleItemDelete(value){
            // const action={
            //     type: DELE_TODO_ITEM,
            //     value: index
            // }
            
            const action =deleTodoItem(value);
            dispatch(action);
          
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);