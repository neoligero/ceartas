import { Serper } from 'serper';

export class SerperClient {
  private search_tool: Serper;

  constructor() {
    this.search_tool = new Serper({ apiKey: process.env.SERPER_API_KEY || '' });
  }

  async search(query: string): Promise<any> {
    const raw_response = await this.search_tool.search(query);

    if (!raw_response) {
      throw new Error('Serper returned an empty response.');
    }

    if (typeof raw_response === 'object') {
      return raw_response;
    }

    if (typeof raw_response === 'string') {
      const results: any[] = [];
      const sections = (raw_response as string).trim().split('---');
      for (const section of sections) {
        const lines = section.trim().split('\n');
        const result: { title: string; link: string; snippet: string } = { title: 'N/A', link: 'N/A', snippet: 'N/A' };
        for (const line of lines) {
          if (line.startsWith('Title:')) {
            result.title = line.replace('Title:', '').trim();
          } else if (line.startsWith('Link:')) {
            result.link = line.replace('Link:', '').trim();
          } else if (line.startsWith('Snippet:')) {
            result.snippet = line.replace('Snippet:', '').trim();
          }
        }
        if (result) {
          results.push(result);
        }
      }
      return { parsed_results: results };
    }

    throw new Error('Unexpected Serper response format.');
  }
}
