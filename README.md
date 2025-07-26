# 📝 Text Analyzer API

Uma API inteligente para análise de textos, desenvolvida com NestJS. Ideal para portfólio, estudos e aplicações reais!

## 🚀 Funcionalidades
- Detecção automática de idioma
- Estatísticas: contagem de palavras, caracteres, frases e mais
- Extração das palavras mais frequentes
- Identificação de frases longas

## 📦 Tecnologias
- [NestJS](https://nestjs.com/) (Node.js)
- [Axios](https://axios-http.com/)
- [class-validator](https://github.com/typestack/class-validator)

## �️ Como rodar localmente

1. **Clone o projeto:**
   ```bash
   git clone https://github.com/seu-usuario/text-analyzer-api.git
   cd text-analyzer-api
   ```
2. **Instale as dependências:**
   ```bash
   yarn install
   ```
3. **Configure o .env:**
   Crie um arquivo `.env` na raiz se desejar variáveis de ambiente personalizadas.
4. **Inicie a API:**
   ```bash
   yarn start:dev
   ```

## 🧪 Testando com Postman ou curl

- **Endpoint:** `POST http://localhost:3000/analyze`
- **Body (JSON):**
  ```json
  {
    "text": "A programação é uma das habilidades mais importantes do século. Programar é transformar ideias em realidade."
  }
  ```
- **Resposta esperada:**
  ```json
  {
    "wordCount": 14,
    "charCount": 108,
    "sentenceCount": 2,
    "topWords": [
      { "word": "a", "count": 1 },
      { "word": "programação", "count": 1 },
      { "word": "uma", "count": 1 },
      { "word": "das", "count": 1 },
      { "word": "habilidades", "count": 1 }
    ],
    "longSentences": []
  }
  ```



## 💡 Dicas
- O projeto aceita facilmente novos endpoints e integrações com outros tipos de análise.
- Ideal para portfólio, entrevistas e demonstrações de análise de texto.

## 👤 Autor
- [Caio Neves](https://github.com/caquitoneves)

---