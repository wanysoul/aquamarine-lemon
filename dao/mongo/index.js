var MongoClient = require('mongodb').MongoClient

// Connection URL
var url = 'mongodb://localhost:27017/mydb';

let db ;

module.exports =() => {
    return MongoClient.connect(url, function(err, client) {
        db = client
        console.log("Connected successfully to mongoDB server");
      //   db.close();
      });
}