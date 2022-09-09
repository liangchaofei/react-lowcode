import React, { useState, ReactElement } from "react";
import menus from '../../../schema/fields';

interface IconProps {
    active: boolean
}

export const icons = {
    HTML5: ({ active }: IconProps) => {
        return (
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={active ? '#E44D26' : '#79798c'}
              d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"
            ></path>
          </svg>
        )
    },
}

const Left = (): ReactElement => {
    const [type, setType] = useState('h5')
    console.log('menus', menus)
    const fields = menus.find((menu) => menu.key === type)
    const data = fields?.panel.props?.data;
    console.log('fields', fields?.panel.props?.data)
    return (
        <div style={{ display: 'flex'}}>
            <div>
                {
                    menus?.map(menu => {
                        const MenuIcon = icons[menu.icon]
                        return (
                            <div
                                key={menu.key}
                                style={{ width: 50, height: 50}}
                            >
                                <MenuIcon active={menu.key === type} />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    data?.map(item => {
                        return (
                            <div key={item.type}>{item.type}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Left;