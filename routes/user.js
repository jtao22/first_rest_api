import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {showUsers, addUsers, getUsers, removeUsers, updateUsers} from '../controllers/user.js';

const router = express.Router();
let users=[];
router.get('/', showUsers);

router.post('/', addUsers);

router.get('/:id', getUsers);

router.delete('/:id', removeUsers);

router.patch('/:id', updateUsers)
export default router;
