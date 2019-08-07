import React, { Component } from 'react'
import { Card, Button, Radio }  from 'antd'
import './ui.less'
const ButtonGroup = Button.Group
const RadioButton = Radio.Group

class Botton extends Component {
    constructor(porps) {
        super(porps)
        this.enterLoading = this.enterLoading.bind(this)
        this.enterIconLoading = this.enterIconLoading.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)
    };

    state= {
        loading: false,
        iconLoading: false,
        size:'default'
    }

    enterLoading(){
        this.setState({
            loading: true
        })
    }

    enterIconLoading() {
        this.setState({
            iconLoading: true
        })
    }

    handleSizeChange(e){
        console.log(e)
        this.setState({
            size: e.target.value
        }) 
    }



    render () {
        return (
            <div>
                <Card title= "基础按钮" className= "card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </Card>
                <Card title= "标签按钮" className= "card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title= "Loading按钮" className= "card-wrap">
                        <Button type="primary" loading>Loading</Button>
                        <Button type="primary" size="small" loading>Loading</Button>
                        <Button type="primary" loading={ this.state.loading } onClick={ this.enterLoading }>
                            Click me!
                        </Button>
                        <Button
                            type="primary"
                            icon="poweroff"
                            loading={ this.state.iconLoading }
                            onClick={ this.enterIconLoading }
                        >
                            点击我
                        </Button>
                </Card>
                <Card title= "返回按钮" className= "card-wrap">
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button>OK</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>L</Button>
                        <Button disabled>M</Button>
                        <Button disabled>R</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>L</Button>
                        <Button>M</Button>
                        <Button>R</Button>
                    </ButtonGroup>    
                </Card>
                <Card title= "按钮尺寸" className= "card-wrap">
                    <RadioButton value= {this.state.size} onChange= {this.handleSizeChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioButton> 
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        )
    }
}

export default Botton