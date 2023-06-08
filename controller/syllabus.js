const Syllabus = require('../models/syllabus');

exports.createSyllabus = async (req, res) => {
    try{
        const syllabus = new Syllabus(req.body);
        await syllabus.save();
        res.status(201).json({syllabus});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

// update 

exports.updateSyllabus = async (req, res) => {
    try{
        const syllabus = await Syllabus.findOne(req.params.id);
        if(!syllabus){
            throw new Error('Syllabus not found');
        }
        Object.keys(req.body).forEach(key => {
            syllabus[key] = req.body[key];
        }
        );
        await syllabus.save();
        res.status(200).json({syllabus});

    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

// delete

exports.deleteSyllabus = async (req, res) => {
    try{
        const syllabus = await Syllabus.findById(req.params.id);
        if(!syllabus){
            throw new Error('Syllabus not found');
        }
        await syllabus.remove();
        res.status(200).json({syllabus});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

// get all by course id
exports.getSyllabusByCourseId = async (req, res) => {
    try{
        const syllabus = await Syllabus.find({courseId: req.params.id});
        res.status(200).json({syllabus});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};
