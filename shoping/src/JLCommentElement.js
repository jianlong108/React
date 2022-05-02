/**
 * Created by dalong on 2022/3/13.
 */
import React from 'react';

import PropTypes from 'prop-types'; // ES6
class JLCommentElement extends React.Component {
    constructor (){
        super();
        this.state = {
            userName:'',
            content:'',
            comments:[
            ]
        }
        this.handleForm = e=> {
            console.log(e.target.value);

            const value = e.target.value;
            const name = e.target.name;
            this.setState({
                [name]:value
            });

        }
        this.didClickComment = ()=> {
            if(this.state.userName ==='' || this.state.content ==='') {
                alert('请输入用户名和内容');
                return;
            }
            this.setState({
                comments:[{
                    id:this.state.comments.length+1,
                    name:this.state.userName,
                    content:this.state.content
                }].concat(this.state.comments)
            });
        }
    }

    renderList() {
        if(this.state.comments.length === 0){
            return (<div> 快来抢占沙发 </div>);
        }
        return (
            <ul>
                {
                    this.state.comments.map(item => {
                        return <li style={{color:'skyblue'}} key={item.id} >
                            <h3>评论人:{item.name}</h3>
                            <p>{item.content}</p>
                        </li>
                    })
                }
            </ul>
        );
    }

    render() {
        return (
            <div>
                用户名:<input type="text"
                       placeholder="请输入评论人"
                       name="userName"
                       onChange={this.handleForm}
                       value={this.state.userName}
                />
                <br/>
                内容:<input type="text"
                       placeholder="请输入评论"
                       name="content"
                       onChange={this.handleForm}
                       value={this.state.content}
                />
                <br/>
                <button onClick={this.didClickComment}>发表评论</button>
                {this.renderList()}
            </div>
        );
    }

}

JLCommentElement.propTypes={
    name:PropTypes.string.isRequired
}
export default JLCommentElement