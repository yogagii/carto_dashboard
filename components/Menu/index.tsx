import { Menu } from "antd";
import React from "react";
import { AreaChartOutlined } from '@ant-design/icons';

const SideMenu = () => {
  const onClick = (e: any) => {
    console.log("click ", e);
  };

  const items = [
    { key: 'item-1', icon: <AreaChartOutlined /> },
  ];

  return (
    <Menu
      onClick={onClick}
      style={{ width: 60 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      inlineCollapsed={true}
      items={items}
    />
  );
};

export default SideMenu;
