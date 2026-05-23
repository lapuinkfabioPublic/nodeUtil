import 'reflect-metadata'

import { DataSource } from 'typeorm'

export const SoftnovaAccDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    entities: ['src/entities/sofnovaAcc/*.ts'],
    migrations: ['src/migrations/softnovaAcc/*.ts'],

    // TROCAR PARAMETROS
    port: 5432,
    username: 'postgres',
    password: 'senha',
    database: 'meu_banco',
})
