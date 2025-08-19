const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/add', studentController.showAddForm);
router.post('/add', studentController.addStudent);
router.get('/delete/:id', studentController.deleteStudent);
router.get('/edit/:id', studentController.updateStudentForm)
router.post('/edit/:id', studentController.editStudent);

module.exports = router;