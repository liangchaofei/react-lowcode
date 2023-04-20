import React from 'react'

interface IProps {
  id: string
  title: string
  isPublished: boolean
  edit: (index: string) => void
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

function QuestionCard(props: IProps) {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props

  const publish = (id: string) => {
    publishQuestion && publishQuestion(id)
  }
  const del = (id: string) => {
    deleteQuestion && deleteQuestion(id)
  }
  return (
    <div key={id}>
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button onClick={() => publish(id)}>发布问卷</button>
      &nbsp;
      <button onClick={() => del(id)}>删除问卷</button>
    </div>
  )
}

export default QuestionCard
