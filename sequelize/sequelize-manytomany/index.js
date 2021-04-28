const { Authority, Role } = require('./src/models/index');

(async () => {
    try {
        let authority = await Authority.findOne({
            include: [
                {
                    model: Role,
                    as: 'roles',
                    through: {
                        attributes: []
                    }
                }
            ],
            where: {
                name: 'POST_VIEW'
            }
        });
        console.log(`Authority : `);
        console.log(authority.toJSON());

        let role = await Role.findOne({
            include: [
                {
                    model: Authority,
                    as: 'authorities',
                    through: {
                        attributes: []
                    }
                }
            ],
            where: {
                name: 'ADMIN'
            }
        });
        console.log(`Role : `);
        console.log(role.toJSON());

    } catch (err) {
        console.log(err);
    }
})();