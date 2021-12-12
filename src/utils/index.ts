import axios, { AxiosResponse } from 'axios'

const API_UPLOAD_URL = process.env.REACT_APP_API_UPLOAD as string
const API_DOWNLOAD_URL = process.env.REACT_APP_API_DOWNLOAD_URL as string
const SEPARATOR = 'xxx__xxx'

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

interface Success {
  response: string
  error: null
}

interface Fail {
  response: null
  error: string
}

const downloadCsv = async <T>({
  headers
}: UseAxiosProps<T>): Promise<Success | Fail> => {
  try {
    const { data, headers: responseHeaders } = await axios.get<string>(
      API_DOWNLOAD_URL,
      {
        headers
      }
    )
    const fileName = responseHeaders['content-disposition']
      .split('=')[1]
      .slice(1, -1)

    return {
      response: `${data}${SEPARATOR}${fileName}`,
      error: null
    }
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

const uploadCsv = async <T>({
  body,
  headers
}: UseAxiosProps<T>): Promise<Success | Fail> => {
  try {
    const response = await axios.post<T, AxiosResponse<DtoResponse>>(
      API_UPLOAD_URL,
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

export { downloadCsv, uploadCsv, SEPARATOR }
