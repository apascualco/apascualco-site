# Plan de Mejoras para apascualco.site

## Fase 1: Configuracion y Tooling (Fundamentos)

- [x] **1.1 Configurar ESLint**
  - [x] Instalar `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-plugin-astro`
  - [x] Crear `eslint.config.js` (flat config para ESLint 9+) con reglas para Astro y TypeScript
  - [x] Añadir scripts `lint` y `lint:fix` en package.json

- [x] **1.2 Configurar Prettier**
  - [x] Instalar `prettier`, `prettier-plugin-astro`
  - [x] Crear `.prettierrc` con configuracion (tabs, quotes, etc)
  - [x] Añadir scripts `format` y `format:check`

- [x] **1.3 Añadir pre-commit hooks**
  - [x] Instalar `husky` y `lint-staged`
  - [x] Configurar hook pre-commit que ejecute lint y format automaticamente antes de cada commit

- [x] **1.4 Mejorar tsconfig.json**
  - [x] Añadir `baseUrl`, path mappings (`@components/*`, `@layouts/*`, `@assets/*`, `@styles/*`, `@content/*`)
  - [x] Añadir `skipLibCheck`
  - [x] Añadir `node_modules` a exclude

---

## Fase 2: Configuracion de Astro (Features sin usar)

- [x] **2.1 Habilitar sitemap**
  - [x] Añadir `@astrojs/sitemap` en `astro.config.mjs` integrations array
  - [x] Verificado: genera `sitemap-index.xml` y `sitemap-0.xml`

- [x] **2.2 Integrar optimizacion de imagenes**
  - [x] Sharp ya activo por defecto en Astro 5
  - [x] Añadido `experimentalLayout: 'responsive'` para imagenes responsivas

- [x] **2.3 Configurar prefetch**
  - [x] Añadir `prefetch: { prefetchAll: true }` en astro.config.mjs
  - [x] Pre-carga automatica de links para navegacion mas rapida

---

## Fase 3: SEO y Accesibilidad

- [x] **3.1 Añadir hreflang**
  - [x] En `BaseHead.astro`, generar tags `<link rel="alternate" hreflang="es/en">`
  - [x] Añadido `x-default` apuntando a ES

- [x] **3.2 Implementar JSON-LD**
  - [x] Crear componente `StructuredData.astro`
  - [x] Añadir schema.org para: `WebSite` (global), `BlogPosting` (posts)

- [x] **3.3 Mejorar alt text**
  - [x] Auditar todas las imagenes en componentes y posts
  - [x] Corregido alt vacio en heroImage de BlogPost.astro

- [x] **3.4 Añadir skip links**
  - [x] Crear enlace "Saltar al contenido" oculto al inicio de `Header.astro`
  - [x] Añadido `id="main-content"` a todos los `<main>`

- [x] **3.5 Corregir aria en LanguageToggle**
  - [x] Añadir `aria-current="true"` al idioma activo dinámicamente
  - [x] Detectar idioma desde URL y actualizar estado

---

## Fase 4: Internacionalizacion (i18n)

- [x] **4.1 Crear sistema de traducciones**
  - [x] Crear archivo `src/i18n/translations.ts` con tipos y helper `useTranslations`
  - [x] Actualizar Header, PostTable y BlogPost para usar traducciones centralizadas

- [x] **4.2 Unificar paginas About**
  - [x] Crear `src/i18n/about.ts` con contenido estructurado por idioma
  - [x] Crear `src/pages/[lang]/about.astro` con ruta dinámica
  - [x] Actualizar `AboutCV.astro` para recibir props `lang` y `description`

- [x] **4.3 Rutas de blog por idioma**
  - [x] Crear `src/pages/[lang]/blog/[...slug].astro` con getStaticPaths
  - [x] Actualizar PostTable para usar URLs con prefijo de idioma
  - [x] Eliminar antigua ruta `/blog/[...slug]`

---

## Fase 5: Mejoras de Codigo

- [x] **5.1 Corregir typo CSS**
  - [x] En `global.css`, cambiar `--boder-color` a `--border-color`

- [x] **5.2 Completar AboutCV.astro**
  - [x] Pasar prop `lang` correctamente al layout
  - [x] Corregido description hardcodeado "DE"

