/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TodosController = () => import('#controllers/todos_controller')

router.on('/').render('pages/home')

router.get('/todos', [TodosController, 'index'])
