import { Request, Response } from 'express';
import { getCustomRepository, Like } from 'typeorm';
import { CommentsRepository } from '../repositories/CommentsRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class CommentsController {
   async create(request: Request, response: Response) {
      const { text } = request.body;

      const schema = yup.object().shape({
         text: yup.string().required("Texto obrigatório")
      });

      try {
         await schema.validate(request.body, { abortEarly: false });
      } catch (error) {
         throw new AppError(error);
      }

      const commentsRepository = getCustomRepository(CommentsRepository);

      const comment = commentsRepository.create({
         text
      });

      await commentsRepository.save(comment);

      return response.status(201).json(comment);
   }

   async show(request: Request, response: Response) {
      const commentsRepository = getCustomRepository(CommentsRepository);

      const all = await commentsRepository.find();

      return response.status(200).json(all);
   }
}

export { CommentsController };