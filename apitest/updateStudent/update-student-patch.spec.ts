import { expect, test } from "playwright/test";

test("Update Student with PATCH", async ({ request, baseURL }) => {
  const newStudent = {
    studentId: "S-11",
    name: "Zeynep",
    age: 22,
    gender: "female",
  };

  const createResponse = await request.post(`${baseURL}/students`, {
    data: newStudent,
  });
  expect([200, 201]).toContain(createResponse.status());

  const createdBody = await createResponse.json();
  const createdId = createdBody.id;

  const patchResponse = await request.patch(`${baseURL}/students/${createdId}`, {
    data: { age: 23 },
  });
  expect(patchResponse.ok()).toBeTruthy();

  const patchedBody = await patchResponse.json();
  expect(patchedBody.age).toBe(23);
  expect(patchedBody.name).toBe("Zeynep"); 
});
