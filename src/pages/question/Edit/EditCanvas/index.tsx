import React, { FC } from 'react'
import { Spin } from 'antd'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'
// // 临时静态展示一下 Title Input 的效果
import QuestionTitle from '../../../../components/QuestionComponents/QuestionTitle/Component'
import QuestionInput from '../../../../components/QuestionComponents/QuestionInput/Component'
import styles from './index.module.scss'

type PropsType = {
    loading: boolean
}

  
const Edit: FC<PropsType> = ({ loading }) => {
    const { componentList } = useGetComponentInfo()
    console.log('componentList', componentList)
    if (loading) {
        return (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Spin />
          </div>
        )
    }
    
    return (
        <div className={styles.canvas}>
            <QuestionTitle />
            <QuestionInput />
        </div>
    )
}

export default Edit
