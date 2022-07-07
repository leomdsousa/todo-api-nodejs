const todo = require('../models/todo');
const { getById } = require('../repositories/todoRepository');
const repository = require('../repositories/todoRepository');

module.exports = class TodoService {
    static async getAll() {
        try {
            const data = repository.getAll();
            return data;
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    };

    static async getById(id) {
        try {
            const data = await repository.getById(id);
            return data;
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    };

    static async add(obj) {
        try {
            const input = new todo(obj);
            
            const data = repository.add(input);
            return data;
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    };

    static async update(obj, id) {
        try {
            var input = null;

            if(id && obj.id){
                if(id != obj.id) {
                    throw Error('The id provided in url must be equal to the id provided in body.') 
                }

                input = getById(id);
            }
            else {
                if(id) {
                    input = getById(id);
                }

                if(obj.id) {
                    input = getById(obj.id);
                }
            }

            if(!input) {
                throw Error('No todo found.') 
            }

            input = new todo(obj);
            
            let data = await repository.update(input);
            
            return data;
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    };

    static async delete(id) {
        try {
            const todo = repository.getById(id);

            if(!todo) return null;
            
            const data = repository.delete(todo);
            return data;
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    };
}