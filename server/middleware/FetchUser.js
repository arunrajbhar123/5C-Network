const axios = require("axios");

const FetchUser = (req, res, next) => {
  const { username } = req.params;
  console.log(username);
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      // get all followers user

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
      req.body.data = data;

      req.body.following_url = res.data.following_url;
      GetFollowers(req, next, res.data.login, res.data.followers_url);

      next();
    })
    .catch((err) => {
      res.status(403).send({ message: "something is wrong" });
    });
};

module.exports = FetchUser;

// get followers
function GetFollowers(req, next, name, url) {
  let dsa = axios.get(url).then((res) => {
    let data = res.data.map((el) => {
      //   FriendOrNot(req, next, name, el.followers_url);
    });
    // next();
  });
}

// check isFriend or not

// function FriendOrNot(req, next, name, url) {
//   axios(url).then((res) => {
//     // console.log(res.data);
//   });
//   next();
// }
