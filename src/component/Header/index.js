import React, { Component } from 'react'
import { Row,Col } from 'antd';
import until from '@/untils/until'
import Http from '@/untils/http'

import './index.less'

class Header extends Component {

    constructor(props) {
        super(props);
        this.getWeatherData = this.getWeatherData.bind(this)
    }

    state= {}  

    componentWillMount() {
        this.setState({
            userName:'我滴个神呀'
        })
        setInterval( () =>{
            let sysTime =  until.formateDate(new Date().getTime()) 
            this.setState({
                sysTime
            })
        }, 1000 ) 
        this.getWeatherData()
    }

    // 获取上海天气信息
    getWeatherData () {
        let city = '上海'

        Http.jsonp('http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2')
        .then((res)=>{
            console.log(res)
            let data = res.results[0].weather_data[2]
            this.setState({
                imgUrl: data.dayPictureUrl,
                weather: data.weather
            })
        })
    }

    render() {
        return (
            <div className= "header">                                                                                                                                                                                                                       
                <Row className= "header-top">
                    <Col span= {24} className= "">
                        <span>欢迎,{ this.state.userName }</span>
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
                        <div className= "weather-box">
                            <span className= "data">{ this.state.sysTime }</span>
                            <div className= "weather-scene">
                                <img src= { this.state.imgUrl } alt="" />
                                <span className= "w-weather">{ this.state.weather }</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header