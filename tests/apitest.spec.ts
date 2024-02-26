import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test("create repository", async ({ request }) => {
  const response = await request.post("/user/repos", {
    data: {
      name: "Hello-World",
      description: "This is your first repo!",
      homepage: "https://github.com",
      private: false,
      is_template: true,
    },
  });
  expect(response.ok()).toBeTruthy();
});

test("Delete repository", async ({ request }) => {
  const response = await request.delete("/repos/automator15/Hello-World");
  expect(response.status()).toBe(204);
});

test("Get list of all repositories", async ({ request }) => {
  const response = await request.get("/users/automator15/repos");
  const repos = await response.json();
  for(const repo of repos){
    console.log(repo['full_name'])
  }
});
