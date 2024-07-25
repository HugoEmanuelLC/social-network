import { Router } from "express";

import {verifAuth} from "../middleware/authentification.js";

const pageSecretes = Router();

pageSecretes.get("/api/secret", verifAuth, (req, res) => {
    res.status(200).json({message: 'Request authorized to the secret page'});
});

export { pageSecretes };