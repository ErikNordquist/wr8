import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd2b9fba225f24a7abd4875d9d8bb2e65',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Erik Nordquist',
  domain: 'eriknordquist.se',
  author: 'Erik Nordquist',
  seotitle: 'Erik Nordquist | Media, Creative, Content',

  // open graph metadata (optional)
  description: 'Erik Nordquist is a media professional at OMD, the world's leading media agency. He's also a creative, providing social media content creation and teaching others how to make better video content.',

  // social usernames (optional)
  // twitter: 'eriknordquist',
  // github: 'eriknordquist',
  linkedin: 'fbenordquist',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Resources',
      pageId: '0b2489ccd66e43f4bcc09cbd098914ad'
    },    
    {
      title: 'Services',
      pageId: 'e355ef1b8e9a477bb2446d34d1f4e992'
    },
    {
      title: 'Contact',
      pageId: '05e1f0840c3b426aa6e0196a595de7db'
    }
  ]
})
