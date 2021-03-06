import {Breadcrumb, Layout} from "antd";
import Card from '../../components/Card/Card';

const {Content} = Layout


const content = (props) => {
    return (
        <div>

            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Card/>
            </Content>

        </div>
    )
}
export default content