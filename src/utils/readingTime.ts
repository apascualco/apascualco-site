const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  const text = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/import\s+.*?from\s+['"].*?['"]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[#*_~[\](){}|]/g, '')
    .replace(/https?:\/\/\S+/g, '');

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number, lang: 'es' | 'en'): string {
  if (lang === 'es') {
    return `${minutes} min`;
  }
  return `${minutes} min`;
}
