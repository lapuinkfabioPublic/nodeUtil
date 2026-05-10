const User = require('./User');
const Address = require('./Address');

User.hasMany(Address);
Address.belongsTo(User);

module.exports = { User, Address };
