# Lewisham Covid-19 Mutual Aid Website

Community Resources for Lewisham

[Live Demo](https://lewisham-mutual-aid.netlify.app/)

## Deployment

```
npm install
```

or

```
yarn install
```

then 

```
gatsby develop
```

Built using gatsby, originally based on [gatsby-serif](https://www.gatsbyjs.org/starters/JugglerX/gatsby-serif-theme/)

Structured content can be scraped at build time from the group google sheet. Live scraping is possible but it would be too easy to break the site as the sheet is editable by anyone who has the link.

Non structured content can be written into markdown files, or handcoded if appropriate.

Non structured content needs to be frequently updated we can consider using a headless CMS like [strapi.io](https://strapi.io/)
