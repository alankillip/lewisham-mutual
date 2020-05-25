const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: "Lewisham Mutual Aid",
    description: "Help for people affected by Covid 19 in Lewisham",
    contact: {
      phone: "XXX XXX XXX",
      email: "someone@someone.com",
    },
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Resources",
        link: "/resources",
      },
      {
        name: "Find A Group",
        link: "/find-a-group",
      },
      {
        name: "Wellbeing Map",
        link: "/wellbeing",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: guid ? guid : "UA-XXX-1",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
