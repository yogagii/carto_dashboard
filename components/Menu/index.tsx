import { Menu } from "antd";
import React from "react";
import { AreaChartOutlined, LogoutOutlined } from "@ant-design/icons";
import styles from "./menu.module.less";
import logo from '@/assets/logo';

const SideMenu = () => {
  const onClick = (e: any) => {
    console.log("click ", e);
  };

  const items = [{ key: "chart", icon: <AreaChartOutlined /> }];

  return (
    <div className={styles.sideMenu}>
      <div className={styles.avatar}>
        <img src={logo} alt="" />
      </div>
      <Menu
        onClick={onClick}
        style={{ width: 60 }}
        defaultSelectedKeys={["chart"]}
        mode="inline"
        inlineCollapsed={true}
        items={items}
      />
      <div className={styles.logout}>
        <LogoutOutlined />
      </div>
    </div>
  );
};

export default SideMenu;
