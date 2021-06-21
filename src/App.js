import './App.css';
import Side from "./containers/Sider/Side";
import Navbar from './components/Navbar/Navbar';
import Content from './containers/Content/Content';


import {Layout} from "antd";

const {Footer} = Layout

function App() {
    return (
        <div>
            <Layout>
                <Navbar/>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Side/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content/>
                    </Layout>
                </Layout>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
        ;
}

export default App;
