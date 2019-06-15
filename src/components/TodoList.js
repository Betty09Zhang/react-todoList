import React,{Component} from 'react'
import storage from '../model/storage'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            // 实现LocalStorage 缓存
            list:[{'title':'洗碗',checked: true},
            {'title':'洗澡',checked: false},
            {'title':'工作',checked: true},
            {'title':'下午茶',checked: false}
        
            ]
        }
    }
    increaseValue=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode===13){
            this.increaseData();
        }
    }
    increaseData=()=>{
        // 获取input 输入框的值
        var ins=this.refs.title.value;
        var list=this.state.list;
        list.push({'title':ins,checked: false});
        this.setState({
            list:list
        })
        this.refs.title.value='';
        storage.set('list',list);
    }
    removeData=(key)=>{
        var list =this.state.list;
        list.splice(key,1);
        this.setState({
            list: list
        })
        storage.set('list',list); 
    }
    //通过监听onChange 事件  切换任务状态
    changeStatus(key){
        var list=this.state.list;
        list[key].checked= !list[key].checked;
        this.setState({
            list:list
        })
        storage.set('list',list); 

    }
    // 在页面重新加载前
    componentDidMount(){
        var todolist =storage.get('list');
        this.setState({
            list: todolist
        })
    }
    render(){
        return(
            <div>
                <header className="title">
                <span style={{color: 'white',margin: '12px'}}>TodoList:</span> 
                <br/>
                <h2 className="show">亡命之徒~~~`</h2>
                <br/>
                <input ref="title" onKeyUp={this.increaseValue} /><button onClick={this.increaseData}>增加</button>
                </header>
               <h2>代办事项</h2>
                <ul>
                    {this.state.list.map((value,key)=>{
                        if(!value.checked){
                            return(
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked}  onChange={this.changeStatus.bind(this,key)}/>{value.title}
                                    <button onClick={this.removeData.bind(this,key)}>删除</button>
                                </li>
                            )
                        }
                       
                    })}
                </ul>
                <hr></hr>

                <h2>未办事项</h2>
                <ul>
                    {this.state.list.map((value,key)=>{
                        if(value.checked){
                            return(
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.changeStatus.bind(this,key)}/>{value.title}
                                    <button onClick={this.removeData.bind(this,key)}>删除</button>
                                </li>
                            )
                        }
                       
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;