import React, { FC } from 'react'
// // 临时静态展示一下 Title Input 的效果
import QuestionTitle from '../../../../components/QuestionComponents/QuestionTitle/Component'
import QuestionInput from '../../../../components/QuestionComponents/QuestionInput/Component'
import styles from './index.module.scss'

const Edit: FC = () => {
    return (
        <div className={styles.canvas}>
            <QuestionTitle />
            <QuestionInput />
        </div>
    )
}

export default Edit
