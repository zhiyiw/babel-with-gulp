import API from "./api";

const User = {
  findRecent() {
    return API.fetch("activeUsers");
  }
};

export default User;
