const { Pool } = require('pg');

const pool = new Pool({
  user: 'alex',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);

pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${args[0] || 'JUL02'}%'
  ORDER BY teachers.name;
`)
.then(res => {
  const info = res.rows;
  
  info.forEach(assist => {
    console.log(`${assist.cohort}: ${assist.teacher}`);
  });

})
.catch(err => console.error('query error', err.stack));