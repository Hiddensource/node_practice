// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

// var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to server');

    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(`${result.result.n} documents deleted` );
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(`${result.result.n} documents deleted`);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(`${result.result.n} documents deleted`);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     completed:false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bd6b946f15df623342e17a7')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});