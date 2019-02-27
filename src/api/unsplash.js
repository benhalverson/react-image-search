import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3b42d93b06903074b6934ad0e9e066d9c7af7c1b31b80c7f561918d1fcb5fa92'
  }
});
