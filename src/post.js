import API from "./api";

const Post = {
  findAll() {
    return API.fetch("posts");
  }
};

export default Post;