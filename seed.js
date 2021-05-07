require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Puppy = require('./models/puppy');

(async function() {

  await User.deleteMany({});
  const users = await User.create([
    {name: 'john doe', email: 'johndoe+13@gmail.com', password: '123'},
  ]);

  await Puppy.deleteMany({});
  const puppies = await Puppy.create([
    {name: 'Hamburger', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Turkey Sandwich', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Hot Dog', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Crab Plate', breed: 'Mixed', age: 15, user: users[0]},
    {name: 'Fried Shrimp', breed: 'Mixed', age: 15, user: users[0]},
    {name: 'Whole Lobster', breed: 'Mixed', age: 15, user: users[0]},
    {name: 'Taco', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Burrito', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Pizza Slice', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Spaghetti', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Garlic Bread', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'French Fries', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Green Salad', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Ice Cream', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Cup Cake', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Custard', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Strawberry Shortcake', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Milk', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Coffee', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Mai Tai', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Beer', breed: 'Mixed', age: 1, user: users[0]},
    {name: 'Wine', breed: 'Mixed', age: 1, user: users[0]},
  ]);

  console.log(puppies)

  process.exit();

})();