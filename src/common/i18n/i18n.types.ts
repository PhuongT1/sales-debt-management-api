export type AppLocale = 'vi' | 'en';

export const DEFAULT_LOCALE: AppLocale = 'vi';
export const SUPPORTED_LOCALES: AppLocale[] = ['vi', 'en'];

/**
 * Parses the standard HTTP Accept-Language header to determine the preferred supported locale.
 * Supports values like "en", "en-US", "vi", "vi-VN;q=0.9,en;q=0.8", etc.
 */
export function parseAcceptLanguage(headerValue?: string | null): AppLocale {
  if (!headerValue || typeof headerValue !== 'string') {
    return DEFAULT_LOCALE;
  }

  const rawLanguages = headerValue
    .split(',')
    .map((item) => {
      const [langPart, qPart] = item.trim().split(';');
      const q = qPart ? parseFloat(qPart.replace('q=', '').trim()) : 1.0;
      return {
        code: langPart.trim().toLowerCase(),
        q: isNaN(q) ? 1.0 : q,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of rawLanguages) {
    if (code.startsWith('en')) {
      return 'en';
    }
    if (code.startsWith('vi')) {
      return 'vi';
    }
  }

  return DEFAULT_LOCALE;
}
