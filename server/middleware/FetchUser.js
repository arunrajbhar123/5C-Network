const axios = require("axios");

const FetchUser = (req, res, next) => {
  const { username } = req.params;
  //   console.log(username);
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      const data = {
        username: res.data.login,
        location: res.data.location,
        blog: res.data.blog,
        bio: res.data.bio,
        public_repos: res.data.public_repos,
        public_gists: res.data.public_gists,
        following: res.data.following,
        followers: res.data.followers,
        created_at: res.data.created_at,
       
      };
    })
    .catch((err) => {
      res.status(400).send({ message: "something is wrong" });
    });
  res.send("fetch data");
};

module.exports = FetchUser;
