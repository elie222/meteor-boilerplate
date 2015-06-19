Config = {
  name: 'App name',
  title: 'The greatest app in the world',
  subtitle: 'Really is great...',
  logo: function () {
    return '<b>' + this.name + '</b>';
  },
  footer: function () {
    return this.name + ' - Copyright ' + new Date().getFullYear()
  },
  emails: {
    from: 'noreply@' + Meteor.absoluteUrl()
  },
  blog: 'http://meteorfactory.io',
  about: 'http://meteorfactory.io',
  username: false,
  homeRoute: '/',
  dashboardRoute: '/dashboard',
  socialMedia:{
    facebook: {
      url: 'http://facebook.com/',
      icon: 'facebook'
    },
    twitter: {
      url: 'http://twitter.com/',
      icon: 'twitter'
    },
    email: {
      url: 'mailto:someone@example.com',
      icon: 'envelope'
    },
    // github: {
    //   url: 'http://github.com/elie222',
    //   icon: 'github'
    // },
    // info: {
    //   url: 'http://meteorfactory.io',
    //   icon: 'link'
    // }
  },
  // publicRoutes: ['home']
}