/**
 * Created by dalong on 2022/3/26.
 */

import React from 'react';
import PropTypes from 'prop-types'; // ES6

//高阶组件

function WithMouse(WrapComponent) {
    class SimMouse extends React.Component {
        state={
            x:0,
            y:0
        }
        componentWillUnmount(){
            window.removeEventListener("mousemove", this.handleMouseMove)
        }
        componentDidMount(){
            window.addEventListener("mousemove", this.handleMouseMove)
        }

        handleMouseMove = (e) => {
            this.setState(
                {
                    x:e.clientX,
                    y:e.clientY
                }
            )
        }
        render(){
            console.log(this.props)
            return <WrapComponent {...this.state} {...this.props}> </WrapComponent>
        }
    }

    //设置displayName
    SimMouse.displayName = `withSimMouse${getDisplayName(WrapComponent)}`

    return SimMouse
}

function getDisplayName(WrapComponent) {
    return WrapComponent.displayName || WrapComponent.name || 'jlComponent'
}


export default WithMouse