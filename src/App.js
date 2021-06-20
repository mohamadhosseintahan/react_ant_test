import './App.css';
import Side from "./containers/Sider/Side";
import Navbar from './components/Navbar/Navbar';
import Content from './containers/Content/Content';


import {Layout} from "antd";


function App() {
    return (
        <div>
            <Layout>
                <Navbar/>
                <Layout>
                    <Side/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content/>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
        ;
}

export default App;
