import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface UserCreationAttr {
  email: string;
  password: string;
}
@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: 1, description: 'Уникальный идинфикатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'user@mail.ru',
    description: 'Почтовый адрес',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @ApiProperty({
    example: '123456',
    description: 'Пароль',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @ApiProperty({
    example: 'false',
    description: 'Забанен или нет',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;
  @ApiProperty({
    example: 'За хулиганство',
    description: 'Причина блокировки',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  banReason: string;
}
