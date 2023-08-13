import axios from 'axios';

const useFetch = <T>() => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 5000,
  });

  const fetchData = async (url: string): Promise<T> => {
    const response = await instance.get(url);
    return response.data;
  };
  const postData = async (url: string, data: any): Promise<T> => {
    const response = await instance.post(url, data);
    return response.data;
  };
  const putData = async (url: string, data: any): Promise<T> => {
    const response = await instance.post(url, data);
    return response.data;
  };

  return {fetchData, postData, putData};
};

export default useFetch;
