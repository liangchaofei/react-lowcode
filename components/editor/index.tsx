import React from 'react';
import { Row, Col } from 'antd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Header from './Header';
import Left from './Left';
import Canvas from './Canvas';
import Right from './Right'

const Editor = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <Header />
                <Row>
                    <Col flex={1}>
                        <Left />
                    </Col>
                    <Col flex={2}>
                        <Canvas />
                    </Col>
                    <Col flex={1}>
                        <Right />
                    </Col>
                </Row>
            </div>
        </DndProvider>
    )
}

export default Editor;