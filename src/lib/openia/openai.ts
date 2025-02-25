import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAILLM {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateResponse(prompt: string): Promise<string | null> {
    const response = await this.client.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant. Provide information in JSON format." },
        { role: "user", content: prompt }
      ],
      max_tokens: 500,
      temperature: 0.5
    });
    if (
      !response.choices ||
      response.choices.length === 0 ||
      !response.choices[0].message ||
      !response.choices[0].message.content
    ) {
      return null;
    }

    return response.choices[0].message.content.trim();
  }

  supportsStopWords(): boolean {
    return false;
  }
}