import React from 'react'
import { Button, Layout, Menu, theme } from 'antd';
import * as Icon from "@ant-design/icons"
import config from '../../config';
import { useNavigate } from 'react-router-dom';
import { selectMenuList } from '../../store/reducers/tab'


const { Sider } = Layout;

const iconToElement = (name) => {
  const IconComponent = Icon[name];
  return IconComponent ? React.createElement(IconComponent) : null;
};

const items = config.map(item => {
  const child = {
    key: item.path,
    label: item.label,
    icon: iconToElement(item.icon)
  }
  child.children = item.children?.map(item => {
    return {
      key: item.path,
      label: item.label
    }
  })
  return child
})


const CommonSide = ({collapsed}) => {
  const navigate = useNavigate()

  const setTabList = (val) => {
    dispatchEvent(selectMenuList(val))
  }
  const directMenu = (e) => {
    /* let data
    config.forEach(item => {
      if(item.path === e.keyPath[e.keyPath.length - 1]){
        data = item
        if(e.keyPath.length > 1){
          data = item.children.find((child) =>{
            return child.path === e.key
          })
        }
      }
    })
    setTabList({
      path: data.path,
      name: data.name,
      label: data.label
    }) */
    // 页面跳转
    navigate(e.key)
  }
  return (
    <Sider collapsed={collapsed}>
      <h3 className="app-name">{collapsed ? '后台' : '通用后台管理系统'}</h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={directMenu}
        />
      </Sider>
  )
}

export default CommonSide