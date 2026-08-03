Build a premium professional personal portfolio website using Vite, with a polished production-ready architecture and a strong focus on performance, clarity, and credibility.

Project goal:
Create a modern personal website that presents me as a serious professional, not a template-based student profile. The website must feel custom-built, elegant, and trustworthy. It should showcase my identity, background, skills, projects, experience, achievements, research, and a small AI chatbot that answers questions about me.

Core stack and deployment:

- Frontend: Vite + React + TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion and subtle CSS motion where appropriate
- Deployment: Cloudflare Pages for the frontend
- Backend/API: Render for any server-side routes, chatbot proxy, or secure data handling
- AI chatbot: Groq API
- Use modern development best practices, clean architecture, and modular components

Primary design direction:

- Visual style: premium, minimal, professional, futuristic, clean
- Do not use playful, flashy, or overly experimental design
- No emojis anywhere in the website
- Use only professional logos and official brand marks where appropriate
- Do not include any content that feels AI-generated, generic, verbose, or cliché
- The writing should sound human, confident, concise, and specific
- Avoid stock “template” language such as “passionate,” “results-driven,” or “innovative” unless it is naturally supported by the content
- The website should feel like a high-end personal brand and portfolio, not a classroom project

Brand tone:

- Calm
- Intelligent
- Confident
- Technical
- Human
- Clean
- Direct
- Professional

Website structure:

1. Hero section

   - Full-screen intro
   - My name prominently displayed
   - A strong one-line positioning statement
   - A short supporting paragraph
   - Primary CTA buttons such as View Work, About Me, Contact
   - Subtle motion and polished background treatment
2. About section

   - A concise personal summary
   - Who I am
   - What I build
   - What I care about professionally
   - Keep it readable and specific
3. Experience / Roles section

   - Display professional and academic roles in a timeline or stacked cards
   - Show role title, organization, duration, and a short summary
   - Keep the presentation refined and easy to scan
4. Projects section

   - Showcase major projects with strong visual cards
   - Each project card should include:
     - title
     - short summary
     - tech stack
     - impact
     - optional links or demo indicators
   - The copy must sound original and human, not generated
5. Achievements section

   - Show certifications, awards, recognitions, hackathon results, and major milestones
   - Present them in a clean grid or timeline
   - Use official logos only where appropriate and available
6. Skills section

   - Organize skills into logical groups such as:
     - AI / ML
     - Web Development
     - IoT / Embedded
     - Research
     - Leadership
     - Tools
   - Display them in a refined, professional layout
7. Research / Writing section

   - If relevant, show research themes, publications, articles, or technical exploration
   - Keep it sophisticated and not cluttered
8. AI chatbot section

   - Add a small embedded chatbot powered by Groq
   - The chatbot should answer questions about me only
   - It must use curated profile data, not hallucinate
   - It should be limited to:
     - my background
     - my projects
     - my skills
     - my experience
     - my achievements
     - my research
     - my contact info
   - If asked something outside that scope, it should respond politely that it only answers questions about me
   - The chatbot should be small, elegant, and integrated into the website design without dominating it
9. Contact section

   - Simple, elegant contact form or contact links
   - Social links with professional icons only
   - Clean footer with copyright and minimal text

Content requirements:

- Use the real profile information provided to you
- Write the copy in a natural human voice
- Do not sound generic or overly polished in a fake way
- Do not invent achievements, employers, degrees, dates, or project claims
- If any detail is unclear, use placeholders clearly marked for later replacement
- Keep all text concise, specific, and professional
- Avoid anything that looks AI-generated or templated

Chatbot requirements:

- Use Groq API securely through a backend layer on Render
- Do not expose API keys in the frontend
- The chatbot should have:
  - a small message window
  - a text input
  - send button
  - loading state
  - helpful error handling
  - conversation memory within the session
- The chatbot should be prompted to answer only using approved personal profile information
- It should refuse unsupported questions gracefully
- It should feel integrated, not like a separate widget

UI/UX requirements:

- Fully responsive across desktop, tablet, and mobile
- Strong spacing and hierarchy
- Smooth scroll behavior
- Subtle hover states
- Professional iconography only
- High contrast and excellent readability
- Accessibility-friendly colors and semantic structure
- Fast load time and optimized assets
- No clutter
- No fake animations or excessive motion
- Motion should feel restrained and premium

Visual system:

- Prefer a neutral premium palette
- Use dark or light mode only if it supports the overall brand
- If using dark mode, make it refined and modern, not neon-heavy
- Use subtle gradients, soft borders, glass effects only where appropriate
- Use official brand logos sparingly and consistently
- Avoid decorative elements that feel trendy for the sake of trend

Technical architecture:

- Use component-based structure
- Create reusable sections, cards, buttons, badges, and layout wrappers
- Separate data from UI where possible
- Keep the code clean and maintainable
- Add environment variable support for chatbot keys and backend URLs
- Provide a clear project folder structure
- Include setup instructions, build instructions, and deployment notes
- Make sure the final code is ready to run

Important constraints:

- No emojis
- No generic AI style
- No filler text
- No fake testimonials
- No invented logos
- No clutter
- No overdesigned gimmicks
- No “looking forward to connecting” type filler unless used naturally
- No obviously machine-written marketing copy

Deliverables:

- Full Vite project code
- Clean folder structure
- All page sections implemented
- Groq chatbot integration
- Responsive design
- Deployment-ready configuration for Cloudflare Pages and Render
- Clear instructions for setup and launch

Success criteria:

- The website looks premium and professional
- The content feels authentic and human
- The chatbot answers questions about me correctly
- The project is production-ready
- The design feels custom, not generated from a template
- The website represents me as a serious builder, researcher, and professional

Before coding, first organize the content into:

- brand message
- section structure
- component map
- data model
- chatbot scope
- deployment architecture

Then generate the full implementation in Vite with clean, maintainable code.
