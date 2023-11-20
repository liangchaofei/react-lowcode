import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Spin } from 'antd'
import QuestionCard from '../../components/QuestionCard'
// import ListSearch from '../../components/ListSearch'
// import ListPage from '../../components/ListPage'
// import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import styles from './common.module.scss'

const { Title } = Typography

const list = [
    {
      _id: 'q1',
      title: '问卷1',
      isPublished: false,
      isStar: true,
      answerCount: 1,
      createdAt: '3月10日 10:11',
    },
    {
      _id: 'q2',
      title: '问卷2',
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createdAt: '3月19日 10:19',
    },
    {
      _id: 'q3',
      title: '问卷3',
      isPublished: true,
      isStar: true,
      answerCount: 1,
      createdAt: '3月15日 10:21',
    },
]
  
const Star: FC = () => {
  useTitle('低代码问卷 - 星标问卷')

//   const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
//   const { list = [], total = 0 } = data
  const loading = false;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
                  {/* <ListSearch /> */}
                  搜索
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      {/* <div className={styles.footer}>
        <ListPage total={total} />
      </div> */}
    </>
  )
}

export default Star
