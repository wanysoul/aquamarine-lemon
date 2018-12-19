var MongoClient = require('mongodb').MongoClient
let paradise ;
// Connection URL
var url = 'mongodb://47.106.202.65:27017/TVplay';

let db ;

module.exports =() => {
    return MongoClient.connect(url, function(err, client) {
        db = client
        paradise = require('./paradiseTeleplayDao')(client)
        console.log("Connected successfully to mongoDB server");
      //   db.close();
      });
}

module.exports.paradise = () =>{
    return require('./paradiseTeleplayDao')(db)
}