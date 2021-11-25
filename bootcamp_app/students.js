const { Pool } = require('pg');

const pool = new Pool({
  user: 'alex',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);

pool.query(`
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${args[0]}%'
  LIMIT ${args[1] || 5};
`)
.then(res => {
  const info = res.rows

  info.forEach(student => {
    console.log(`${student.name} had an id of ${student.student_id} and was in the ${student.cohort} cohort`);
  });

})
.catch(err => console.error('query error', err.stack));