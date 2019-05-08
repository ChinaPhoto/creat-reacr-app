import React, {Component} from 'react'
import { Row,Col } from 'antd';

import './index.less'

class Header extends Component {

    render() {
        return (
            <div className= "header">                                                                                                                                                                                                                       
                <Row className= "header-top">
                    <Col span= {24} className= "">
                        <span>欢迎,我的名字</span>
                        <a href= "/#">退出</a>
                    </Col>
                </Row>
                <Row className= "header-bottom">
                    <Col span= {4} 
                        className="breadcrumb-title">
                        <span>首页</span>
                    </Col>
                    <Col span= {20}
                        className= "weather">
                        <span>下雨</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header