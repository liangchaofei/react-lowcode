import React from 'react'
import styles from './QuestionCard.module.scss'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}

function QuestionCard(props: PropsType) {
  const { _id } = props

  return <div>{_id}</div>
}

export default QuestionCard
