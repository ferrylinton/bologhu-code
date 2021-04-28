const { Contact } = require('./src/models/index');

(async () => {
    try {
        const count = await Contact.count();
        console.log('total data :  ', count);
    } catch (err) {
        console.log(err);
    }
})();