import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'shelter',
})
export class ShelterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
    nullable: false,
  })
  shelter_name: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  mail: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  phone?: number

  @Column()
  location: string;

  @Column({
    type: "text",
    default: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
  })
  imgUrl: string

  @Column({
    nullable: true,
    type: "text",
    array: true
  })
  listImg?: string[];

  @Column({
    nullable: true,
    default: false,
  })
  isActive: boolean;

  @Column({
    nullable: true,
    type: "decimal"
  })
  rate: number;

}
