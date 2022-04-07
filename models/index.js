const User = require('./User')
const Review = require('./Review')
const Game = require('./Game')
const Comment = require('./Comment')

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Review, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
})

Review.hasMany(Game, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
})

Game.hasMany(Review, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Comment, Game, Review};
