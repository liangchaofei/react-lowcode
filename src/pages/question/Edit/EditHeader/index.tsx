import React, { FC, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Typography, Space, Input, message } from 'antd'
import { LeftOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons'
import useGetPageInfo from '../../../../hooks/useGetPageInfo'
import { changePageTitle } from '../../../../store/pageInfoReducer'
import EditToolbar from "../EditToolbar";
import styles from './index.module.scss'

const { Title } = Typography

  
const EditHeader: FC = () => {
    const nav = useNavigate()

    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
                            返回
                        </Button>
                        <Title>问卷标题</Title>
                    </Space>
                </div>
                <div className={styles.main}>
                    <EditToolbar />
                </div>
                <div className={styles.right}>right</div>
            </div>
        </div>
    )
}

export default EditHeader;