Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.map(function () {
  this.route('home', {
    path: '/'
  });

  this.route('dashboard', {
    template: 'home'
  });

  this.route('account', {
    template: 'home'
  });
});