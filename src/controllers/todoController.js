const service = require('../services/todoService');

module.exports.get = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await service.getById(id);

        if(!data) res.status(404).json("No todo found!");

        res.status(200).json(data);
    } catch(error) {
        res.status(500).json({ error: error});
    }
};

module.exports.getAll = async (req, res) => {
    try {
        const data = await service.getAll();

        if(!data) res.status(404).json("No todo found!");

        res.status(200).json(data);
    } catch(error) {
        res.status(500).json({ error: error});
    }
};

module.exports.add = async (req, res) => {
    try {
        const data = await service.add(req.body);
        res.status(201).json(data);

    } catch(error) {
        res.status(500).json({ error: error});
    }
};

module.exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await service.update(req.body, id);
        res.status(200).json(data);
    } catch(error) {
        res.status(500).json({ error: error});
    }
};

module.exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await service.delete(id);
        res.status(204).json(data);
    } catch(error) {
        res.status(500).json({ error: error});
    }
};