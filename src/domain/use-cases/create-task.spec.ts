import { expect, it } from "vitest";
import { CreateTaskUseCase } from "./create-task";

it("create a task", () => {
  const newTask = new CreateTaskUseCase();

  const task = newTask.execute({
    userId: "1",
    description: "Ir na cozinha beber água.",
    name: "Beber água.",
  });

  expect(task.description).toEqual("Ir na cozinha beber água.");
});
