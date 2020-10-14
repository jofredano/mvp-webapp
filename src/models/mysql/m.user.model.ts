import { Table, Model, AutoIncrement, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'users',
	createdAt: false,
	updatedAt: false
})
export class UserModel extends Model<UserModel> {

    @AutoIncrement
	@Column({ field: 'user_id', primaryKey: true, type: DataType.INTEGER })
    userId?: number;

    @Column({ field: 'full_name', type: DataType.STRING(300) })
    fullName?: string;
    
    @Column({ field: 'birth_date', type: DataType.DATE })
    birthDate?: Date;
    
    @Column({ field: 'username', type: DataType.STRING(25) })
    username?: string;

    @Column({ field: 'passwd', type: DataType.TEXT })
    password?: string;
}