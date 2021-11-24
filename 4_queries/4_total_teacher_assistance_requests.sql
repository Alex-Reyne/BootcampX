SELECT count(*) as total_assistances, name
FROM assistance_requests
INNER JOIN teachers ON teachers.id = assistance_requests.teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;