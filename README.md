# Jobi Assistant

> *"My mission is to put the power of AI in the hands of people, not just corporations."*

**Jobi Assistant** is a free, open-source web app that turns your CV and a job posting into three tailored application materials in seconds:

1. a short **LinkedIn message** for the recruiter,
2. a **pitch** for the "tell us about yourself" field of job portals,
3. a complete **cover letter**.

No sign-up, no backend, no stored data.

🌐 **Live demo:** [jobiassistant.com](https://jobiassistant.com)

---

## Features

- **Tailored output** — every text is generated from *your* CV and *that* job offer, never from a generic template.
- **Honest by design** — the prompts forbid inventing skills or experience and ask the model to handle gaps openly.
- **Writes in the job's language** — the output follows the language of the job description.
- **Bilingual UI** — Spanish and English, switchable at runtime (Angular Signals).
- **Bring your own key** — you paste your free Groq API key in the browser; it is sent only to Groq.
- **Responsive** — Bootstrap 5, works on mobile.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Angular 17 (standalone components, Signals), TypeScript |
| UI | Bootstrap 5, Bootstrap Icons |
| AI | Groq API (OpenAI-compatible chat completions), model `openai/gpt-oss-120b` |
| Hosting | Static SPA on Vercel |

## Architecture

Jobi Assistant is a **static single-page app with no backend**.

```
Browser (Angular SPA)
  ├─ JobiFormComponent   → collects CV, job offer and API key
  ├─ GroqService         → builds the prompts and calls the Groq API (3 sequential requests)
  ├─ ResultsComponent    → shows the 3 materials in tabs, ready to copy
  └─ I18nService         → ES/EN translations with Signals
        │
        ▼  HTTPS (Authorization: Bearer <user key>)
   api.groq.com  (LLM)
```

### Why no backend? (privacy and security model)

- The app never stores the CV, the job offer or the API key: there is no server and no database.
- Each user brings their own Groq key ("BYOK"). It is kept in memory only for the current page and sent directly to `api.groq.com`.
- No secret is bundled in the code: `src/environments/environment.ts` ships with an empty `groqApiKey`.
- Trade-off: because the call happens in the browser, the key is visible to the user's own browser (as intended), and a hosted shared key would require a server-side proxy.

### Prompt design

`GroqService` uses one **system prompt** that restricts the model to job-application writing and enforces rules (no invented experience, same language as the offer, no preamble), plus one **task prompt per output** with explicit length and structure constraints (e.g. LinkedIn ≤ 80 words, cover letter in 4 paragraphs, with a paragraph for honest gap handling).

## Getting started

```bash
git clone https://github.com/Maurog5/JobiAssistant.git
cd JobiAssistant
npm install
npm start          # http://localhost:4200
```

Get a free API key at [console.groq.com/keys](https://console.groq.com/keys) and paste it in the form.

Optional: to avoid pasting the key every time in local development, set it in `src/environments/environment.ts` — and never commit a real key.

### Scripts

| Command | Description |
|---|---|
| `npm start` | Dev server |
| `npm run build` | Production build to `dist/` |

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/       # navigation + language switch
│   │   ├── jobi-form/    # input form (CV, job offer, API key)
│   │   ├── results/      # generated materials in tabs
│   │   └── about/        # project mission
│   ├── models/           # TypeScript interfaces
│   └── services/
│       ├── groq.service.ts           # prompts + Groq API calls
│       ├── i18n.service.ts           # translations (Signals)
│       └── pdf-extractor.service.ts  # CV text extraction from PDF
└── locale/               # messages.es.json, messages.en.json
```

## Roadmap

- [ ] Fix and test CV upload from PDF
- [ ] Italian translation
- [ ] Streaming responses
- [ ] Accessibility review (WCAG 2.1 AA)
- [ ] Unit and E2E tests in CI (GitHub Actions)

Contributions are welcome — open an issue or a pull request.

## License

MIT — free to use, modify and distribute. See [LICENSE](src/assets/LICENSE).

## Author

Built by **Mauro Gatica**, Full Stack Developer (Angular · TypeScript · Java/Spring Boot).
[LinkedIn](https://www.linkedin.com/in/maurogatica) · [GitHub](https://github.com/Maurog5)
