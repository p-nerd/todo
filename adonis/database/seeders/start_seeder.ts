import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { TodoFactory } from '#database/factories/todo_factory'

export default class extends BaseSeeder {
    async run() {
        await TodoFactory.createMany(10)
    }
}
