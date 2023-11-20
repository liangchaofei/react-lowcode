import React, { useState } from 'react'
import produce from 'immer'
import { Typography } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'

const rawQuestionList = [
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
    isStar: false,
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

const { Title } = Typography
function List() {
  const [questionList, setQuestionList] = useState(rawQuestionList)

  // const edit = (id: string) => {
  //   console.log(id)
  // }

  // const add = () => {
  //   const r = Math.random().toString().slice(-3)
  //   setQuestionList(
  //     produce((draft: { id: string; title: string; isPublished: boolean }[]) => {
  //       draft.push({
  //         id: 'q' + r,
  //         title: '问卷' + r,
  //         isPublished: false,
  //       })
  //     })
  //   )
  // }

  // const deleteQuestion = (id: string) => {
  //   setQuestionList(
  //     produce((draft: { id: string; title: string; isPublished: boolean }[]) => {
  //       const index: number = draft.find(item => item.id === id) as any

  //       draft.splice(index, 1)
  //     })
  //   )
  // }
  // const publishQuestion = (id: string) => {
  //   setQuestionList(
  //     produce(draft => {
  //       const q = draft.find(item => item.id === id)
  //       if (q) {
  //         q.isPublished = true
  //       }
  //     })
  //   )
  // }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 && questionList?.map(q => {
          const { _id } = q
          return <QuestionCard key={_id} {...q} />
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default List
