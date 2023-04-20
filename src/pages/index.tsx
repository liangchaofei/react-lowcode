import React from 'react'
import QuestionCard from '../components/QuestionCard'
function Pages() {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
  ]
  const edit = (id: string) => {
    console.log('id', id)
  }
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return 1
          // <QuestionCard key={id} id={id} title={title} isPublished={isPublished} edit={edit} />
        })}
      </div>
    </div>
  )
}

export default Pages
