module.exports = {
  siteName: 'Gridsome',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - Gridsome',

  plugins: [
    '@gridsome/plugin-critical',
    '@gridsome/plugin-typography',
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ]
}
