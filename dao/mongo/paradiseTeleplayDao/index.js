let db ;
let paradise = {
    all() {
        return db.collection('anime_cartoon').find({}).skip(1).limit(5).toArray()
    },
    test(callback) {
        return db.collection('anime_cartoon').find({}).limit(2).each(callback)
    },
    pageList(page) {
        const rows = 10;
        return db.collection('anime_cartoon').find({}).skip((page-1)*rows).limit(rows).toArray()
    }
    
}

module.exports = (client) => {
    db = client
    return paradise
}