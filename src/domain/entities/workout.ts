import { randomUUID } from "node:crypto";

export class Workout {
  public id: string;
  public name: string;
  public weight: string;
  public timeSpent: string;
  public relate: string;

  constructor(
    name: string,
    weight: string,
    timeSpent: string,
    relate: string,
    id?: string,
  ) {
    this.name = name;
    this.weight = weight;
    this.timeSpent = timeSpent;
    this.relate = relate;
    this.id = id ?? randomUUID();
  }
}
