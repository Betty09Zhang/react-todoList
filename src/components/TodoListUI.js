import { Input } from 'antd';
import { Button,List } from 'antd';
import React from 'react';
const TodoListUI =(props)=>{
    return(
        <div >
        <Input value={props.inputValue} placeholder="todolist" style={{width: '200px',margin: '20px'}} onChange={props.onHandleChange} 
        />
        <Button type="primary" onClick={props.onHandleSubmit}>提交</Button>
        <List style={{width: '200px',margin: '20px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => <List.Item onClick={() =>{ props.handleItemDelete(index)}}>{item} </List.Item>} 
            />
    </div>
    )
}

export default TodoListUI;