import React from 'react'
import { Button, Layout, Menu, theme } from 'antd';
import * as Icon from "@ant-design/icons"
import config from '../../config';


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
  return (
    <Sider collapsed={collapsed}>
      <h3 className="app-name">通用后台管理系统</h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
  )
}

export default CommonSide