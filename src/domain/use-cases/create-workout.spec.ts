import { expect, it } from "vitest";
import { CreateWorkoutUseCase } from "./create-workout";

it("create a training day", () => {
  const newTrainingDay = new CreateWorkoutUseCase();

  const trainingDay = newTrainingDay.execute({
    userId: "1",
    relate: "Treino finalizado",
    timeSpent: "30 minutos",
    weight: "5kg",
    name: "Supino inclinado",
  });

  expect(trainingDay.name).toEqual("Supino inclinado");
});
