import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzJmMzZlNGVkMzljZjJiZDJhMjI5ZjNhM2JkMjZhOCIsIm5iZiI6MTczMTk1NDc5Mi43NDgyMzQzLCJzdWIiOiI2NzMyNWEzZmYzZWFmYzUyMDFmZDU2MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1Tic9W28Tk_YeY_gXiNpK3L1ztF-5_NTnFnusvL1g7w`,
  },
});

export default api;