import Users from '../mongoDB/userSchema.js';
import { auth } from '../middleware/authentification.js';

const loginModel = async (req, res) => {
    await Users.findOne({email: req.body.email})
    .then((resp)=> 
        resp == null 
        ? res.status(404).json({message: 'User not found'})
        : auth(req, res)
    )
    .catch((err)=>console.log("err ", err));
}

export default loginModel;