let students = [
    { id: 1, name: 'Karthik', age: 20, department: 'CS' },
    { id: 2, name: 'Harish', age: 23, department: 'IT' }
]

let nextId = 3;

exports.getAllStudents = (req, res) => {
    res.render('student', { students });
}

exports.showAddForm = (req, res) => {
    res.render('add')
}

exports.addStudent = (req, res) => {
    const { name, age, department } = req.body;

    const newStudent = { id: nextId++, name, age, department }
    students.push(newStudent);
    res.redirect('/students')
}

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    students = students.filter(student => student.id !== parseInt(id));
    res.redirect('/students');

}

exports.updateStudentForm = (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.send('student not found')
    }
    res.render('edit', { student })
}

exports.editStudent = (req, res) => {
    const { id } = req.params;
    const { name, age, department } = req.body;

    const student = students.find(student => student.id === parseInt(id));
    if (!student) {
        return res.send('student not found')
    }

    if (name) {
        student.name = name;
    }
    if (age) {
        student.age = age;
    }
    if (department) {
        student.department = department;
    }

    res.redirect('/students')
}