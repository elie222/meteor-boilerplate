Users = Meteor.users;



Users.helpers({
  email: function () {
    return this.emails && this.emails[0] && this.emails[0].address;
  }
});