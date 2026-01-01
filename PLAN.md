# PLAN - Responsive Design

## Estado Actual

### Problemas Identificados

| Archivo          | Problema                                                              | Severidad   |
| ---------------- | --------------------------------------------------------------------- | ----------- |
| `global.css:49`  | `min-width: 1020;` sin unidad y fuerza ancho mínimo que rompe móvil   | **Crítico** |
| `Header.astro`   | Sin media queries, navegación no se adapta a móvil                    | **Alto**    |
| `BlogPost.astro` | Layout `.title` con flex no se reorganiza en pantallas pequeñas       | **Medio**   |
| Breakpoints      | Inconsistentes entre componentes (solo PostTable tiene media queries) | **Medio**   |

### Lo que Funciona

- `PostTable.astro`: Media queries en 780px y 560px
- Headings usan `clamp()` para escalar
- Body: `width: min(90%, 1021px)` es responsive
- Imágenes con `max-width: 100%`

---

## Breakpoints Propuestos

```
Desktop:  > 780px
Tablet:   560px - 780px
Mobile:   < 560px
```

---

## Tareas de Implementación

### 1. Corregir `global.css`

**Archivo:** `src/styles/global.css`

- [x] **1.1** Eliminar `min-width: 1020;` (línea 49)
- [x] **1.2** Verificar que no hay otros valores sin unidades

### 2. Header Responsive

**Archivo:** `src/components/Header.astro`

- [x] **2.1** Reducir font-size del h1 en móvil
- [x] **2.2** Reorganizar `.header-grid` para móvil (avatar arriba o inline)
- [x] **2.3** Crear menú hamburguesa para navegación < 560px
- [ ] **2.4** Ocultar iconos sociales en menú colapsable o reducir tamaño
- [ ] **2.5** Ajustar espaciado de `nav` y `.header-social-config`

**Estructura propuesta móvil:**

```
┌─────────────────────────────┐
│ [☰]  apascualco   [avatar]  │
│                             │
│ Menú desplegable:           │
│ - About & CV                │
│ - [icons] [theme] [lang]    │
└─────────────────────────────┘
```

### 3. BlogPost Layout Responsive

**Archivo:** `src/layouts/BlogPost.astro`

- [ ] **3.1** Añadir media query para `.title` < 560px
- [ ] **3.2** Cambiar flex-direction a column en móvil
- [ ] **3.3** Reducir tamaño del bullet en `.description`
- [ ] **3.4** Ajustar imagen hero para móvil

### 4. Componentes Adicionales

**Footer:** `src/components/Footer.astro`

- [ ] **4.1** Verificar que escala bien (parece OK)

**Button:** `src/components/Button.astro`

- [ ] **4.2** Revisar si necesita ajustes de padding en móvil

### 5. Testing

- [ ] **5.1** Chrome DevTools: iPhone SE, iPhone 12, iPad
- [ ] **5.2** Verificar touch targets mínimo 44x44px
- [ ] **5.3** Probar rotación landscape/portrait
- [ ] **5.4** Validar que texto no se corta

---

## Orden de Ejecución

1. **global.css** - Fix crítico primero
2. **Header.astro** - Componente más visible
3. **BlogPost.astro** - Layout de contenido
4. **Testing** - Validar cambios
5. **Ajustes finales** - Iterar según feedback

---

## Media Queries Base

```css
/* Tablet */
@media (max-width: 780px) {
  /* Ajustes intermedios */
}

/* Mobile */
@media (max-width: 560px) {
  /* Layout colapsado */
}
```

---

## Notas

- Mantener consistencia con PostTable.astro que ya usa estos breakpoints
- No romper el tema claro/oscuro existente
- Priorizar legibilidad sobre densidad de información en móvil
