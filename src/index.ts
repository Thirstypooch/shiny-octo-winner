import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'postgres',
    debug: !__prod__,
  })
}

console.log('Thirsty Pooch')
