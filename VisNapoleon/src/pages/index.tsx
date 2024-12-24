import { Row,Col } from 'antd'


export default function HomePage() {
  return (
<Row justify="space-between" style={{height: '100vh'}}>
        {/* 左边的列 */}
        <Col span={6}>
          <div style={{ backgroundColor: '#f0f2f5', height: '100%', borderRight: '1px solid #e8e8e8' }}>
            Left Sidebar
          </div>
        </Col>

        {/* 中间的列 */}
        <Col span={12}>
          <div style={{ backgroundColor: '#ffffff', height: '100%', padding: '24px' }}>
          </div>
        </Col>

        {/* 右边的列 */}
        <Col span={6}>
          <div style={{ backgroundColor: '#f0f2f5', height: '100%', borderLeft: '1px solid #e8e8e8' }}>
            Right Sidebar
          </div>
        </Col>
      </Row>
  );
}
