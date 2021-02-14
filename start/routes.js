'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

/* Rutas Usuarios */
Route.get('/api/users', 'UserController.index')
Route.post('/api/users','UserController.store')
Route.delete('/api/users/:id','UserController.destroy')
Route.put('/api/users/:id','UserController.update')

/* Rutas Productos */
Route.get('/api/products', 'ProductController.index')
Route.post('/api/products','ProductController.store')
Route.delete('/api/products/:id','ProductController.destroy')
Route.put('/api/products/:id','ProductController.update')

/* Rutas Comentarios */
Route.get('/api/comments', 'CommentController.index')
Route.post('/api/comments','CommentController.store')
Route.delete('/api/comments/:id','CommentController.destroy')
Route.put('/api/comments/:id','CommentController.update')
