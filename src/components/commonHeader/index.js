import React from 'react'
import { Button, Layout, Dropdown, Avatar, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { collapseMenu } from '../../store/reducers/tab';
import './index.css'

const { Header} = Layout;
const CommonHeader = ({collapsed}) => {
  const dispatch = useDispatch();
  const setCollapsed = () =>{
    dispatch(collapseMenu())
  }
  return (
    <Header className="header-container">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 48,
              height: 32,
              backgroundColor: '#fff'
            }}
          />
        </Header>
  )
}

export default CommonHeader