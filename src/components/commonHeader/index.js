import React from 'react'
import { Button, Layout, Dropdown, Avatar, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { collapseMenu } from '../../store/reducers/tab';

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
              width: 64,
              height: 64,
            }}
          />
        </Header>
  )
}

export default CommonHeader