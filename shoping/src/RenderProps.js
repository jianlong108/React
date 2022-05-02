/**
 * Created by dalong on 2022/3/20.
 */
import React from 'react';
import PropTypes from 'prop-types'; // ES6

class Mouse extends React.Component {

    state={
        x:0,
        y:0
    }

    render(){
        return this.props.render("Mouse组件",this.state);
    }

    handleMouseMove = (e) => {
        this.setState(
            {
                x:e.clientX,
                y:e.clientY
            }
        )
    }
    componentWillUnmount(){
        window.removeEventListener("mousemove", this.handleMouseMove)
    }
    componentDidMount(){
        window.addEventListener("mousemove", this.handleMouseMove)
    }
}

Mouse.propTypes={
    render:PropTypes.func.isRequired
}


export default Mouse