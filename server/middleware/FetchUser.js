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
      req.body.data = data;
      req.body.following_url = res.data.following_url;
console.log(callback(res.data.following_url));
      next();
    })
    .catch((err) => {
      res.status(403).send({ message: "something is wrong" });
    });
};

module.exports = FetchUser;



function callback(url){
return axios.get(url).then((res)=>{

})
}
