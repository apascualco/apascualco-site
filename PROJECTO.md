# PROJECTO - apascualco.site

Portfolio personal y blog técnico construido con **Astro 5.13.4**.

---

## Tecnologías Principales

| Tecnología         | Uso                           |
| ------------------ | ----------------------------- |
| **Astro**          | Framework principal           |
| **MDX**            | Blog posts con Markdown + JSX |
| **TypeScript**     | Tipado estricto               |
| **Sharp**          | Optimización de imágenes      |
| **GitHub Actions** | CI/CD hacia GitHub Pages      |

---

## Estructura del Proyecto

```
src/
├── assets/          # Imágenes procesadas
├── components/      # Componentes reutilizables
│   ├── BaseHead.astro      # SEO y metadatos
│   ├── Header.astro        # Navegación
│   ├── Footer.astro        # Pie de página
│   ├── ThemeToggle.astro   # Tema claro/oscuro
│   ├── LanguageToggle.astro# ES/EN toggle
│   ├── PostTable.astro     # Grid de posts
│   └── Button.astro        # Botón reutilizable
├── content/blog/    # Posts en MDX
├── layouts/         # Plantillas de página
├── pages/           # Rutas dinámicas
└── styles/          # CSS global
```

---

## Funcionalidades Clave

1. **Soporte Bilingüe (ES/EN)** - Toggle de idioma con persistencia en localStorage
2. **Tema Claro/Oscuro** - Detección de preferencia del sistema
3. **Blog con MDX** - Posts con frontmatter validado (Zod schema)
4. **SEO Optimizado** - Sitemap, RSS, Open Graph, Twitter Cards
5. **Diseño Responsive** - Mobile-first con breakpoints a 780px y 560px

---

## Contenido Actual

- **2 posts de blog**: `disonancia-cognitiva.mdx` y `proximidad-semantica.mdx`
- **Páginas About/CV** en español e inglés
- **CV descargable** en `/public/download/resume.pdf`

---

## Deploy

- **Branch principal**: `main`
- **Branch actual**: `movile-cmp`
- **Hosting**: GitHub Pages vía `withastro/action@v2`
- **URL**: `https://www.apascualco.com`

---

## Sistema de Estilos

Usa CSS custom properties para theming:

- Tema oscuro como default
- Fuentes: `ui-monospace` y Atkinson Hyperlegible
- Max-width: 1021px centrado

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo (localhost:4321)
npm run build    # Build de producción
npm run preview  # Preview del build
```

---

## Schema de Blog Posts

Campos del frontmatter validados con Zod:

| Campo         | Tipo         | Requerido           |
| ------------- | ------------ | ------------------- |
| `title`       | string       | Sí                  |
| `description` | string       | Sí                  |
| `pubDate`     | date         | Sí                  |
| `updatedDate` | date         | No                  |
| `heroImage`   | image        | No                  |
| `topic`       | string       | No                  |
| `tags`        | array        | No                  |
| `draft`       | boolean      | No (default: false) |
| `lang`        | "es" \| "en" | No (default: "es")  |
