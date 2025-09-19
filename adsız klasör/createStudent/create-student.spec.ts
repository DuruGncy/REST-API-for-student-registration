import { expect, test } from "playwright/test";
import studentData from "../../test-data/post-student.json";

test("Create student", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/students`, { data: studentData });
  const responseBody = await response.json();

  process.env.STUDENT_ID_1 = String(responseBody.id);

  expect(response.status()).toBe(201);           
  expect(response.ok()).toBeTruthy();
  expect(responseBody.studentId).toBe(studentData.studentId);
  expect(responseBody.name).toBe(studentData.name);
  expect(responseBody.age).toBe(studentData.age);
  expect(responseBody.gender).toBe(studentData.gender);
});
