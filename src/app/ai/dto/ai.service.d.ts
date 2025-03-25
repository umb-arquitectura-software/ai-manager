export interface AiService {
    generateContent(body: GenerateContent): Promise<any>;
}