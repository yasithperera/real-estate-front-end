import { Injectable } from '@angular/core';
import { Agent } from '../models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private agents: Agent[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      profileImage: 'assets/images/john-doe.png',
      properties: [1, 2]  // IDs of properties handled by the agent
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      profileImage: 'assets/images/jane-smith.png',
      properties: [3]  // IDs of properties handled by the agent
    }
  ];

  constructor() {}

  // Method to retrieve all agents
  getAgents(): Agent[] {
    return this.agents;
  }

  // Method to retrieve an agent by ID
  getAgentById(id: number): Agent | undefined {
    return this.agents.find(agent => agent.id === id);
  }
}
