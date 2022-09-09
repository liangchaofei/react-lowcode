import React, { ReactElement } from 'react'
import { icons } from '../../components/editor/Left'
import DragPanel from '../../components/editor/Left/DragPanel'
import h5 from './h5'
import antd from './antd'

type MenuItem = {
    key: string
    icon: keyof typeof icons
    panel: ReactElement
}

const menus: MenuItem[] = [
    {
        key: 'h5',
        icon: 'HTML5',
        panel: <DragPanel data={h5} />,
    },
    {
        key: 'antd',
        icon: 'antd',
        panel: <DragPanel data={antd} />,
      },
];

export default menus;