import React, { FC } from 'react'
import { Spin } from 'antd'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'
import { getComponentConfByType } from '../../../../components/QuestionComponents'
import {
    ComponentInfoType,
} from '../../../../store/componentsReducer'
import styles from './index.module.scss'

type PropsType = {
    loading: boolean
}

function genComponent(componentInfo: ComponentInfoType) {
    const { type, props } = componentInfo // 每个组件的信息，是从 redux store 获取的（服务端获取）
  
    const componentConf = getComponentConfByType(type)
    if (componentConf == null) return null
  
    const { Component } = componentConf
    return <Component {...props} />
}
  
const Edit: FC<PropsType> = ({ loading }) => {
    const { componentList } = useGetComponentInfo()
    if (loading) {
        return (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Spin />
          </div>
        )
    }
    
    return (
        <div className={styles.canvas}>
            {
                componentList?.map(item => {
                    return (
                        <div key={item.fe_id} className={styles['component-wrapper']}>
                            <div className={styles.component}>
                                { genComponent(item)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Edit
