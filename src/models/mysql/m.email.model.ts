import { Table, Column, Model, AutoIncrement, DataType } from 'sequelize-typescript';

@Table( {
   tableName: 'email',
   createdAt: false,
   updatedAt: false
} )
export class Email extends Model<Email> {

    @AutoIncrement
    @Column( { field: 'id_email', primaryKey: true  } )
    idEmail?: number;

    @Column( { field: 'inbox_id'  } )
    idInbox?: number;

	@Column( { field: 'to', type: DataType.STRING( 300 ) } )
    to?: string;

	@Column( { field: 'subject', type: DataType.STRING( 100 ) } )
    subject?: string;

    @Column( { field: 'from', type: DataType.STRING( 300 ) } )
    from?: string;

	@Column( { field: 'body', type: DataType.STRING( 3000 )} )
    body?: string;

	@Column( { field: 'threading', type: DataType.STRING( 10 )} )
    threading?: string;

	@Column( { field: 'urgent' } )
    urgent?: boolean;

	@Column( { field: 'date' } )
    date?: Date;

	@Column( { field: 'status', type: DataType.STRING( 50 ) } )
    status?: string;

	@Column( { field: 'email_type', type: DataType.STRING( 50 ) } )
    emailType?: string;

	@Column( { field: 'LD' } )
    LD?: number;

	@Column( { field: 'notified' } )
    notified?: boolean;
}