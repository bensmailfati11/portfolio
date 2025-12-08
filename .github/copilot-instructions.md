# Copilot Instructions

- Project: single-page portfolio built with React 18 + Vite + Tailwind; uses framer-motion for section animation and @react-three/fiber/@react-three/drei for 3D canvases.
- Entry: `src/main.jsx` mounts `App` in `React.StrictMode`; routing is a single `BrowserRouter` (no nested routes) with future flags enabled.
- Layout: `src/App.jsx` stitches sections (`Navbar`, `Hero`, `About`, `Experience`, `Tech`, `Works`, `Contact`, `StarsCanvas`). Each content section is usually wrapped via `SectionWrapper(Component, id)` to add padding, staggered animation, and hash anchor spans.
- Shared styles: `src/styles.js` exports Tailwind class strings (`padding`, `sectionHeadText`, etc.); prefer reusing them instead of hardcoding spacing/headings.
- Animations: motion variants live in `src/utils/motion.js` (`fadeIn`, `textVariant`, `slideIn`, `staggerContainer`, etc.). `SectionWrapper` applies `staggerContainer()` to its section; keep variants consistent when adding cards/sections.
- Data-first content: `src/constants/index.js` holds `navLinks`, `services`, `technologies`, `experiences`, and `projects`. Extend these arrays to surface new items; components map directly over them.
- Navbar: uses `navLinks` anchors and a “Resume” button that opens `/Resume.pdf` from `public`. Ensure that file exists when changing the resume link.
- Hero: combines `Typewriter` text and `ComputersCanvas` (3D laptop). `ComputersCanvas` loads `public/desktop_pc/scene.gltf` with `DRACOLoader`; keep relative model paths stable.
- Tech: renders `BallCanvas` for each `technologies` item; add icons to `src/assets` and export via `src/assets/index.js` before referencing.
- Experience: `VerticalTimeline` cards driven by `experiences`; icons come from `assets/company/*` with background color `iconBg`.
- Projects: `Works.jsx` maps `projects` to Tilt cards; `source_code_link` opens in a new tab via `window.open`.
- Contact: EmailJS form with simple validation (`Contact.jsx`). Update `service_r2i0by4`, `template_mf5x3bh`, and public key `p-gXzzyvEhPaJ0XA-` together if rotating credentials. Confirmation/error messages stored in component state.
- 3D canvases: `components/canvas/*` use `Suspense` + `CanvasLoader` fallback. `EarthCanvas` loads `public/planet/scene.gltf`; `StarsCanvas` renders procedural star field (1500 points) behind sections.
- Styling: Tailwind JIT with custom colors/background in `tailwind.config.js` (`bg-primary`, `bg-hero-pattern`). Global gradients and utility classes live in `src/index.css`; keep `hash-span` offset for in-page anchors.
- Assets: central export hub in `src/assets/index.js`; add new images there and consume via `constants` or components to avoid scattered import paths.
- Lint/build: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint` (eslint across `src`).
- Testing: no automated tests present; manual validation through the Vite dev server and interactive pages.
- Performance: many canvases use `frameloop="demand"` and disabled zoom to reduce GPU load. Preserve `Suspense` fallback and `Preload` to avoid blank screens during model fetch.
- Accessibility: anchored navigation relies on IDs from `SectionWrapper`; keep them unique and stable when adding sections.
- Deployment: site expects assets/models under `public/*` with paths used directly in code (e.g., `./desktop_pc/scene.gltf`).

When updating or adding features, follow existing data-driven patterns (update `constants` + `assets`), reuse shared styles/variants, and keep model paths and EmailJS identifiers in sync with `public` assets and service settings.