# Student Registration API – Playwright E2E Tests

This repository contains the Stage-1 Technical Assignment. 

The goal: implement end-to-end tests with Playwright for a Student Registration REST API that supports CRUD operations.

Setup:

1- Clone repository.

2- Install dependencies.
npm install
npx playwright install

3- Create .env file in root diretory.

To Run all tests:
npm test

To run specific test file:
npx playwright test apitests/desiredfile

POST creates new student record
GET fetches all students and verifies the created one exists.
PUT updates all fields of a student.
PATCH updates a single field of a student.
DELETE deletes a student and verifies it no longer exists.