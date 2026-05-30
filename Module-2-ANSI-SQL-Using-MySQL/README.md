# Module 2 - ANSI SQL Using MySQL

## Project Overview

This project is part of the **Digital Nurture 5.0 Java Full Stack Engineering Upskilling Program**.  
The module focuses on practicing **ANSI SQL concepts using MySQL** through a community event management database.

The database is designed for a **Local Community Event Portal**, where users can register for events, attend sessions, provide feedback, and access event resources.

## Objective

The main objective of this module is to understand and apply SQL queries using MySQL.  
This includes creating tables, using joins, filtering data, grouping records, using aggregate functions, subqueries, and generating useful reports from relational data.

## Database Schema

The project uses the following tables:

### 1. Users
Stores user details such as name, email, city, and registration date.

### 2. Events
Stores event details such as title, description, city, start date, end date, status, and organizer information.

### 3. Sessions
Stores session details related to events, including session title, speaker name, start time, and end time.

### 4. Registrations
Stores information about users who registered for events.

### 5. Feedback
Stores feedback submitted by users for events, including ratings and comments.

### 6. Resources
Stores event-related resources such as PDFs, images, and links.

## Concepts Practiced

- Database table creation
- Primary keys and foreign keys
- SELECT queries
- WHERE clause
- ORDER BY clause
- GROUP BY clause
- Aggregate functions
- INNER JOIN
- LEFT JOIN
- Subqueries
- Date functions
- Filtering records
- Counting records
- Finding maximum and average values
- Detecting duplicate records
- Generating reports using SQL queries

## Exercises Completed

This module contains 25 SQL exercises based on the given event portal database.

Some of the important exercises include:

- User Upcoming Events
- Top Rated Events
- Inactive Users
- Peak Session Hours
- Most Active Cities
- Event Resource Summary
- Low Feedback Alerts
- Sessions per Upcoming Event
- Organizer Event Summary
- Feedback Gap
- Daily New User Count
- Event with Maximum Sessions
- Average Rating per City
- Most Registered Events
- Event Session Time Conflict
- Unregistered Active Users
- Multi-Session Speakers
- Resource Availability Check
- Completed Events with Feedback Summary
- User Engagement Index
- Top Feedback Providers
- Duplicate Registrations Check
- Registration Trends
- Average Session Duration per Event
- Events Without Sessions

## Tools Used

- MySQL
- MySQL Workbench
- SQL
- VS Code

## Files Included

```text
Module-2-ANSI-SQL-Using-MySQL/
│
├── schema.sql
├── data.sql
├── queries.sql
└── README.md
```