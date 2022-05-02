/**
 * Created by dalong on 2022/3/19.
 */
import React from 'react';

class JLFather extends React.Component {

    state = {
        lastName:"王",
        name:'jl',
        count:1
    }

    constructor(props){
        super(props);
        this.getMsgFromChildren = (msg) => {
            console.log('从子组件中接收到的信息',msg);
            this.setState({count:this.state.count+1});
        }
    }



    render(){
        const style = {
            background: `rgba(255,168,34,0.9)`
        };
        return (<div style={style} >
            父组件
            <p>内容:{this.state.name}</p>
            <JLSonOne lastName={this.state.lastName} count={this.state.count}/>
            <JLSonTwo lastName={this.state.lastName} getMsgFromChildren={this.getMsgFromChildren}/>
        </div>);
    }

}

class JLSonOne extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            background: `rgb(155,148,134)`
        };
        return (
            <div style={style}>
                子组件1
                <p>我是{this.props.lastName}家人  当前数字:{this.props.count}</p>

            </div>

        );
    }
}

//兄弟组件的通讯 将数据提升到最近的公共父组件中,由公共 父组件管理这个状态
//公共父组件的职责:1 提供共享状态 2 提供操作共享状态的方法
//要通讯的子组件只需通过props接收状态或操作状态的方法
class JLSonTwo extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        name:"计数器"
    }
    render(){
        const style = {
            background: `rgb(155,48,34)`
        };
        return (
            <div style={style}>
                子组件2
                <p>我是{this.props.lastName}家人 俺是计数器</p>
                <a onClick={
                    ()=>this.props.getMsgFromChildren(this.props.count)
                } >点我+1</a>
            </div>

        );
    }
}

//context 实现跨组件传递数据
class JLGrandson extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            background: `rgb(155,48,34)`
        };
        return (
            <div style={style}>
                孙子组件
                <p>我是{this.props.lastName}家人 俺是计数器</p>
                <a onClick={
                    ()=>this.props.getMsgFromChildren(this.props.count)
                } >点我+1</a>
            </div>

        );
    }
}

export default JLFather