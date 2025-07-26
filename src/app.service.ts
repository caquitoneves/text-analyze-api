import { Injectable } from '@nestjs/common';
import { franc } from 'franc-min';
const langs = require('langs');

@Injectable()
export class AppService {
  analyzeText(text: string) {
    console.log('[analyzeText] text recebido:', text);
    if (!text || typeof text !== 'string') {
      return { error: 'O campo text é obrigatório e deve ser uma string.' };
    }
    const cleanedText = text.trim();
    const words = cleanedText.match(/\b[\wÀ-ÿ']+\b/g) || [];
    const sentences = cleanedText.match(/[^.!?]+[.!?]+/g) || [];

    const wordCount = words.length;
    const charCount = cleanedText.length;
    const sentenceCount = sentences.length;

    // Frequência de palavras
    const wordFrequency: Record<string, number> = {};
    words.forEach(word => {
      const lower = word.toLowerCase();
      wordFrequency[lower] = (wordFrequency[lower] || 0) + 1;
    });

    const topWords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word, count]) => ({ word, count }));

    // Frases longas
    const longSentences = sentences.filter(s => s.length > 100);

    // Detecção automática de idioma
    let language = 'Desconhecido';
    try {
      const langCode = franc(cleanedText);
      if (langCode !== 'und') {
        const langData = langs.where('3', langCode);
        if (langData && langData.name) {
          language = langData.name;
        }
      }
    } catch (e) {
      language = 'Desconhecido';
    }

    return {
      language,
      wordCount,
      charCount,
      sentenceCount,
      topWords,
      longSentences,
    };
  }
}
