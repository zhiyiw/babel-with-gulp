let ui = {
  renderPosts(posts){
    // console.log(posts);
    let elements = posts.map( (post)=> {
      return articleElement;
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements.join(""); //fix a comma issue.
  }
};

let articleElement = 
  `<article class='post'>
    <h2 class='post-title'>
     title!!
    </h2>
    <p class='post-meta'>
      last reply on 
    </p>
  </article>`;


export default ui;