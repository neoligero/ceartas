import { SerperClient } from '../serper-tool';
import { OpenAILLM } from '../openai';
import { Agent } from '../../modules/kernel/domain/agent';


interface SocialMediaData {
  [platform: string]: {
    followerCount?: number;
    likes?: number;
    posts?: number;
  };
}

export class SocialMediaAgent extends Agent {
  private llm: OpenAILLM;

  constructor(llm: OpenAILLM) {
    super({
      name: "Social Media Analyst",
      role: "Analyze social media profiles and extract follower counts or recent posts.",
      backstory: "You are an AI agent tasked with gathering and analyzing social media data for a given username.",
      goal: "Retrieve social media information for a given username and output it as JSON.",
      verbose: true
    });
    this.llm = llm;
  }

  async respond(prompt: string, client: SerperClient): Promise<SocialMediaData> {
    let socialMediaData: SocialMediaData = {};

    const searchResults = await client.search(prompt);
    const snippets = searchResults.parsed_results.map((result, i) =>
      `${i + 1}. ${result.title || 'N/A'} - ${result.snippet || 'N/A'} (${result.link || 'N/A'})`
    ).join('\n');

    const analysisPrompt = `Analyze the following search results and extract information about social media platforms, follower counts, likes, or posts. Provide the result in JSON format where the keys are the platform names and the values are their metrics:\n\n${snippets}`;
    const response = await this.llm.generateResponse(analysisPrompt);
    if (!response) {
      return socialMediaData; // We could throw an error here if needed
    }

    try {
      socialMediaData = JSON.parse(response);
    } catch (error) {
      console.error('Failed to parse social media data:', error);
    }

    return socialMediaData;
  }
}