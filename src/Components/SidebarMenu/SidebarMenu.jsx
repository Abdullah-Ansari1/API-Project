import React from 'react';
import {
    HomeFilled,
    AppstoreFilled,
    PieChartFilled,
    AccountBookFilled
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './SidebarMenu.css'
const { Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const items = [
    getItem('Dashboard', '1', <HomeFilled />),
    getItem('Rate Limiting Policies', 'sub1', null, [
        getItem('Gateways', '3', <AppstoreFilled />),
        getItem('API Categories', '4', <PieChartFilled />),
        getItem('Key Managers', '5', <AccountBookFilled />),
    ]),
    getItem('Gateways', '6', <AppstoreFilled />),
    getItem('API Categories', '7', <PieChartFilled />),
    getItem('Key Managers', '8', <AccountBookFilled />),
    getItem('Tasks', 'sub2', null, [
        getItem('User Creation', '9', <AppstoreFilled />),
        getItem('Application Creation', '10', <PieChartFilled />),
        getItem('Subscription Creation', '11', <AccountBookFilled />),
        getItem('Subscription Update', '12', <AccountBookFilled />),
        getItem('Application Registration', '13', <AccountBookFilled />),
        getItem('API State Change', '14', <AccountBookFilled />),
        getItem('Api Product State Change', '15', <AccountBookFilled />),
    ]),
    getItem('Settings', 'sub3', null, [
        getItem('Application', '17', <AppstoreFilled />),
        getItem('Scope Arrangements', '18', <PieChartFilled />),
        getItem('Advanced', '19', <AccountBookFilled />),
    ]),
];

const SidebarMenu = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="80"
        >
            <div
                style={{
                    height: 32,
                    margin: 16,
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}

export default SidebarMenu
