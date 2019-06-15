const defaultState={
    inputValue: '',
    list: [1,2]
};
//输出一个函数
const reducer =(state=defaultState,action)=>{
  console.log(state,action);
  var newState =JSON.parse(JSON.stringify(state));
    if(action.type==='input_value'){
       
        newState.inputValue = action.value;
        return newState;
    }
    else if(action.type==='add_todo'){
        newState.list.push(action.value);
        newState.inputValue = '';
        return newState;
    }
    else if(action.type==='delete_todo_item'){
        newState.list.splice(action.value,1);
        return newState;
    }
    else if(action.type==='init_data'){
        newState.list=action.value;
        return newState;
    }
    return state;
}
export default reducer;


