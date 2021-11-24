SELECT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;

-- MY CODE SAME RESULT BUT I THINK ISN'T AS ACCURATE WITH count(*)

-- SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, count(*) as total_assistances
-- FROM teachers
-- JOIN assistance_requests ON teachers.id = teacher_id
-- JOIN students ON assistance_requests.student_id = students.id
-- JOIN cohorts ON students.cohort_id = cohorts.id
-- WHERE cohorts.name = 'JUL02'
-- GROUP BY teachers.name, cohorts.name
-- ORDER BY teachers.name;