import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { OpenAILLM } from '../../../lib/openai/openai';
import { SerperClient } from '../../../lib/serper-tool';
import { SocialMediaAgent } from '../../../lib/social-media-agent/social-media-agent';
// import { Task, Crew } from 'crewai';

export type BrandScoreServiceParams = {
  username: string;
}

@Injectable()
export class BrandScoreService {
  async invoke(params: BrandScoreServiceParams): Promise<any> {
    const llm = new OpenAILLM();
    const searchTool = new SerperClient();
    const agent = new SocialMediaAgent(llm);
    // const task = new Task({
    //   description: `Search for the username '${params.username}' on Google and extract social media information.`,
    //   agent,
    //   expectedOutput: "A JSON object with social media platforms and their metrics."
    // });
    //
    // const crew = new Crew({ agents: [agent], tasks: [task], verbose: true });
    // const result = await agent.respond(`Search for username: ${params.username}`, searchTool);
    //
    // if (!result) {
    //   throw new HttpException('Failed to retrieve or process social media information.', HttpStatus.INTERNAL_SERVER_ERROR);
    // }

    return { data: 'fake-result' };
  }
}
