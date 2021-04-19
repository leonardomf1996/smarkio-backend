import { Router } from 'express';
import { CommentsController } from './controllers/CommentController';

const routes = Router();

const commentController = new CommentsController();

routes.get('/comments', commentController.show);
routes.post('/comments', commentController.create);

export { routes };