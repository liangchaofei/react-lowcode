import React, { useState } from 'react'
import produce from 'immer'
import QuestionCard from './components/QuestionCard'

function List() {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
  ])

  const edit = (id: string) => {
    console.log(id)
  }

  const add = () => {
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   questionList.concat({
    //     id: 'q' + r,
    //     title: '问卷' + r,
    //     isPublished: false,
    //   })
    // )
    setQuestionList(
      produce((draft: { id: string; title: string; isPublished: boolean }[]) => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: false,
        })
      })
    )
  }

  const deleteQuestion = (id: string) => {
    // setQuestionList(
    //   questionList.filter(item => {
    //     if (item.id === id) return false
    //     return true
    //   })
    // )
    setQuestionList(
      produce((draft: { id: string; title: string; isPublished: boolean }[]) => {
        const index: number = draft.find(item => item.id === id) as any

        draft.splice(index, 1)
      })
    )
  }
  const publishQuestion = (id: string) => {
    // setQuestionList(
    //   questionList.map(item => {
    //     if (item.id !== id) return item
    //     return {
    //       ...item,
    //       isPublished: true,
    //     }
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)
        if (q) {
          q.isPublished = true
        }
      })
    )
  }
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              edit={edit}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}>新增</button>
      </div>
    </div>
  )
}

export default List
