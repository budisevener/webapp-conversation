import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'POC Web APP RAG v0.1',
  description: 'POC untuk web APP RAG',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
}

export const isShowPrompt = true
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

export const TONE_LIST = [
  {
    id: 1,
    name: 'Creative',
    config: {
      temperature: 0.8,
      top_p: 0.9,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    },
  },
  {
    id: 2,
    name: 'Balanced',
    config: {
      temperature: 0.5,
      top_p: 0.85,
      presence_penalty: 0.2,
      frequency_penalty: 0.3,
    },
  },
  {
    id: 3,
    name: 'Precise',
    config: {
      temperature: 0.2,
      top_p: 0.75,
      presence_penalty: 0.5,
      frequency_penalty: 0.5,
    },
  },
  {
    id: 4,
    name: 'Custom',
  },
]

