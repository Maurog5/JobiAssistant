# Jobi Assistant 🚀

> *"Mi misión es poner el poder de la IA en manos de las personas, no solo de las empresas. Herramientas inteligentes para potenciar tu talento."*
>
> *"My mission is to put the power of AI in the hands of people, not just corporations. Intelligent tools to empower your talent."*

Una herramienta de IA de código abierto, gratuita y sin registros para generar materiales de postulación laboral personalizados en segundos: mensajes de LinkedIn, presentaciones cortas y cartas de presentación completas.

**Tecnologías:** Angular 17 · Bootstrap 5 · Groq AI (LLaMA 3.3 70B)

🌐 **Demo en vivo:** [https://jobiassistant.com](https://jobiassistant.com)
⭐ **Dale una estrella a este repo** si te ayudó a conseguir tu próximo Jobi!

---

## Características principales

* 🌐 **Multilingüe** — Español e Inglés (fácil de extender).
* 🤖 **Potenciado por IA** — Usa LLaMA 3.3 70B de Groq, optimizado para búsqueda de empleo.
* 🔑 **Privacidad primero** — Tu API Key va directo a Groq; nada se guarda en servidores.
* 📋 **3 Resultados en 1** — Mensaje para LinkedIn, Pitch corto y Carta de presentación.
* 📱 **Responsive** — Diseño con Bootstrap 5, funciona en cualquier dispositivo.
* 🔓 **Código Abierto** — Haz un fork, personalízalo y hazlo tuyo.

---

## Cómo empezar (Fork & Run)

### 1. Haz un Fork del repositorio
Haz clic en el botón **Fork** arriba a la derecha en GitHub.

### 2. Clona e instala
```bash
git clone https://github.com/Maurog5/JobiAssistant.git
cd JobiAssistant
npm install
3. Configura tu API Key (Opcional)
Bash
cp src/environments/environment.example.ts src/environments/environment.ts
Edita environment.ts y añade tu clave de Groq, o ingrésala directamente en la web.

Estructura del Proyecto
Plaintext
src/
├── app/
│   ├── components/
│   │   ├── navbar/         # Navegación + selector de idioma
│   │   ├── jobi-form/      # Formulario de entrada
│   │   └── results/        # Resultados generados con pestañas
│   └── services/
│       ├── groq.service.ts # Conexión con API + Prompt del sistema
│       └── i18n.service.ts # Servicio de traducción (Signals)
└── locale/
    ├── messages.en.json    # Textos en Inglés
    └── messages.es.json    # Textos en Español
Contribuir
¡Las pull requests son bienvenidas! Ideas para mejorar:

Añadir más idiomas (Italiano, Francés, Portugués...).

Añadir un formateador/limpiador de CV.

Exportar los resultados a PDF o modo oscuro.

Licencia
Licencia MIT — libre para usar, modificar y distribuir.
Creado por Mauro Gatica — Diseñado para que todos puedan postularse con confianza.
