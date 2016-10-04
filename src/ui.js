const ui = {
  renderPosts(posts) {
    // console.log(posts);
    const elements = posts.map((post) => {
      let { title, lastReply } = post;

      return articleElement(title, lastReply);
    });

    const target = document.querySelector('.container');
    target.innerHTML = elements.join(''); // fix a comma issue.
  },
};

function articleElement(title, lastReply) {
  const template =
    `<article class='post'>
      <h2 class='post-title'>
       ${title}
      </h2>
      <p class='post-meta'>
       ${lastReply}
      </p>
    </article>`;

  return template;
}

export default ui;
