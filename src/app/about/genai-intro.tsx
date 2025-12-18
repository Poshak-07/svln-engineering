'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { generateIntroAction } from './actions';
import { Sparkles, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const initialState = {
  introParagraph: "Use the controls above to generate a custom introduction for our company. Select a tone and let our AI craft a unique message for you!",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Intro
        </>
      )}
    </Button>
  );
}

export function GenAIIntro() {
  const [state, formAction] = useFormState(generateIntroAction, initialState);
  const [tone, setTone] = useState('Professional');

  return (
    <div className="mt-4 space-y-4">
      <form action={formAction} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg bg-secondary">
        <label htmlFor="tone" className="font-medium text-sm">Select a tone:</label>
        <Select name="tone" value={tone} onValueChange={setTone}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Professional">Professional</SelectItem>
            <SelectItem value="Friendly">Friendly</SelectItem>
            <SelectItem value="Formal">Formal</SelectItem>
          </SelectContent>
        </Select>
        <SubmitButton />
      </form>
      <Card className="min-h-[100px]">
        <CardContent className="p-6">
          <p className="text-muted-foreground italic">
            {state?.introParagraph}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
