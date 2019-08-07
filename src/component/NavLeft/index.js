import React, {Component} from 'react'
import { Menu } from 'antd'; 
import { NavLink } from 'react-router-dom'
import MenuConfig from '@/config/menuConfig'
import Logo from '@/public/logo-ant.svg'

import './index.less'

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    
    constructor(porps) {
        super(porps)
        this.renderMenu = this.renderMenu.bind(this)
    }

    //获取数据
    componentWillMount() {
        const Menu = this.renderMenu(MenuConfig)
        this.setState({
            Menu
        })
    }
 
    renderMenu(data) {
        return  data.map((item)=>{
                    if(item.children) {
                        return (
                            <SubMenu key= { item.key } title={ item.title }>
                               { this.renderMenu(item.children) }
                            </SubMenu>
                        )
                    }
                    return (
                        <Menu.Item key= { item.key }>
                            <NavLink to={item.key}>{item.title}</NavLink>
                        </Menu.Item>
                    )
                })
    }

    render() {

        //  设置react 图片需要注意 直接src 引入是有问题的 解决的方法是
        //  第一使用 require('路径') 引入 第二种 则是将图片使用import方式引入
        return (
            <div>
                <div className= "logo">
                    <img src= { Logo } alt= ""/>
                    <div>xxx</div>
                </div>  
                <Menu theme= "dark">
                    { this.state.Menu }
                </Menu>
            </div>
        )
    }
}


export default NavLeft