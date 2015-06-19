Planet('navbar') ({
  events: {
    'click .navbar-collapse.in a': function (e) {
      if ($(e.target).attr('class') !== 'dropdown-toggle') {
        $('.navbar-collapse').collapse('hide');
      }
    }
  }
});