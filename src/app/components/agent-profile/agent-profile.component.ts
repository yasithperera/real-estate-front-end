import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../service/agent.service';
import { Agent } from '../../models/agent.model';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
  agents: Agent[] = [];

  constructor(private agentService: AgentService) {}

  ngOnInit(): void {
    this.agents = this.agentService.getAgents();
  }
}
