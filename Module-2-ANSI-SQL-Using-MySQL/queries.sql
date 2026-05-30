
-- Exercise 1
SELECT title, city, start_date, end_date
FROM Events
WHERE status = 'upcoming';


-- Exercise 2
SELECT 
    Events.title AS event_name,
    Sessions.title AS session_title,
    speaker_name,
    start_time,
    end_time
FROM Sessions
JOIN Events
ON Sessions.event_id = Events.event_id;


-- Exercise 3
SELECT 
    Users.full_name,
    Events.title AS event_name,
    Events.city,
    Registrations.registration_date
FROM Registrations
JOIN Users
ON Registrations.user_id = Users.user_id
JOIN Events
ON Registrations.event_id = Events.event_id;


-- Exercise 4
SELECT 
    Events.title AS event_name,
    COUNT(Sessions.session_id) AS session_count
FROM Sessions
JOIN Events
ON Sessions.event_id = Events.event_id
WHERE TIME(Sessions.start_time)
BETWEEN '10:00:00' AND '12:00:00'
GROUP BY Events.title;


-- Exercise 5
SELECT 
    Users.city,
    COUNT(DISTINCT Registrations.user_id) AS total_registrations
FROM Registrations
JOIN Users
ON Registrations.user_id = Users.user_id
GROUP BY Users.city
ORDER BY total_registrations DESC
LIMIT 5;


-- Exercise 6
SELECT 
    Events.title AS event_name,
    COUNT(Resources.resource_id) AS total_resources
FROM Events
LEFT JOIN Resources
ON Events.event_id = Resources.event_id
GROUP BY Events.title;


-- Exercise 7
SELECT 
    Events.title AS event_name,
    AVG(Feedback.rating) AS average_rating
FROM Feedback
JOIN Events
ON Feedback.event_id = Events.event_id
GROUP BY Events.title;


-- Exercise 8
SELECT 
    Users.full_name,
    Events.title AS event_name,
    Feedback.rating,
    Feedback.comments
FROM Feedback
JOIN Users
ON Feedback.user_id = Users.user_id
JOIN Events
ON Feedback.event_id = Events.event_id;


-- Exercise 9
SELECT 
    Users.full_name,
    Events.title AS event_name,
    Events.start_date
FROM Registrations
JOIN Users
ON Registrations.user_id = Users.user_id
JOIN Events
ON Registrations.event_id = Events.event_id
WHERE Events.status = 'upcoming';


-- Exercise 10
SELECT 
    Events.title AS event_name,
    AVG(Feedback.rating) AS average_rating
FROM Feedback
JOIN Events
ON Feedback.event_id = Events.event_id
GROUP BY Events.title
ORDER BY average_rating DESC;


-- Exercise 11
SELECT 
    Users.full_name,
    Users.email
FROM Users
LEFT JOIN Registrations
ON Users.user_id = Registrations.user_id
WHERE Registrations.registration_id IS NULL;


-- Exercise 12
SELECT 
    Events.title AS event_name,
    COUNT(Sessions.session_id) AS total_sessions
FROM Events
JOIN Sessions
ON Events.event_id = Sessions.event_id
GROUP BY Events.title
HAVING COUNT(Sessions.session_id) = (
    SELECT MAX(session_count)
    FROM (
        SELECT COUNT(session_id) AS session_count
        FROM Sessions
        GROUP BY event_id
    ) AS temp
);


-- Exercise 13
SELECT 
    Events.city,
    AVG(Feedback.rating) AS average_rating
FROM Feedback
JOIN Events
ON Feedback.event_id = Events.event_id
GROUP BY Events.city;


-- Exercise 14
SELECT 
    Events.title AS event_name,
    COUNT(Registrations.registration_id) AS total_registrations
FROM Registrations
JOIN Events
ON Registrations.event_id = Events.event_id
GROUP BY Events.title
ORDER BY total_registrations DESC
LIMIT 3;


-- Exercise 15
SELECT 
    s1.event_id,
    e.title AS event_name,
    s1.title AS session_1,
    s2.title AS session_2
FROM Sessions s1
JOIN Sessions s2
ON s1.event_id = s2.event_id
AND s1.session_id < s2.session_id
AND s1.start_time < s2.end_time
AND s1.end_time > s2.start_time
JOIN Events e
ON s1.event_id = e.event_id;


-- Exercise 16
SELECT 
    Users.full_name,
    Users.email,
    Users.registration_date
FROM Users
LEFT JOIN Registrations
ON Users.user_id = Registrations.user_id
WHERE Users.registration_date >= CURDATE() - INTERVAL 30 DAY
AND Registrations.registration_id IS NULL;


-- Exercise 17
SELECT 
    speaker_name,
    COUNT(session_id) AS total_sessions
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(session_id) > 1;


-- Exercise 18
SELECT 
    Events.title AS event_name
FROM Events
LEFT JOIN Resources
ON Events.event_id = Resources.event_id
WHERE Resources.resource_id IS NULL;


-- Exercise 19
SELECT 
    Events.title AS event_name,
    COUNT(DISTINCT Registrations.registration_id) AS total_registrations,
    AVG(Feedback.rating) AS average_rating
FROM Events
LEFT JOIN Registrations
ON Events.event_id = Registrations.event_id
LEFT JOIN Feedback
ON Events.event_id = Feedback.event_id
WHERE Events.status = 'completed'
GROUP BY Events.title;


-- Exercise 20
SELECT 
    Users.full_name,
    COUNT(DISTINCT Registrations.event_id) AS events_registered,
    COUNT(DISTINCT Feedback.feedback_id) AS feedback_submitted
FROM Users
LEFT JOIN Registrations
ON Users.user_id = Registrations.user_id
LEFT JOIN Feedback
ON Users.user_id = Feedback.user_id
GROUP BY Users.full_name;


-- Exercise 21
SELECT 
    Users.full_name,
    COUNT(Feedback.feedback_id) AS total_feedbacks
FROM Users
JOIN Feedback
ON Users.user_id = Feedback.user_id
GROUP BY Users.full_name
ORDER BY total_feedbacks DESC
LIMIT 5;


-- Exercise 22
SELECT 
    user_id,
    event_id,
    COUNT(*) AS duplicate_count
FROM Registrations
GROUP BY user_id, event_id
HAVING COUNT(*) > 1;


-- Exercise 23
SELECT 
    DATE_FORMAT(registration_date, '%Y-%m') AS month,
    COUNT(registration_id) AS total_registrations
FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY DATE_FORMAT(registration_date, '%Y-%m')
ORDER BY month;


-- Exercise 24
SELECT 
    Events.title AS event_name,
    AVG(
        TIMESTAMPDIFF(
            MINUTE,
            Sessions.start_time,
            Sessions.end_time
        )
    ) AS average_duration_minutes
FROM Sessions
JOIN Events
ON Sessions.event_id = Events.event_id
GROUP BY Events.title;


-- Exercise 25
SELECT 
    Events.title AS event_name
FROM Events
LEFT JOIN Sessions
ON Events.event_id = Sessions.event_id
WHERE Sessions.session_id IS NULL;
