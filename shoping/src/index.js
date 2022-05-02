import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JLLoginElement from './JLLoginElement';
import JLCommentElements from './JLCommentElement';
import JLFather from './componentCommunication';
import JLApp from './ContextCommunication';
import Mouse from './RenderProps';
import WithMouse from './HighOrderComponent';

const songs = [
    {id:1,name:"痴心绝对"},
    {id:2,name:"冲动的惩罚"},
    {id:3,name:"你爱我像谁"}
];

const songList = (
    <ul>
        {songs.map(item => {
            return <li style={{color:'skyblue'}} key={item.id}>{item.name}</li>
        })}
    </ul>
);

const divJsx = (<div className="divE">我是div</div>);


// 函数的名字必须是大写字母开头,这是一个约定
// 函数组件 称为无状态组件
// 函数组件的通讯方式:数据传递 通过参数props接收数据
// props 为只读属性
function JLElement(props) {
    //必须有return
    console.log(props);
    return(
        <div backgroudcolor={props.colors[0]}>
            我是一个函数组件 {props.name}
            {props.tag}
        </div>
    )
}

const JLE =() => (<div>我是一个函数组件  箭头函数 JLE</div>);

//类名必须以大写字母开头
//类组件必须继承自React.Component,从而可以使用父类中提供的方法或属性
//类组件必须提供render()方法
//render方法必须有返回值,表示该组件的结构
// 类组件称为有状态组件
// 类组件的通讯方式:数据传递 通过参数this.props接收数据
// this.props 为只读属性
// 构造函数  要把props 传到super.否则在构造函数中无法拿到对应的值
class JLClassEle extends React.Component {
    constructor(props) {
        super(props);
    }

    didClick(e) {
        //e 为事件对象 合成事件...阻止默认的操作
        // e.preventDefault();
        console.log('点击了a');
    }

    render() {
        console.log(this.props);
        return <a href={this.props.address} onClick={this.didClick}>{this.props.name}</a>
    }
}

class JLLogin extends React.Component {
    didClickBtn () {
        console.log('点击了按钮');
    }
    didFocusBtn () {
        console.log('按钮焦点');
    }
    render () {
        return <button onClick={this.didClickBtn} onFocus={this.didFocusBtn}>登录</button>
    }
}

function JLRegist() {
    function handleClick() {
        console.log('注册');
    }

    return (<button onClick={handleClick}>注册</button>);
}

// setState 相关问题演练
class JLCounter extends React.Component {
    //第一种初始化方式 state

    constructor () {
        super();
        //bind 绑定this
        this.didClick = this.didClick.bind(this);
        this.state = {
            count:108
        }

        // 推荐使用
        this.didClickBtn = ()=> {
            this.setState({
                count:this.state.count + 2
            });
        }
    }

    // 第二种方式
    // state = {
    //     count : 9
    // }

    // 如果不绑定this TypeError  cannot read property 'setState' on undefined
    didClick() {
        console.log(this); //undefinde
        this.setState({
            count:this.state.count + 1
        });
    }

    render() {

        return (
            <div>
                当前值: {this.state.count}
                <button onClick={this.didClickBtn}>+1</button>
            </div>
        );

        // 1 箭头函数解决this丢失的问题,因为箭头函数没有this
        // return (
        //     <div>
        //         当前值: {this.state.count}
        //         <button onClick={ () => this.setState({
        //             count:this.state.count + 1
        //         }) }>+1</button>
        //     </div>
        // );
    }

}

const Position = (props) => (
    <p>
        高阶鼠标的(坐标x:{props.x} 坐标y:{props.y} 透传的信息:{props.a})
    </p>
)

const SimPosition = WithMouse(Position)

const mainTitle = (
    <div className={'mainTitle'}>
        hello react
        {divJsx}
        {songList}
        <JLLogin/>
        <JLRegist />
        <JLE />
        {/*非string类型 需要使用{}保住*/}
        <JLElement name="jl"
                   age={19}
                   colors={['red','green','blue']}
                   fn={()=> console.log('这是一个函数')}
                   tag={<p>这是一个p标签</p>}
        />
        <JLClassEle  name="京东" address="https:www.jd.com"/>
        <JLFather/>
        <JLCounter />
        <JLLoginElement/>
        <JLCommentElements name="评论组件"/>
        <JLApp name="JLAPP组件1">
            <p>哈哈哈,p标签</p>
        </JLApp>
        <JLApp name="JLAPP组件2" color={['1','2']}>
            {/*{*/}
                {/*()=> console.log("children为一个函数")*/}
            {/*}*/}
        </JLApp>

        <SimPosition a="1"/>
        {/*<Mouse render={(parmOne, state)=><p>{parmOne} 鼠标的坐标x:{state.x} 鼠标的坐标y:{state.y}</p>} />*/}
        <Mouse render={(parmOne, state)=><span style={
            {
                background:'blue',
                color:'white',
                position:'fixed',
                top:state.y-25,
                left:state.x-25,
                width:50,
                hight:50
            }

        }>{parmOne}</span>} />

    </div>


);
//使用函数名 作为标签名
// ReactDOM.render(<JLElement />, document.getElementById('root'));

ReactDOM.render(mainTitle, document.getElementById('root'));