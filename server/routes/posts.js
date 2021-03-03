import express from 'express';

import { getPosts, createPost, updatePost} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost); // create a new post
router.patch('/:id', updatePost); // patch is used for updating existing documents

export default router;