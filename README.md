# jobi Assistant 🚀

> *"Mi misión es poner el poder de la IA en manos de las personas, no solo de las empresas. Herramientas inteligentes para potenciar tu talento."*
> *"My mission is to put the power of AI in the hands of people, not just corporations. Intelligent tools to empower your talent.."*

An open-source, free, no-signup AI tool to generate tailored jobi application materials in seconds — LinkedIn messages, short pitches, and full cover letters.

**Built with:** Angular 17 · Bootstrap 5 · Groq AI (LLaMA 3.3 70B)

🌐 **Live demo:** [your-deploy-url-here]
⭐ **Star this repo** if it helped you land a jobi!

---

## Features

- 🌐 Multilingual — Spanish & English (easy to extend)
- 🤖 AI-powered — Groq's LLaMA 3.3 70B, optimized prompt for jobi applications only
- 🔑 Privacy first — API key goes directly to Groq, nothing stored anywhere
- 📋 3 outputs — LinkedIn message, short pitch, full cover letter
- 📱 Responsive — Bootstrap 5, works on any device
- 🔓 Open source — fork it, customize it, make it yours

---

## Getting Started (fork & run)

### 1. Fork this repo on GitHub

Click **Fork** at the top right.

### 2. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/jobi-assistant.git
cd jobi-assistant
npm install
```

### 3. Set your API key (optional)

Copy the example environment file:
```bash
cp src/environments/environment.example.ts src/environments/environment.ts
```

Edit `environment.ts` and add your Groq API key, OR leave it empty and enter it directly in the app UI each time.

Get a free key at: https://console.groq.com

### 4. Run locally

```bash
ng serve
```

Open http://localhost:4200

---



## How to use

1. Paste your CV in plain text
2. Paste the jobi description
3. Enter the jobi title and company name (recommended)
4. Enter your Groq API key
5. Click **Generate** — get 3 ready-to-use texts in seconds
6. Copy each one with one click

The AI is tuned to respond ONLY to jobi application requests.
It detects the jobi description language and writes in that language automatically.

---

## Adding a new language

1. Create `src/locale/messages.XX.json` copying `messages.en.json`
2. In `i18n.service.ts`, add `'XX'` to the `Lang` type and import the new JSON
3. Add it to the `TRANSLATIONS` object
4. Add a button in `navbar.component.html`

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/         # Nav + language switcher
│   │   ├── about/          # About / why this exists page
│   │   ├── jobi-form/       # Input form
│   │   └── results/        # Generated materials with tabs
│   ├── models/
│   │   └── jobi.model.ts    # TypeScript interfaces
│   └── services/
│       ├── groq.service.ts # Groq API + optimized system prompt
│       └── i18n.service.ts # Translation service (signals-based)
├── environments/
│   ├── environment.ts          # Your config (gitignored)
│   └── environment.example.ts  # Template for contributors
└── locale/
    ├── messages.en.json
    └── messages.es.json
```

---

## Contributing

Pull requests are welcome. Ideas for contributions:
- Add more languages (Italian, French, Portuguese...)
- Add a CV formatter/cleaner
- Add export to PDF
- Dark mode

---

## License

MIT License — free to use, modify, and distribute.

---

*Created by [Mauro Gatica](https://linkedin.com/in/mauro-gatica-a5aba3163/) — Built so everyone can apply with confidence.*
