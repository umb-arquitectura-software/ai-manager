export interface GenerateContent {
  contents: Content[];
  systemInstruction: string | Part | Content;
  model: 'gemini-1.5-pro';
}

export declare interface Content {
  role: string;
  parts: Part[];
}


export declare type Part = TextPart | FileDataPart;

export declare interface TextPart {
  text: string;
  fileData?: never;
}

export declare interface FileData {
  mimeType: string;
  fileUri: string;
}

export declare interface FileDataPart {
  text?: never;
  fileData: FileData;
}