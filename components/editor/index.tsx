import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Header from './Header';

const Editor = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <Header />
            </div>
        </DndProvider>
    )
}

export default Editor;