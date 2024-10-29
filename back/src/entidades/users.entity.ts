import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
  })
  username: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  mail: string;

  @Column()
  birthdate: Date;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  phone?: number | undefined;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  location?: string | undefined;

  @Column({
    type: "text",
    default: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
  })
  imgUrl: string

  @Column({
    nullable: true,
    default: true,
  })
  isActive: boolean;

}
