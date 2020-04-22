module.exports = {
  siteMetadata: {
    title: 'endrjuskr\'s blog',
    author: {
      name: 'Andrzej Skrodzki',
      website: 'endrjuskr.github.io',
      employer: 'Unit8',
      location: 'Poland',
    },
    description: 'endrjuskr\'s blog',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
    social: {
      twitter: 'https://twitter.com/endrjuskr',
      github: 'https://github.com/endrjuskr',
      linkedin: 'https://linkedin.com/in/askrodzki',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffff00',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/profile-pic.png',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-themes',
      options: {
        themes: [
          `${__dirname}/src/themes/dark.js`,
          `${__dirname}/src/themes/light.js`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
