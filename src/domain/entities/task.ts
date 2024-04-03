import { randomUUID } from "node:crypto";

export class Task {
  public id: string;
  public name: string;
  public description: string;

  constructor(name: string, description: string, id?: string) {
    this.name = name;
    this.description = description;
    this.id = id ?? randomUUID();
  }
}
