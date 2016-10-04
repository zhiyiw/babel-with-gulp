const Post = {
  findAll() {
    return new Promise((resolve, reject) => {
      const uri = 'http://localhost:3000/posts';
      // resolve('ok posts!');
      const request = new XMLHttpRequest();
      request.open('GET', uri, true); // true is async
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.response));
        }
      };

      request.onerror = () => {
        reject(new Error('Something went wrong on the API'));
      };

      request.send();
    });
  },
};

export default Post;
