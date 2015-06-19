Template.registerHelper('Config', function () {
  return Config;
});

Template.registerHelper('socialMedia', function () {
  return _.map(Config.socialMedia, function (obj) {
    return obj;
  });
});

Template.registerHelper('isCurrentUserId', function (_id) {
  return Meteor.userId() && Meteor.userId() === _id;
});

Template.registerHelper('formatDate', function (date) {
  return date && moment(date).format('D/M/YYYY');
});
