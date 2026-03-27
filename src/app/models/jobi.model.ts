export interface jobinput {
  cv: string;
  jobiDescription: string;
  position: string;
  company: string;
  apiKey: string;
}

export interface GeneratedMaterials {
  linkedin: string;
  pitch: string;
  coverLetter: string;
}

export type GenerationStatus = 'idle' | 'loading' | 'done' | 'error';
