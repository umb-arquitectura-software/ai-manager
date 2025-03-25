import { ConfigProps } from '../interfaces/config';
export const config = (): ConfigProps => ({
  gcp: {
    apiKeyAi: process.env.GCP_API_KEY_AI,
  }
});