import React, { Component } from 'react';
import Child from './Chlid'
import { Button } from 'antd';
// import 'antd/dist/antd.css';
import './life.less'

class Life extends Component  {

    constructor(props) {
        super(props)
        this.state= {
            count: 1,
            arr: ['1','2','3','4']
        }
    }

    // 添加的方法
    Add() { 
       this.setState({
           count: this.state.count + 1
       },()=>{
           console.log(this.state.count)
       })   
    }
    // 减少的方法
    Less = ()=>{
        this.setState({
            count: this.state.count - 1 
        })
        console.log(this.state.count)
    }


    shouldComponentUpdate() {  // state 状态改变的生命周期里 不能直接使用setState() 方法
        console.log('我是生命周期里面触发的' + this.state.count)
        return true
    }
    componentWillUpdate() {  // 数据变化即将即将重新渲染
        console.log(' will updata ' + this.state.count)     
    }

    componentDidUpdate() {  // 数据变化重新渲染结束
        console.log(' did updata ' + this.state.count)
    }

    render() {
        let isShow = this.state.count%2 === 0 ? true: false
        //  console.log(this.state.arr)
         const numbers = this.state.arr
        console.log(numbers)
        const listItem =  numbers.map((val,index)=>
            <li key={index.toString()}>
                {val}
            </li>
        )


        return (
            <div>
                <p className= "p">测试</p>
                <Button 
                    type= "primary"
                    ghost= "false"
                    icon= "left"
                    onClick= { this.Add.bind( this ) }> 
                    我是组件button 
                </Button>
                <button onClick= {this.Add.bind( this )}>点击加一个</button>
                <button onClick= {this.Less}>点击少一个</button>
                <p>{ this.state.count }</p>
                <ul>{ listItem }</ul>
                <Child
                    warn= { isShow }
                    name= { this.state.count }
                />
            </div>
        )
    }  
}

export default Life