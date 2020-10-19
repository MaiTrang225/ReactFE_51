import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
    constructor (props){
        super (props);
        this.state={}
        console.log('constructor Child')
    }

    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps Child')
        return null
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate Child')
        return true
    }
    render() {
        console.log('Render Child')
        return (
            <div>
              <h3>Child Number :{this.props.number}</h3>
              Component child
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMountChild')
    }
    componentDidUpdate(){
        console.log('componentDidUpdateChild')
    }

    // Life cycle chạy trước khi component mất khỏi giao diện
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
}
