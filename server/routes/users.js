import express from 'express';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin); // post request because we are sending all the info from login form to the backend
router.post('/signup', signup);

export default router;
