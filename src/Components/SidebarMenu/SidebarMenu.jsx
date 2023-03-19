import React,{useState} from 'react';
import {
    HomeFilled,
    AppstoreFilled,
    PieChartFilled,
    AccountBookFilled
} from '@ant-design/icons';
import { Layout, Menu ,Button} from 'antd';
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


const menu1 =[
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
const menu3 =[
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
const menu2 =[
    getItem('Overview', '1', <HomeFilled />),
    getItem('Subscriptions', '2', <HomeFilled />),
    getItem('Try Out', '3', <HomeFilled />),
    getItem('Comments', '4', <HomeFilled />),
    getItem('Documentation', '5', <HomeFilled />),
    getItem('SDKs', '6', <HomeFilled />),
];

const SidebarMenu = ({ChangeComponent}) => {
    const [changeMenu, setChangeMenu] = useState("api");
    const [menu, setMenu] = useState(menu2);
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="80"
        >
            <div
                style={{
                    padding:"1rem 0",
                    textAlign:"center",
                    color:"white",
                    fontSize:"2rem"
                }}
            >
                Logo
            </div>
            <div>
                <div className='button-div'>
                <Button size="small" className={changeMenu==="api"?'api-btn active':"api-btn"} onClick={(e)=>{e.preventDefault(); setChangeMenu("api"); setMenu(menu2)}}>Api's</Button>
                <Button size="small" className={changeMenu==="application"?'api-btn active':"api-btn"} onClick={(e)=>{e.preventDefault(); setChangeMenu("application"); setMenu(menu3)}}> Applications</Button>
                </div>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menu} />
        </Sider>
    )
}

export default SidebarMenu
