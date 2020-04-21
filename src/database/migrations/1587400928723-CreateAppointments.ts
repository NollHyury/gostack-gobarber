import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointments1587400928723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'provider',
              type: 'varchar',
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
    }

}


/**
 * Linha do tempo
 *
 * 1ª semana : Agendamentos
 * 2ª semana : Usuarios
 * (NOVO DEV) : 3ª Edição Agendamentos
 * 4ª semana : Compras
 * Evita que os bancos de dados fiquem desatualizados
 */
