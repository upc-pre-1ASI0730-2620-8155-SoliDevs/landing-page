# Tri-Aid — Landing Page

Landing Page del modelo de negocio **Tri-Aid** (plataforma de triaje digital) de **SoliDevs**.
Curso **1ASI0730 – Aplicaciones Web** — UPC, Ciclo 2026-20.

## Tech stack

- HTML5 + CSS3 + JavaScript (vanilla, sin frameworks)
- Diseño basado en **Material Design** (elevación, esquinas, tipografía Roboto, Material Symbols)
- **i18n**: English (`en-US`, por defecto) y Latin American Spanish (`es-419`) con selector de idioma
- **Accesibilidad (a11y)**: HTML semántico, atributos WAI-ARIA, skip-link, `aria-pressed` en el selector de idioma, `aria-expanded` en el menú móvil, contraste y `prefers-reduced-motion`

## Estructura

```
landing-page/
├── index.html        # Landing completa (hero, about, features, how it works, team, contact)
├── terms.html        # Términos y condiciones (enlazado en el footer)
├── css/styles.css    # Estilos Material-inspired, responsive y a11y
├── js/i18n.js        # Diccionario EN / ES-419
├── js/main.js        # Navegación, i18n, reveal on scroll, año dinámico
└── assets/           # logo.svg (identidad Tri-Aid)
```

## Ejecutar

```bash
# Opción 1: abrir directamente
open index.html

# Opción 2: servir localmente
npx serve .
```

## Version control workflow

- **GitFlow**: `main` (releases) / `develop` (integración) / `feature/*`
- **Conventional Commits** + **Semantic Versioning**
