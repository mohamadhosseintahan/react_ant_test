import {Button, Card, Col, Row} from 'antd';

const products = [{
    title: 'محصول شماره 1',
    price: 12500,
    description: 'product number one'
}, {
    title: 'محصول شماره 2',
    price: 13500,
    description: 'product number one'
}, {
    title: 'محصول شماره 3',
    price: 8500,
    description: 'product number one'
}, {
    title: 'محصول شماره 4',
    price: 14500,
    description: 'product number one'
}, {
    title: 'محصول شماره 5',
    price: 200000,
    description: 'product number one'
}, {
    title: 'محصول شماره 6',
    price: 15400,
    description: 'product number one'
}, {
    title: 'محصول شماره 7',
    price: 850000,
    description: 'product number one'
}, {
    title: 'محصول شماره 8',
    price: 13560,
    description: 'product number one'
}]
const card = (props) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Row gutter={[24, 16]}>


                {products.map((product) => {
                    return (
                        <Col span={6} key={product.title}>
                            <Card title={product.title} bordered={false} style={{width: 300}}>
                                <p><h2>{product.price}</h2></p>
                                <p>{product.description}</p>
                                <Button type='primary' shape='round'>
                                    Purchase
                                </Button>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </div>
    );
}
export default card