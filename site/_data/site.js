module.exports = {
  name: "Dr Jason Fox",
  shortDesc:
    "Welcome to 2020",
  url: "drjasonfox.com",
  authorEmail: "email@drjasonfox.com",
  authorHandle: "@DrJasonFox",
  authorName: "Dr Jason Fox",
  postsPerPage: 6,

  theme: {
    background: "white",
    text: "black"
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false
};
