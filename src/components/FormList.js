import React from 'react';
class FormList extends React.Component{
    constructor(props){
        super();
        this.state={
            citys: ['广州', '上海','深圳'],
            city: '上海',
            hobbies: [{'hobby':'逛街','checked':true},
            {'hobby':'电玩','checked':false},
            {'hobby':'美食','checked':true}
            ],
            sex: '1',
            name:'',
            area: ''

        }
    }
    submitForm=(e)=>{
        //阻止submit 的提交事件。
        e.preventDefault();
        console.log(this.state.city,this.state.name,this.state.sex,this.state.hobbies,this.state.area);
    }
    changeName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    changeCity=(e)=>{
       console.log(e.target.value);
       this.setState({
           city: e.target.value
       })
    }
    // changeSex=(e)=>{
    //     {/**无法修改 数据的可用性  通过修改this.state.sex 中的值来切换checked 为true or false  radio 中的value 值=Model*/}
    //     // if(e.target.checked===true){
    //     //     return;
    //     // }
    //     // else{
    //     //     e.target.checked=true;
    //     // }
    //     console.log(e.target.value);
    //     this.setState({
    //         sex: e.target.value
    //     })
    // }
    changeBox=(key)=>{
        //绑定 key
       let hobbies=this.state.hobbies;
        hobbies[key].checked= !hobbies[key].checked; 
        this.setState({
            hobbies: hobbies
        }) 
    }
    areaChange=(e)=>{
        this.setState({
            area: e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
               姓名： <input type="text" onChange={this.changeName}/>
                <br/>
               性别：<input type="radio" value="0" checked={this.state.sex==='0'} name="sex" onChange={this.changeSex}/>男
               
                    <input type="radio" value="1" checked={this.state.sex==='1'} name="sex" onChange={this.changeSex}/>女
                <br/>
               城市： <select value={this.state.city} onChange={this.changeCity}>
        {this.state.citys.map(function(value,keyV){
                            return(
                                <option key={keyV}>{value}</option>
                            )
                           
                        })

                    }
                       
                    </select>
                <br/>
               
                 爱好：
                {this.state.hobbies.map((value,key)=>{

                        return(
                            <span key={key}>
                                <input type="checkbox" checked={value.checked} onChange={this.changeBox.bind(this,key)}/> {value.hobby}
                            </span>
                        )
                        
                    })
                }
                <br/>
                备注：
                <textarea onChange={this.areaChange}></textarea>
               
               
                <button type="submit" defaultValue="提交"></button>

                </form>
            </div>
        )
    }
}
export default FormList;