import React, { useState, useEffect } from 'react'
import produce from 'immer'
import { Typography, Spin } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import styles from './common.module.scss'



const { Title } = Typography
function List() {

  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [], total = 0} = data;
  
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
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        { loading && <div style={{ textAlign: 'center'}}><Spin /></div>}
        {(!loading && list.length > 0) && list?.map((q: any) => {
          const { _id } = q
          return <QuestionCard key={_id} {...q} />
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default List
