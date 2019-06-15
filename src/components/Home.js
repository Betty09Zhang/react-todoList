import React, {Component} from 'react';
import logo from '../assets/imgs/logo.svg';
import '../assets/css/base.css';
class Home extends Component{

	constructor(){
		super();
		//react 数据
		this.state={
			name:'zm',
			title: 'react title',
			list:[<p>hello1</p>,<p>hello2</p>],
			list2:[123,456],
			style: {color: 'blue'}
		}
		
	}
	run(event){
		// 获取dom元素的属性值aid属性
		console.log(event.target.getAttribute('aid'));
	}
	getValue=()=>{
		console.log(this.state.name)
	}
	inputChange =(event)=>{
		// var value =event.target.value;
		var value =this.refs.name.value;
		console.log(value);
		this.setState({
			name: value
		})
	}
	render(){
		return(

        	<div>react  hello
            {/*绑定数据*/}
        	<p>{this.state.name}</p>

        	{/*绑定属性*/}
        	<div title={this.state.title}>hello world</div>
        		{/* for  class为 js 关键字 这里改为htmlFor className
        		<label for="name">姓名：</label>*/}
        		<label htmlFor="name">姓名：</label>
        		<input id="name"/>
        			<hr/>
        	{/*引入本地图片*/}
        		<img src={logo}/>

        	{/* es5 方式引入*/}
        		<img src={require('../assets/imgs/logo.svg')}/>

        	{/*加载远程图片 */}
        		<img src="https://www.baidu.com/img/bd_logo1.png?where=super"/>
        		{this.state.list}
        		<ul style={this.state.style}>
        			{this.state.list2.map( (value,keyV) =>{
        				return(

        					<li key={keyV} >value</li>
        					)
        			})}

        		</ul>
				{/**实现MVVM 双向数据绑定  用value 绑定model 中的数据时 input 中必须由监听事件onChange监听*/}
				<label>输入</label><input type="text" onClick={this.run.bind(this)}  aid="123" onChange={this.inputChange} ref="name" value={this.state.name}/>
				{/** 1. 通过事件对象获取表单的值 */}
				{/*点击按钮获取 input输入框的值  值为state 中的name*/}
				{/*监听表单改变事件  在事件中获取其值 把值赋给state 中的某对象   点击按钮获取state某对象的值 */}
					{/** 2. 通过ref 属性获取dom节点  react 中有refs 对象*/}
				<button onClick={this.getValue}>按钮</button>
				{this.state.name}

				{/**用value 绑定model 中的数据时  必须添加监听事件onChange*  defaultValue 实现Model--view*/}
				<input type="text" defaultValue={this.state.name} />
        	</div>
        	

			);
	}
}

export default Home;