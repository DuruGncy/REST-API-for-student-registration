import { expect, test } from "playwright/test";

test("Get student IDs", async ({ request, baseURL }) => {
  const newStudent = {
    studentId: "S-2",
    name: "Ayşe",
    age: 21,
    gender: "female",
  };

  const createResponse = await request.post(`${baseURL}/students`, {
    data: newStudent,
  });
  expect([200, 201]).toContain(createResponse.status());

  const createdBody = await createResponse.json();
  const createdId = createdBody.id;

  const getResponse = await request.get(`${baseURL}/students`);
  expect(getResponse.status()).toBe(200);

  const allStudents = await getResponse.json();

  const found = allStudents.find((s: { id: number }) => s.id === createdId);

  expect(found).toBeTruthy();
  expect(found).toHaveProperty("id", createdId);
});
