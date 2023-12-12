import React, { FC } from 'react'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'

const Stat: FC = () => {
    const { loading } = useLoadQuestionData()
    return <div>
        <p>Stat page</p>
    </div>
}

export default Stat
