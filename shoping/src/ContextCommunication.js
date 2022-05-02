/**
 * Created by dalong on 2022/3/20.
 */

import React from 'react';
import PropTypes from 'prop-types'; // ES6

const {Provider,Consumer} = React.createContext();

class JLApp extends React.Component {
    render () {
        {console.log('childrend:',this.props.name,this.props.color)}
        return (
            <Provider value="okok">
                <div>
                    我是jlapp的子标签:{this.props.children}

                    <JLNode/>
                </div>
            </Provider>

        );
    }
}

JLApp.propTypes={
    name:PropTypes.string.isRequired,
    color:PropTypes.array
}

JLApp.defaultProps={
    color:['red', 'blue']
}

class JLNode extends React.Component {
    render () {
        return (
            <div>
                <JLSubNode/>
            </div>
        );
    }
}

class JLSubNode extends React.Component {
    render () {
        return (
            <div>
                <JLReSubNode/>
            </div>
        );
    }
}

class JLReSubNode extends React.Component {
    render () {
        return (
            <div>
                <Consumer>
                    {data => <span>我是最底层结点--{data}</span>}
                </Consumer>
            </div>
        );
    }
}

export default JLApp