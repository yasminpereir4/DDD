import { Workout } from "../entities/workout";

interface CreateWorkoutUseCaseRequest {
  weight: string;
  timeSpent: string;
  relate: string;
  name: string;
  userId: string;
}

export class CreateWorkoutUseCase {
  execute({
    weight,
    timeSpent,
    name,
    relate,
    userId,
  }: CreateWorkoutUseCaseRequest) {
    const createTrainingDay = new Workout(name, timeSpent, weight, relate);

    return createTrainingDay;
  }
}
