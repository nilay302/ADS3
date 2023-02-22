const db = require('../../config/db');


class Student {
    constructor(ID, name, dept_name, tot_cred){
        this.ID = ID;
        this.name = name;
        this.dept_name = dept_name;
        this.tot_cred = tot_cred;
    }

    async save(){
        let sql = `
        INSERT INTO student(
            ID,name,dept_name,tot_cred
        )
        VALUES(
            '${this.ID}',
           ' ${this.name}',
            '${this.dept_name}',
            '${this.tot_cred}'
        );
        `;

        const [newStudent, _] = await db.execute(sql);

        return newStudent;
    }

    static findAll(){
        let sql = "SELECT * FROM student;";
        return db.execute(sql);
    }

    static findById(ID){
        let sql = `SELECT * FROM student WHERE ID = '${ID}';`;
        return db.execute(sql);
    }
}

module.exports = Student;