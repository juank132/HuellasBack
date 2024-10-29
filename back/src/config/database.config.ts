import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './envs';

const dbConfig: DataSourceOptions = {
  type: 'postgres',
  database: DB_NAME,
  host: DB_HOST || '127.0.0.1',
  port: +DB_PORT || 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: false,
  dropSchema: false,
};

export const databaseConfig = TypeOrmModule.forRoot({
  ...dbConfig,
});

export const connectionSource = new DataSource(dbConfig);
