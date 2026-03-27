Jobi Assistant 🚀
"Mi misión es poner el poder de la IA en manos de las personas, no solo de las empresas. Herramientas inteligentes para potenciar tu talento."

"My mission is to put the power of AI in the hands of people, not just corporations. Intelligent tools to empower your talent."

Una herramienta de IA de código abierto, gratuita y sin registros para generar materiales de postulación laboral personalizados en segundos: mensajes de LinkedIn, presentaciones cortas y cartas de presentación completas.

Tecnologías: Angular 17 · Bootstrap 5 · Groq AI (LLaMA 3.3 70B)

🌐 Demo en vivo: [https://www.google.com/search?q=tu-url-de-vercel-aqui.com]
⭐ Dale una estrella a este repo si te ayudó a conseguir tu próximo Jobi!

Características principales
🌐 Multilingüe — Español e Inglés (fácil de extender a otros idiomas).

🤖 Potenciado por IA — Usa LLaMA 3.3 70B de Groq, con un prompt optimizado exclusivamente para búsqueda de empleo.

🔑 Privacidad primero — Tu API Key va directo a Groq; nada se guarda en ningún servidor.

📋 3 Resultados en 1 — Mensaje para LinkedIn, Pitch corto y Carta de presentación.

📱 Responsive — Diseño con Bootstrap 5, funciona en cualquier dispositivo.

🔓 Código Abierto — Haz un fork, personalízalo y hazlo tuyo.

Cómo empezar (Fork & Run)
1. Haz un Fork del repositorio
Haz clic en el botón Fork arriba a la derecha en GitHub.

2. Clona e instala
Bash
git clone https://github.com/TU_USUARIO/jobi-assistant.git
cd jobi-assistant
npm install
3. Configura tu API Key (Opcional)
Copia el archivo de ejemplo de ambiente:

Bash
cp src/environments/environment.example.ts src/environments/environment.ts
Edita environment.ts y añade tu clave de Groq, o déjala vacía para ingresarla directamente en la web cada vez que la uses.
Consigue tu clave gratis en: https://console.groq.com

Cómo usarlo
Pega tu CV en texto plano.

Pega la descripción del empleo.

Ingresa el nombre del puesto y la empresa (recomendado).

Ingresa tu Groq API Key.

Haz clic en Generate — obtén 3 textos listos para usar.

La IA detecta automáticamente el idioma de la oferta y responde en ese mismo idioma.

Estructura del Proyecto
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

Exportar los resultados a PDF.

Modo oscuro (Dark Mode).

Licencia
Licencia MIT — libre para usar, modificar y distribuir.

Creado por Mauro Gatica — Diseñado para que todos puedan postularse con confianza.
