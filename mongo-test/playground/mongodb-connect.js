// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to server');

    db.collection('Todos').insertOne({
        text : 'Go to office',
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo ',err);
        }

        console.log(JSON.stringify(result.ops,undefined,3));

    });

    // db.collection('Users').insertOne({
    //     name: 'admin',
    //     age: 22,
    //     locaion: 'Bangalore'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 3));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});