import { useRequest } from 'ahooks'
import { getQuestionService } from '../services/question';

function useLoadQuestionData() { 

    // ajax 加载
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id')
      const data = await getQuestionService(id)
      return data
    },
    {
      manual: true, // 手动触发
    }
  )
    
    return { loading, data, error, run }
}

export default useLoadQuestionData