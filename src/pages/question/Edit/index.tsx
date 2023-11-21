import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
    const { loading, data } = useLoadQuestionData()
    return <div>
        <p>edit page</p>
        <div>
            {
                loading ? <p>loading...</p> : <p>{JSON.stringify(data)}</p>
            }
        </div>
    </div>
}

export default Edit
