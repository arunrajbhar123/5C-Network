const axios = require("axios");

const FetchUser = (req, res, next) => {
  const { username } = req.params;

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
      req.body = data;
      var following = [];
      var followers = [];
    
      callbackFollowing(res.data.following_url.split("{")[0]).then((res) => {
        following = res;
      });

      callbackFollower(res.data.followers_url).then((res) => {
        // console.log(res,'follower');
        followers = res;
      });
      var friends = [];
      for (let i = 0; i < res?.length; i++) {
        for (let j = 0; j < following?.length; j++) {
          if (res[i] == following[j]) {
            friends.push(res[i]);
          
            break;
          }
        }
      }
     
      req.body.friends = friends;
      next();
    })
    .catch((err) => {
      res.status(403).send({ message: "something is wrong" });
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