- [x] **5.3 Limpiar TODO comments**
  - [x] Revisar `Button.astro` y otros archivos con comentarios TODO pendientes
  - [x] Resolver o eliminar los TODOs

- [ ] **5.4 Mejorar consistencia de assets**
  - [ ] Mover todas las imagenes a `src/assets/` (procesadas por Astro)
  - [ ] O mover a `public/` (estaticas), pero no mezclar

---

## Fase 6: Funcionalidades del Blog

- [ ] **6.1 Añadir paginacion**
  - [ ] En paginas de listado, implementar paginacion cuando haya >10 posts
  - [ ] Crear componente `Pagination.astro`

- [ ] **6.2 Implementar filtro por tags**
  - [ ] Crear pagina `/tags/[tag].astro` que liste posts con ese tag
  - [ ] Añadir cloud de tags en sidebar o home

- [ ] **6.3 Tiempo de lectura**
  - [ ] Calcular reading time basado en word count (~200 palabras/min)
  - [ ] Mostrar en `PostTable.astro` y en el post individual

- [ ] **6.4 Tabla de contenidos**
  - [ ] Crear componente `TableOfContents.astro`
  - [ ] Extraer headings del MDX y generar nav con anchors

- [ ] **6.5 Posts relacionados**
  - [ ] Al final de cada post, mostrar 2-3 posts con tags similares

---

## Fase 7: Performance y Monitoreo

- [ ] **7.1 Añadir analytics**
  - [ ] Integrar Plausible o Fathom (privacy-friendly)
  - [ ] Crear componente `Analytics.astro` que solo cargue en produccion

- [ ] **7.2 Configurar Web Vitals**
  - [ ] Añadir medicion de Core Web Vitals
  - [ ] Reportar a analytics o console

- [ ] **7.3 Lazy loading de imagenes**
  - [ ] Verificar que todas las imagenes usen `loading="lazy"`
  - [ ] Excepto las above-the-fold (hero, avatar)

- [ ] **7.4 Service Worker (PWA)**
  - [ ] Opcional: añadir manifest.json
  - [ ] Añadir service worker para funcionalidad offline basica

---

## Fase 8: Testing y CI/CD

- [ ] **8.1 Setup de tests**
  - [ ] Instalar Vitest
  - [ ] Crear tests basicos para utilidades (FormattedDate, etc)

- [ ] **8.2 Tests E2E**
  - [ ] Instalar Playwright
  - [ ] Crear tests de navegacion basica, cambio de tema, cambio de idioma

- [ ] **8.3 Mejorar GitHub Actions**
  - [ ] Añadir job de lint y tests antes del deploy
  - [ ] Bloquear deploy si fallan

- [ ] **8.4 Lighthouse CI**
  - [ ] Añadir check de Lighthouse en CI
  - [ ] Detectar regresiones de performance/accesibilidad

---

## Resumen de Prioridades

### P0 (Urgente)

- [x] 1.1 Configurar ESLint
- [x] 1.2 Configurar Prettier
- [x] 2.1 Habilitar sitemap
- [x] 2.2 Integrar optimizacion de imagenes
- [x] 5.1 Corregir typo CSS

### P1 (Alta)

- [x] 3.1 Añadir hreflang
- [x] 3.2 Implementar JSON-LD
- [x] 4.1 Crear sistema de traducciones
- [x] 4.2 Unificar paginas About

### P2 (Media)

- [ ] 6.1 Añadir paginacion
- [ ] 6.2 Implementar filtro por tags
- [ ] 6.3 Tiempo de lectura
- [ ] 6.4 Tabla de contenidos
- [x] 5.2 Completar AboutCV.astro
- [ ] 5.3 Limpiar TODO comments
- [ ] 5.4 Mejorar consistencia de assets

### P3 (Baja)

- [ ] 7.1 Añadir analytics
- [ ] 7.2 Configurar Web Vitals
- [ ] 7.3 Lazy loading de imagenes
- [ ] 7.4 Service Worker (PWA)
- [ ] 8.1 Setup de tests
- [ ] 8.2 Tests E2E
- [ ] 8.3 Mejorar GitHub Actions
- [ ] 8.4 Lighthouse CI
