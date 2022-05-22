import Axios, { AxiosInstance } from 'axios'
import QS from 'qs'

const initInstance = () => {
  return Axios.create({
    baseURL: 'https://datapush.azurewebsites.net/',
    paramsSerializer (params) {
      for (const key in params) {
        (params[key] !== undefined && params[key] !== null) || delete params[key]
      }
      return QS.stringify(params, { arrayFormat: 'repeat' })
    }
  })
}

export default class ApiService {
  protected static httpService: AxiosInstance = initInstance();
}
