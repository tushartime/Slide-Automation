import OpenAi from 'openai'

// Initialize OpenAI only when an API key is available. This prevents crashes
// in development environments where OpenAI is not configured.
export const openai: OpenAi | null = process.env.OPENAI_API_KEY
  ? new OpenAi({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null