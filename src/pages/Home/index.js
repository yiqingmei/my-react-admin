import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Table } from 'antd'
import { getData } from '../../api'
import './index.css'

const columns = [
  {
    title: '课程',
    dataIndex: 'name'
  },
  {
    title: '今日购买',
    dataIndex: 'todayBuy'
  },
  {
    title: '本月购买',
    dataIndex: 'monthBuy'
  },
  {
    title: '总购买',
    dataIndex: 'totalBuy'
  }
]
const Home = () => {
  const userImg = require('../../assets/images/user.png')
  const [tableData, setTableData] = useState([])
  const [echartData, setEchartData] = useState({})

  useEffect(() => {
    getData().then(({ data }) => {
      console.log(data)
      const { tableData, orderData, userData, videoData } = data.data
      setTableData(tableData)
      const order = orderData
      const xData = order.date
      const keyArray =  Object.keys(order.data[0])
      const series = []
      keyArray.forEach(key => {
        series.push({
          name: key,
          data: order.data.map(item => item[key]),
          type: 'line'
        })
      })
      setEchartData({
        ...echartData,
        order: {
          xData,
          series
        },
        user: {
          xData: userData.map(item => item.date),
          series: [
            {
              name: '新增用户',
              data: userData.map(item => item.new),
              type: 'bar'
            },
            {
                name: '活跃用户',
                data: userData.map(item => item.active),
                type: 'bar'
            }
          ]
        },
        video: {
          series: [
            {
              data: videoData,
              type: 'pie'
            }
          ]
        }
      })
    })
  }, [])
  return (
    <Row className='home'>
      <Col span={8}>
        <Card hoverable>
          <div className='user'>
            <img src={userImg}/>
            <div className="userinfo">
              <p className="name">Admin</p>
              <p className="access">超级管理员</p>
            </div>
          </div>
          <div className="login-info">
            <p>上次登录时间：<span>2021-7-19</span></p>
            <p>上次登录地点：<span>武汉</span></p>
          </div>
        </Card>
        <Card style={{ marginTop: '20px' }} hoverable>
          <Table rowKey={"name"} columns={columns} dataSource={tableData} pagination={false} />
        </Card>
      </Col>
      <Col span={16}>fad</Col>
    </Row>
  )
}

export default Home