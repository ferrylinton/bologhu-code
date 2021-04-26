const { User, Role, Authority } = require('./src/models/index');


(async () => {
    try {
        let user = await User.findOne({
            include: [
                {
                    model: Role,
                    as: 'role',
                    include: [
                        {
                            model: Authority,
                            as: 'authorities',
                            through: {
                                attributes: []
                            }
                        }
                    ]
                }
            ],
            where: {
                username: 'admin01'
            },
            nest: true
        });

        console.log(`User : `);
        console.log(JSON.stringify(user.toJSON(), null, 2));

        let role = await Role.findOne({
            include: [
                {
                    model: User,
                    as: 'users',
                    attributes: ['id', 'username']
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