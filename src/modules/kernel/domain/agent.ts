export interface SerperClientFake {
  search(query: string): Promise<any>;
}

export class Agent {
  name: string;
  role: string;
  backstory: string;
  goal: string;
  verbose: boolean;

  constructor(data: { name: string; role: string; backstory: string; goal: string; verbose: boolean }) {
    this.name = data.name;
    this.role = data.role;
    this.backstory = data.backstory;
    this.goal = data.goal;
    this.verbose = data.verbose;
  }

  async respond(prompt: string, client: SerperClientFake): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

export default Agent;