// //==========================================
// // collection definition and schema
// //==========================================

// Bookings = new Mongo.Collection("bookings");

// Schemas.Bookings = new SimpleSchema({
//   userId: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Id,
//     autoValue: function () {
//       if (this.isInsert) {
//         return Meteor.userId();
//       } else if (this.isUpsert) {
//         return {$setOnInsert: Meteor.userId()};
//       } else {
//         this.unset();
//       }
//     }
//   },
//   fieldId: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Id,
//     autoform: {
//       options: function () {
//         return _.map(Fields.find().fetch(), function (field) {
//           return {
//             label: field.name,
//             value: field._id
//           }
//         });
//       }
//     }
//   },
//   createdAt: {
//     type: Date,
//     autoValue: function() {
//       if (this.isInsert) {
//         return new Date;
//       } else if (this.isUpsert) {
//         return {$setOnInsert: new Date};
//       } else {
//         this.unset();
//       }
//     },
//     denyUpdate: true
//   },
//   updatedAt: {
//     type: Date,
//     autoValue: function() {
//       if (this.isUpdate) {
//         return new Date();
//       }
//     },
//     denyInsert: true,
//     optional: true
//   },
//   startDate: {
//     type: Date,
//     autoform: {
//       afFieldInput: {
//         type: "bootstrap-datetimepicker"
//       }
//     }
//   },
//   endDate: {
//     type: Date,
//     autoform: {
//       afFieldInput: {
//         type: "bootstrap-datetimepicker"
//       }
//     }
//   },
//   cost: {
//     type: Number,
//     min: 0,
//     autoValue: function () {
//       var startDate = this.field('startDate').value;
//       var endDate = this.field('endDate').value;
//       var field = Fields.findOne(this.field('fieldId').value);

//       if (startDate && endDate && field) {
//         return field.costPerHour * (endDate - startDate) / (1000 * 60 * 60);
//       } else {
//         this.unset();
//       }
//     }
//   },
//   currency: {
//     type: String,
//     defaultValue: 'ILS'
//   }
// });

// Bookings.attachSchema(Schemas.Bookings);

// //==========================================
// // simple schema error messages
// //==========================================

// SimpleSchema.messages({
//   "minMembersGreaterThanMaxMembers": "The minimum number of people in the league cannot be more than the maximum number of people in the league"
// });

// //==========================================
// // helpers
// //==========================================

// Bookings.helpers({
//   user: function () {
//     return Users.findOne(this.userId);
//   },
//   field: function () {
//     return Fields.findOne(this.fieldId);
//   }
// });

// //==========================================
// // meteor methods
// //==========================================

// Meteor.methods({
//   joinLeague: function (leagueId, teamName) {
//   }
// });

// //==========================================
// // general helpers
// //==========================================

// // if this function receives an object, it doesnt check to make sure its a league object
// getLeague = function (leagueOrLeagueId) {
//   var league;

//   if (typeof leagueOrLeagueId === 'string')
//     league = Leagues.findOne(leagueOrLeagueId);
//   else if (typeof leagueOrLeagueId === 'object')
//     league = leagueOrLeagueId;

//   if (!league)
//     throw new Meteor.Error(404, 'Invalid league', leagueOrLeagueId);

//   return league;
// }

