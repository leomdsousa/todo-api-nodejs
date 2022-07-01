const todo = require('../models/todo');

module.exports = class {
    static getAll() {
        try {
            return todo.find();
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    }

    static getById(id) {
        try {
            return todo.findById(id);
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    }

    static add(obj) {
        try {
            return new todo(obj).save();
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    }

    static update(obj) {
        try {
            return todo.updateOne(obj);
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    }

    static delete(obj) {
        try {
            return todo.deleteOne(obj);
        } catch(error){
            console.log(`An error occured: ${error}`);
        }
    }
}