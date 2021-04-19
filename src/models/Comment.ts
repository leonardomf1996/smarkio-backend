import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('comments')
class Comment {
   @PrimaryColumn()
   readonly id: string;

   @Column()
   text: string;

   @CreateDateColumn()
   created_at: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}

export { Comment };