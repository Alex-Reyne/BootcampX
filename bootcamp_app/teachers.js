const { Pool } = require('pg');

const pool = new Pool({
  user: 'alex',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
const cohortName = args[0];
const values = [`${cohortName}`];

const query = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  ORDER BY teachers.name;
`;

pool.query(query, values)
.then(res => {
  const info = res.rows;
  
  info.forEach(assist => {
    console.log(`${assist.cohort}: ${assist.teacher}`);
  });

})
.catch(err => console.error('query error', err.stack))
.finally(() => pool.end());