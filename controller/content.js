const Content = require('../models/content');

exports.createContent = async (req, res) => {
    try{
        const content = new Content(req.body);
        await content.save();
        res.status(201).json({content});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

exports.getContent = async (req, res) => {
    try{
        const content = await Content.find({courseId: req.params.id});
        res.status(200).json({content});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

exports.getContentById = async (req, res) => {
    try{
        const content = await Content.findById(req.params.id);
        res.status(200).json({content});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

exports.updateContent = async (req, res) => {
    try{
        const content = await Content.findOne(req.params.id);
        if(!content){
            throw new Error('Content not found');
        }
        Object.keys(req.body).forEach(key => {
            content[key] = req.body[key];
        }
        );
        await content.save();
        res.status(200).json({content});

    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

exports.deleteContent = async (req, res) => {
    try{
        const content = await Content.findById(req.params.id);
        if(!content){
            throw new Error('Content not found');
        }
        await content.remove();
        res.status(200).json({content});

    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};
