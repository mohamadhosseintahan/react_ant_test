import React from "react";
import {Menu, Layout} from "antd";
import 'antd/dist/antd.css';

const {Header} = Layout

const navbar = (props) => {
    return (
        <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={'1'}>
                <Menu.Item key="1"><em><strong>Home</strong></em></Menu.Item>
                <Menu.Item key="2">products</Menu.Item>
                <Menu.Item key="3">Login</Menu.Item>
            </Menu>
        </Header>
    )
}
export default navbar
