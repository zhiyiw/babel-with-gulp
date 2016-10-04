let Post = {
  findAll(){
    return new Promise((resolve, reject) => {
      let uri = "http://localhost:3000/posts"
      // resolve('ok posts!');
      let request = new XMLHttpRequest();
      request.open("GET", uri, true); //true is async
      request.onload = () => {
        if(request.status >= 200 && request.status < 400) {
          resolve( JSON.parse(request.response));
        }
      }

      request.send();
    });
  }
}

let ui = {
  renderPosts(posts){
    console.log(posts);
  }
}
Post.findAll().then(ui.renderPosts);