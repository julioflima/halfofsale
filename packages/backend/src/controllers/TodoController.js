const connection = require('../database/connection');

module.exports = {
  async indexByList(request, response) {
    const lists_id = request.headers.authorization;

    const count = await connection('todos')
      .join('lists', 'lists.id', '=', 'todos.lists_id')
      .where('todos.lists_id', lists_id)
      .count()
      .first();

    const todos = await connection('todos')
      .join('lists', 'lists.id', '=', 'todos.lists_id')
      .where('todos.lists_id', lists_id)
      .select(['todos.*', 'lists.name']);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(todos);
  },

  async index(request, response) {
    const count = await connection('todos')
      .join('lists', 'lists.id', '=', 'todos.lists_id')
      .count()
      .first();

    const todos = await connection('todos')
      .join('lists', 'lists.id', '=', 'todos.lists_id')
      .select(['todos.*', 'lists.name']);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(todos);
  },

  async create(request, response) {
    const { title, description, label } = request.body;
    const lists_id = request.headers.authorization;

    try{
      const [id] = await connection('todos').insert({
        title,
        description,
        label,
        lists_id,
      });
    return response.json({ id });

    }
    catch(err){
      console.log(err);
    }
    

  },

  async delete(request, response) {
    const { id } = request.params;
    const lists_id = request.headers.authorization;

    const todo = await connection('todos').where('id', id).select('*').first();

    if (!todo) {
      return response.status(404).json({ error: 'Was not found that todo.' });
    } else if (todo.lists_id !== lists_id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    } else {
      await connection('todos').where('id', id).delete();

      return response.status(200).json({ message: 'Table deleted.', table: todo });
    }
  },
};
