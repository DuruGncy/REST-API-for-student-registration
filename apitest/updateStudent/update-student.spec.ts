import { expect, test } from "playwright/test";

test("Update Student with PUT", async ({ request, baseURL }) => {
  
  const newStudent = {
    studentId: "S-10",
    name: "Kemal",
    age: 19,
    gender: "male",
  };

  const createResponse = await request.post(`${baseURL}/students`, {
    data: newStudent,
  });
  expect([200, 201]).toContain(createResponse.status());

  const createdBody = await createResponse.json();
  const createdId = createdBody.id;

  
  const updatedStudent = {
    studentId: newStudent.studentId, 
    name: "Kemal Updated",
    age: 20,
    gender: "male",
  };

  const updateResponse = await request.put(`${baseURL}/students/${createdId}`, {
    data: updatedStudent,
  });
  expect(updateResponse.ok()).toBeTruthy();

  const updatedBody = await updateResponse.json();
  expect(updatedBody.name).toBe("Kemal Updated");
  expect(updatedBody.age).toBe(20);
});
