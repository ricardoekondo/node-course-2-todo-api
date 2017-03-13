const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '58c611ddc05b750e3e506f07'}).then((todo) => {
  console.log(todo);
});


// Todo.findByIdAndRemove('58c6111fc05b750e3e506ed0').then((todo) => {
//   console.log(todo);
// });
