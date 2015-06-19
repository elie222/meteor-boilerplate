// Predictions = new Mongo.Collection('predictions');

// Schemas.PredictionForFixture = new SimpleSchema({
//   home: {
//     type: Number,
//     min: 0,
//     max: 10
//   },
//   away: {
//     type: Number,
//     min: 0,
//     max: 10
//   }
// });

// Schemas.Predictions = new SimpleSchema({
//   gameId: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Id,
//   },
//   userId: userIdSimpleSchema,
//   createdAt: createdAtSimpleSchema,
//   updatedAt: updatedAtSimpleSchema,
//   predictions: {
//     type: [Schemas.PredictionForFixture],
//     min: 5,
//     max: 5
//   }
// });

// Predictions.attachSchema(Schemas.Predictions);

// Predictions.helpers({
//   user: userCollectionHelper,
//   game: function () {
//     return Games.findOne(this.gameId);
//   }
// });

