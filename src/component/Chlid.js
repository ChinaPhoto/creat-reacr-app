import React, { Component } from 'react'

class Child extends Component {
    // constructor(props) {  // 需要设置默认值的时候 才写
    //     super (props) 
    // }

    // componentWillMount() {  // 组件将渲染
    //     console.log('will mount')
    // }

    // componentDidMount() {  // 组件完成渲染
    //     console.log('did mount')
    // }

    // componentWillReceiveProps(newProps) {  //子组件接收父组件传值的时候触发
    //     console.log('will receiveprops     ' + newProps.name)         // 并且带有参数
    // }

    // shouldComponentUpdata() {  // 调用setState 就会触发的生命周期
    //     console.log(' should updata ');
    //     return true  // 默认就是返回true  返回false 的话 下面的生命周期将不执行
    // }

    // componentWillUpdate() {  // 数据变化即将即将重新渲染
    //     console.log(' will updata ')     
    // }

    // componentDidUpdate() {  // 数据变化重新渲染结束
    //     console.log(' did updata ')
    // }

    // componentWillUnmount() {  // 组件即将销毁 
    //     console.log('will unmount')
    // }

    render () {

        if( !this.props.warn ) {
            return null
        }

        return (
            <div>
                <p> 我是测试的组件 </p>
                <p>{ this.props.name }</p>
            </div>
        )
    }
}

export default Child