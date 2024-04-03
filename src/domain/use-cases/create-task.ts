import { Task } from "../entities/task";

interface CreateTaskUseCaseRequest {
  description: string;
  name: string;
  userId: string;
}

export class CreateTaskUseCase {
  execute({ description, name, userId }: CreateTaskUseCaseRequest) {
    const createTask = new Task(name, description);

    return createTask;
  }
}
