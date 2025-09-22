# retp-ecommer (single-module)

Repositorio limpio y funcional listo para Netlify. **Sin submódulos**, **sin `.vscode`**, todo dentro de un único módulo.

## Estructura
- `site/` → sitio estático completo (HTML/CSS/JS/activos).

## Deploy en Netlify (sin build)
1. Crear un sitio desde Git o arrastrar carpeta `site/` a **Deploys → Drag & drop**.
2. Si lo conectás a Git, en **Site settings → Build & deploy**:
   - **Build command**: *(vacío)*
   - **Publish directory**: `site`

> Alternativa: puedes servirlo con cualquier hosting estático.

## Desarrollo local
```bash
# con Python 3
cd site
python3 -m http.server 5173
# Abrir http://localhost:5173
```

