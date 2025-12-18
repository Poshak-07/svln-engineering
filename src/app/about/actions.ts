'use server';

import { generateAboutUsIntro } from '@/ai/flows/generate-about-us-intro';
import { businessDescriptionForAI } from '@/lib/data';

export async function generateIntroAction(prevState: any, formData: FormData) {
  const tone = formData.get('tone') as string;

  if (!tone) {
    return {
      introParagraph: 'Please select a tone to generate the introduction.',
    };
  }

  try {
    const result = await generateAboutUsIntro({
      businessDescription: businessDescriptionForAI,
      tone: tone,
    });
    return { introParagraph: result.introParagraph };
  } catch (error) {
    console.error('Error generating intro:', error);
    return {
      introParagraph: 'Sorry, we encountered an error while generating the introduction. Please try again.',
    };
  }
}
