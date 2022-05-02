/**
 * Created by dalong on 2022/3/13.
 */
import React from 'react';

// class JLLoginElement extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             text:'',
//             password:'',
//             city:'bj',
//             isChecked:false
//         }
//
//         this.onChangeName = e => {
//             console.log(e.target.value);
//             return this.setState(
//                 {text : e.target.value}
//             )
//         }
//
//         this.onChangePassWord = e => {
//             console.log(e.target.value);
//             return this.setState(
//                 {password : e.target.value}
//             )
//         }
//
//         this.onChangeCity = e => {
//             console.log(e.target.value);
//             return this.setState(
//                 {city : e.target.value}
//             )
//         }
//
//         this.onChangeChecked = e => {
//             console.log(e.target.checked);
//             return this.setState(
//                 {isChecked : e.target.checked}
//             )
//         }
//     }
//
//     render () {
//         return (
//             <div>
//                 用户名: <input type="text" value={this.state.text} onChange={this.onChangeName}></input>
//                 <br/>
//                 密码: <textarea value={this.state.password} onChange={this.onChangePassWord}></textarea>
//                 <br/>
//                 城市: <select value={this.state.city} onChange={this.onChangeCity}>
//                         <option value="sh">上海</option>
//                         <option value="bj">北京</option>
//                         <option value="sz">深圳</option>
//                     </select>
//                 <br/>
//                 <input type="checkbox" checked={this.state.isChecked} onChange={this.onChangeChecked}/>
//             </div>
//
//         );
//     }
// }

class JLLoginElement extends React.Component {
    constructor() {
        super();

        this.state = {
            userName:'',
            password:'',
            city:'bj',
            isChecked:false
        }

        this.handleForm = e => {
            const target = e.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            console.log(name + ':' + value);
            return this.setState(
                {[name] : value}
            )
        }
    }

    render () {
        return (
            <div>
                用户名: <input name="userName" type="text" value={this.state.text} onChange={this.handleForm}></input>
                <br/>
                密码:  <textarea name="password" value={this.state.password} onChange={this.handleForm}></textarea>
                <br/>
                城市:  <select name="city" value={this.state.city} onChange={this.handleForm}>
                        <option value="sh">上海</option>
                        <option value="bj">北京</option>
                        <option value="sz">深圳</option>
                     </select>
                <br/>
                <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.handleForm}/>
            </div>

        );
    }
}


export default JLLoginElement;