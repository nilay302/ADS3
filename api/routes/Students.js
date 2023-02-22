const express = require('express');
const Student = require('../models/Student');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    try {
        const student = await Student.findAll();

        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/:ID', async (req, res, next)=>{
    try {
        const [student, _] = await Student.findById(req.params.ID);

        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        let {ID,name,dept_name,tot_cred} = req.body;
        let student = new Student(ID,name,dept_name,tot_cred);
        student =  await student.save();
        res.status(201).json({message:"Student added"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})

module.exports = router;