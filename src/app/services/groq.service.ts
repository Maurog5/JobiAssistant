import { Injectable } from '@angular/core';
import { jobinput, GeneratedMaterials } from '../models/jobi.model';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

const SYSTEM_PROMPT = `You are a professional jobi application specialist.
Your ONLY purpose is to help candidates write jobi application materials: LinkedIn messages, short pitches, and cover letters.

STRICT RULES:
- You ONLY respond to requests related to jobi applications, CVs, cover letters, LinkedIn messages, or professional self-presentation.
- If asked anything outside of this scope (coding help, general questions, opinions, etc.), respond ONLY with: "I can only help with jobi application materials."
- Never add preamble, explanations, or commentary. Return ONLY the requested text, ready to copy and paste.
- Always write in the same language as the jobi description provided.
- Tailor every output specifically to the jobi offer provided. Never write generic templates.
- Be honest: if the candidate's CV has gaps compared to the jobi requirements, acknowledge them briefly and positively (e.g. "currently deepening my knowledge of X").
- Keep a professional but human tone. Avoid corporate buzzwords and clichés.
- Never invent experience or skills not present in the CV.`;

@Injectable({ providedIn: 'root' })
export class GroqService {

  private async call(apiKey: string, prompt: string): Promise<string> {
    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1000,
        temperature: 0.7,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: prompt }
        ]
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `API error ${res.status}`);
    }
    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() ?? '';
  }

  async generateAll(
    input: jobinput,
    onProgress: (step: 'linkedin' | 'pitch' | 'cover') => void
  ): Promise<GeneratedMaterials> {
    const ctx = this.buildContext(input);

    onProgress('linkedin');
    const linkedin = await this.call(input.apiKey,
      `Write a short LinkedIn direct message (maximum 80 words) to apply for this jobi.
Requirements:
- Address the hiring manager or recruiter directly if a name is known, otherwise use a neutral greeting
- Mention 1-2 specific skills from the CV that directly match the jobi requirements
- Express interest in sending the CV
- End with a clear, simple call to action
- No excessive formalities

${ctx}`
    );

    onProgress('pitch');
    const pitch = await this.call(input.apiKey,
      `Write a short professional self-presentation (maximum 100 words) for a jobi portal application text field.
Requirements:
- Start with years of experience and main specialization
- Highlight 2-3 specific technical skills that match this jobi offer
- Mention one concrete achievement from the CV
- Close with availability and motivation

${ctx}`
    );

    onProgress('cover');
    const coverLetter = await this.call(input.apiKey,
      `Write a complete, professional cover letter (exactly 4 paragraphs) for this jobi application.
Paragraph structure:
1. Introduction: who the candidate is and why they are applying to THIS specific company and role
2. Technical match: connect the candidate's most relevant experience to the specific requirements listed in the jobi offer
3. Honest gap handling: if there are missing skills, acknowledge them briefly and frame them as areas of active growth; if no gaps, use this paragraph for a standout achievement
4. Closing: express availability for an interview, thank the reader, professional sign-off

${ctx}`
    );

    return { linkedin, pitch, coverLetter };
  }

  private buildContext(input: jobinput): string {
    return `=== CANDIDATE CV ===
${input.cv}

=== jobi OFFER ===
Position: ${input.position || 'not specified'}
Company: ${input.company || 'not specified'}
Description:
${input.jobiDescription}`;
  }
}
