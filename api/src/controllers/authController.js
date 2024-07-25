import loginModel from '../models/loginModel.js';
import registerModel from '../models/registerModel.js';

export const login = async (req, res) => await loginModel(req, res);
export const register = async (req, res) => await registerModel(req, res);