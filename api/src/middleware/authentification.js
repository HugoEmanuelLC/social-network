import Users from '../mongoDB/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    await Users.findOne({email: req.body.email})
    .then((resp)=> {
        if (resp == null) {
            res.status(404).json({message: 'User not found'});
        } else {
            bcrypt.compare(req.body.password, resp.password)
            .then((valid) => {
                if (!valid) {
                    res.status(401).json({message: 'Incorrect password'});
                } else {
                    res.status(200).json({
                        userId: resp._id,
                        token: jwt.sign(
                            {userId: resp._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                        ),
                        message: 'User connected'
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({message: 'Internal server error'});
            });
        }
    })
}

const verifAuth = async (req, res, next) => {
    let dataRequest = JSON.parse(req.headers.authorization);
    try {
        const token = req.headers.authorization.split(' ')[1];
    
        const decodedToken = jwt.verify(dataRequest.token, 'RANDOM_TOKEN_SECRET');

        Users.findOne({ _id: decodedToken.userId })
        .then(() => {
            next();
        })
        .catch(() => {
            res.status(401).json({message: 'Unauthorized request'});
        });
    } catch {
        res.status(401).json({message: 'Unauthorized request'});
    }
}

export {
    auth,
    verifAuth
}