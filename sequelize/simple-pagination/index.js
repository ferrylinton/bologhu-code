const contactService = require('./src/services/contact-service');

(async () => {
    try {
        let data = await contactService.findAndCountAll('AR', 1);
        data.rows = data.rows.map(row => row.toJSON());
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})();