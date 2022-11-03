import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted with user ID: ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated with user ID: ', this.id);
  }

  @AfterRemove()
  logDelete() {
    console.log('Deleted with user ID: ', this.id);
  }
}
