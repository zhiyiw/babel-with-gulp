import xss from "xss-filters";

const ui = {
  renderPosts(posts) {
    // console.log(posts);
    const elements = posts.map((post) => {
      let { title, lastReply } = post;

      return articleTemplate(title, lastReply);
    });

    const target = document.querySelector('.container');
    target.innerHTML = elements.join(''); // fix a comma issue.
  },

  renderUsers(users){
     const elements = users.map((user) => {
      let { name , avatar } = user;

      return activeUsersTemplate(name, avatar);
    });

    const target = document.querySelector('.sidebar-content');
    target.innerHTML = elements.join(''); // fix a comma issue.
  }
};

function articleTemplate(title, lastReply) {
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);
  const template =
    `<article class='post'>
      <h2 class='post-title'>
       ${safeTitle}
      </h2>
      <p class='post-meta'>
       ${safeLastReply}
      </p>
    </article>`;

  return template;
}

function activeUsersTemplate(name, avatar){

  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);

  let template = `
    <div class="active-avatar">
    <img width="54" src="assets/images/${safeAvatar}">
    <h5 class="post-author">${safeName}</h5>
    </div>`;

  return template;
}

export default ui;
