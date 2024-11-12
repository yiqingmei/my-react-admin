import React, { useState } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux'
import CommonSide from '../components/commonSide';
import CommonHeader from '../components/commonHeader';

const { Content} = Layout;
const Main = () => {
  const collapsed = useSelector(state => state.tab.isCollapse)
  return (
    <Layout className='main-container'>
      <CommonSide collapsed={collapsed}/>
      <Layout>
        <CommonHeader collapsed={collapsed}/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main