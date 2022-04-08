import { Members } from "./member";

export interface Dinner {
  member: Members[];
  shuffle(member: Members[]): Members[];
  organize(member: Members[]): void;
}
