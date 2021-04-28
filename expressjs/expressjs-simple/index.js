const app = require('./src/app');
const port = parseInt(process.env.PORT || '3000', 10);


app.listen(port, function () {
    console.log(`####################################################################`)
    console.log(`NODE_ENV   : ${process.env.NODE_ENV}`);
    console.log(`address    : ${JSON.stringify(this.address())}`);
    console.log(`####################################################################`)
});