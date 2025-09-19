import { expect, test } from "playwright/test";

test("Delete student", async ({ request, baseURL }) => {
  const newStudent = {
    studentId: "S-1",
    name: "Ali",
    age: 18,
    gender: "male",
  };

  const createResponse = await request.post(`${baseURL}/students`, {
    data: newStudent,
  });
  expect(createResponse.status()).toBe(201);

  const createdBody = await createResponse.json();
  const studentId = createdBody.id;

  const deleteResponse = await request.delete(`${baseURL}/students/${studentId}`);
  expect([200, 201, 204]).toContain(deleteResponse.status());

  const checkResponse = await request.get(`${baseURL}/students/${studentId}`);
  expect([404, 400]).toContain(checkResponse.status());
});
