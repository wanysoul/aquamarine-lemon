const router = require('koa-router')();
const paradise = require('../../dao/mongo').paradise()

router.get('/paradise/:page', async (ctx, next) => {
    var page = ctx.params.page;
    await paradise.pageList(page).then(docs =>{
        ctx.response.body = docs;
    })

    
});

module.exports = router