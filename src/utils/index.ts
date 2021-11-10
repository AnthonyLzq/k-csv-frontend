import axios, { AxiosResponse } from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

interface DtoResponse {
  error: boolean
  message: string
}

interface Headers {
  [key: string]: string
}

interface UseAxiosProps<T> {
  body: T
  headers: Headers
}

const callApi = async <T>({ body, headers }: UseAxiosProps<T>) => {
  try {
    const response = await axios.post<T, AxiosResponse<DtoResponse>>(
      API_URL,
      body,
      {
        headers
      }
    )

    return { response: response.data.message, error: null }
  } catch (e: any) {
    console.error(e)
    return {
      response: null,
      error:
        (e.response?.data?.message as string) ||
        'Something went wrong, please contact with anthony.luzquinos@gmail.com'
    }
  }
}

export { callApi }
