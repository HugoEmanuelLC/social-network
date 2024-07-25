import Users from '../mongoDB/userSchema.js';

const registerModel = async (req, res) => {
    const userInfos = req.body;
    await Users.countDocuments(userInfos)
    .then((resp) => {
        if (resp > 0) {
            res.status(409).json({message: 'User already exists'});
        } else {
            const newUser = new Users(userInfos);
            newUser.save()
            .then((re) => {
                res.status(201).json({message: 'User created'});
            })
            .catch((err) => {
                res.status(500).json(err.code == 11000 ? {message: 'User already exists'} : {message: 'Internal server error'});
            });
        }
    })
}

export default registerModel;