// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('58bced71900fea1794138534')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58bce0d37721d71b808417d2')
}, {
  $set: {
    name: 'Ricardo'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
console.log(result);
});
  //db.close();
});
