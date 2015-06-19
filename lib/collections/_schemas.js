Schemas = {};

userIdSimpleSchema = {
  type: String,
  regEx: SimpleSchema.RegEx.Id,
  autoValue: function () {
    if (this.isInsert) {
      return Meteor.userId();
    } else if (this.isUpsert) {
      return {$setOnInsert: Meteor.userId()};
    } else {
      this.unset();
    }
  }
};

createdAtSimpleSchema = {
  type: Date,
  autoValue: function() {
    if (this.isInsert) {
      return new Date;
    } else if (this.isUpsert) {
      return {$setOnInsert: new Date};
    } else {
      this.unset();
    }
  },
  denyUpdate: true
};

updatedAtSimpleSchema = {
  type: Date,
  autoValue: function() {
    if (this.isUpdate) {
      return new Date();
    }
  },
  denyInsert: true,
  optional: true
};

userCollectionHelper = function () {
  return Meteor.users.findOne(this.userId);
};