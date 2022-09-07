import React from "react";
import { Layout, Row, Col, Space } from 'antd'
import Logo from "./Logo";
import SaveCode from './SaveCode'
import ShowCode from './ShowCode';
import PcMobile from './PcMobile';

const { Header } = Layout;
const HeaderPage = () => {
    return (
        <Header style={{background: '#fff'}}>
            <Row>
                <Col flex={1}>
                    <Logo />
                </Col>
                <Col>
                    <Space>
                        <PcMobile />
                        <ShowCode />
                        <SaveCode />
                    </Space>
                </Col>
            </Row>
            
        </Header>
    )
}
export default HeaderPage;