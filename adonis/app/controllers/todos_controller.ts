import Todo from '#models/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
    /**
     * Display a list of resource
     */
    async index(req: HttpContext) {
        const todos = Todo.all()

        return req.view.render('pages/todos', {
            todos,
        })
    }

    /**
     * Display form to create a new record
     */
    async create({}: HttpContext) {}

    /**
     * Handle form submission for the create action
     */
    async store({ request }: HttpContext) {}

    /**
     * Show individual record
     */
    async show({ params }: HttpContext) {}

    /**
     * Edit individual record
     */
    async edit({ params }: HttpContext) {}

    /**
     * Handle form submission for the edit action
     */
    async update({ params, request }: HttpContext) {}

    /**
     * Delete record
     */
    async destroy({ params }: HttpContext) {}
}
