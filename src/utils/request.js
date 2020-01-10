// import axios from 'axios'

// const isDev = process.env.NODE_ENV === 'development';

// const service = axios.create({
//     baseUrl: isDev ? 'http://localhost:3001' : ''
// })

// service.interceptors.request.use((config) => {
//     console.log(config);
//     config.data = Object.assign({},config.data,{
//         authToken: "abc"
//     })
//   return config;
// })

// service.interceptors.response.use((resp) => {
//     if(resp.code === 200) {
//         return resp.data
//     }else{
//         //处理全局错误
//     }
// })

// export const get
