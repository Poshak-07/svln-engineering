'use server';

/**
 * @fileOverview Generates an introductory paragraph for the 'About Us' section of a website using GenAI.
 *
 * - generateAboutUsIntro - A function that generates the intro paragraph.
 * - GenerateAboutUsIntroInput - The input type for the generateAboutUsIntro function.
 * - GenerateAboutUsIntroOutput - The return type for the generateAboutUsIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutUsIntroInputSchema = z.object({
  businessDescription: z.string().describe('A detailed description of the business, its services, and mission.'),
  tone: z.string().describe('The desired tone of the introductory paragraph (e.g., professional, friendly, formal).'),
});

export type GenerateAboutUsIntroInput = z.infer<typeof GenerateAboutUsIntroInputSchema>;

const GenerateAboutUsIntroOutputSchema = z.object({
  introParagraph: z.string().describe('The generated introductory paragraph for the About Us section.'),
});

export type GenerateAboutUsIntroOutput = z.infer<typeof GenerateAboutUsIntroOutputSchema>;

export async function generateAboutUsIntro(input: GenerateAboutUsIntroInput): Promise<GenerateAboutUsIntroOutput> {
  return generateAboutUsIntroFlow(input);
}

const generateAboutUsIntroPrompt = ai.definePrompt({
  name: 'generateAboutUsIntroPrompt',
  input: {schema: GenerateAboutUsIntroInputSchema},
  output: {schema: GenerateAboutUsIntroOutputSchema},
  prompt: `You are a marketing expert tasked with creating compelling introductory paragraphs for company websites.

  Based on the business description and desired tone, generate an engaging and informative introductory paragraph for the 'About Us' section.

  Business Description: {{{businessDescription}}}
  Tone: {{{tone}}}

  Introductory Paragraph:`, 
});

const generateAboutUsIntroFlow = ai.defineFlow(
  {
    name: 'generateAboutUsIntroFlow',
    inputSchema: GenerateAboutUsIntroInputSchema,
    outputSchema: GenerateAboutUsIntroOutputSchema,
  },
  async input => {
    const {output} = await generateAboutUsIntroPrompt(input);
    return output!;
  }
);
