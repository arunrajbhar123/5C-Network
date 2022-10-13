const axios = require("axios");

const FetchUser = async (req, res, next) => {
  const { username } = req.params;

  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      const data = {
        username: res.data.login.toLowerCase(),
        location: res.data.location,
        blog: res.data.blog,
        bio: res.data.bio,
        public_repos: res.data.public_repos,
        public_gists: res.data.public_gists,
        following: res.data.following,
        followers: res.data.followers,
        created_at: res.data.created_at,
      };
      req.body = data;
      var following = [];
      var followers = [];

      callbackFollowing(res.data.following_url.split("{")[0]).then((res) => {
        following = res;
      });

      callbackFollower(res.data.followers_url).then((res) => {
        followers = res;

        let friends = [];
        for (let i = 0; i < following?.length; i++) {
          for (let j = 0; j < followers?.length; j++) {
            if (following[i] == followers[j]) {
              friends.push(following[i]);
              break;
            }
          }
        }
        req.body.friends = friends;
        console.log(req.body);
      });
      next();
    })

    .catch((err) => {
      res.send({ message: "something is wrong user not found" });
    });
};

module.exports = FetchUser;

function callbackFollowing(url) {
  return axios.get(url).then((res) => {
    return res.data.map((el) => el.login);
  });
}

function callbackFollower(url) {
  return axios.get(url).then((res) => {
    return res.data.map((el) => el.login);
  });
}
