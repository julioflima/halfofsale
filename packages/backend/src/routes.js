const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ListController = require('./controllers/ListController');
const TodoController = require('./controllers/TodoController');

const routes = express.Router();

routes.get('/lists', ListController.index);

routes.post(
  '/lists',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  ListController.create,
);

routes.delete(
  '/lists',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ListController.delete,
);

routes.get(
  '/todosByList',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  TodoController.indexByList,
);

routes.get('/todos', TodoController.index);

routes.post(
  '/todos',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      label: Joi.string().required(),
    }),
  }),
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  TodoController.create,
);

routes.delete(
  '/todos/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  TodoController.delete,
);
module.exports = routes;
