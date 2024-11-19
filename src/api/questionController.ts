// @ts-ignore
/* eslint-disable */
import request from '@/libs/request';


/** searchQuestionVOByPage POST /api/question/search/page/vo */
export async function searchQuestionVoByPageUsingPost(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/api/question/search/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}



