# 🚀 Deployment Guide - Alioth Design System

## 📋 Información del Sitio Netlify

```-
✅ Sitio: alioth-design-system
✅ Team: andy2639tds
✅ Site ID: 227b77df-14a0-4d55-a3d5-157b400e8100
✅ URL Production: https://alioth-design-system.netlify.app
✅ Dashboard: https://app.netlify.com/projects/alioth-design-system
```

---

## 🔐 Configuración de Secretos en GitHub

Para que los workflows funcionen, debes agregar estos secretos en tu repositorio:

### Pasos

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Secrets and variables** → **Actions**
3. Click en **New repository secret**
4. Agrega los siguientes secretos:

```-
Nombre: NETLIFY_SITE_ID
Valor: 227b77df-14a0-4d55-a3d5-157b400e8100

Nombre: NETLIFY_AUTH_TOKEN
Valor: nfp_fZdFVdFehqsKhUT2na6Pt9TcaZoYRHbq1ef1
```

---

## 📦 Workflows Configurados

### 1. 🔍 PR Preview Deploy

**Archivo:** `.github/workflows/pr-preview.yml`

**Se ejecuta cuando:**

- Abres un Pull Request a `master`
- Actualizas un PR existente
- Reabres un PR

**Qué hace:**

- ✅ Instala dependencias con pnpm
- ✅ Ejecuta el build de Next.js (exporta a directorio `out`)
- ✅ Despliega a Netlify (deploy preview)
- ✅ Comenta en el PR con la URL del preview

### 2. 🚀 Production Deploy

**Archivo:** `.github/workflows/production-deploy.yml`

**Se ejecuta cuando:**

- Haces push directo a `master`
- Un PR es merged a `master`

**Qué hace:**

- ✅ Instala dependencias con pnpm
- ✅ Ejecuta el build de Next.js (exporta a directorio `out`)
- ✅ Despliega a producción en Netlify
- ✅ Notifica en los logs de GitHub

---

## 🔄 Flujo de Trabajo

```-
┌─────────────────────────────────────────┐
│  Developer abre PR en master           │
└───────────┬─────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│  GitHub Actions: PR Preview Deploy     │
└───────────┬─────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│  Netlify: Deploy Preview generado      │
│  URL: https://deploy-preview-X--        │
│       alioth-design-system.netlify.app  │
└───────────┬─────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│  Bot comenta en PR con URL preview     │
└───────────┬─────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│  PR es aprobado y merged a master      │
└───────────┬─────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│  GitHub Actions: Production Deploy     │
└───────────┬─────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│  Netlify: Deploy a producción          │
│  URL: https://alioth-design-system.    │
│       netlify.app                       │
└─────────────────────────────────────────┘
```

---

## 🛠️ Deploy Manual con Netlify CLI

Si necesitas hacer un deploy manual:

```bash
# Autenticarte (ya hecho)
netlify login

# Build local
pnpm build

# Deploy a producción
netlify deploy --prod --dir=out

# Deploy de prueba
netlify deploy --dir=out
```

---

## 🧪 Testing Local

Antes de hacer un deploy, asegúrate de probar localmente:

```bash
# Instalar dependencias
pnpm install

# Build de producción (exporta a directorio 'out')
pnpm build

# Servir localmente (opcional)
npx http-server out
```

---

## 📝 Configuración de Netlify

### netlify.toml

```toml
[build]
  command = "pnpm install && pnpm build"
  publish = "out"

[context.production]
  command = "pnpm install && pnpm build"

[context.deploy-preview]
  command = "pnpm install && pnpm build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Exporta a directorio estático "out"
};

export default nextConfig;
```

**Nota:** `output: "export"` en Next.js genera una build completamente estática (sin servidor).

---

## 📂 Directorios de Build

- **Local:** `./out/` - Directorio generado por `pnpm build` (next export)
- **Netlify:** El archivo `netlify.toml` le indica a Netlify que publique desde `out/`
- **Archivos estáticos:** Todo se exporta como HTML/CSS/JS estático

---

## ❓ Troubleshooting

### Build falla en Netlify

1. Verifica que los secretos estén configurados correctamente
2. Revisa los logs en el workflow de GitHub Actions
3. Verifica que `pnpm-lock.yaml` esté committeado
4. Asegúrate de que `next.config.ts` tenga `output: "export"`

### "No files or functions to deploy"

- Verifica que el directorio `out/` se está generando correctamente
- Asegúrate de que `netlify.toml` tiene `publish = "out"`
- Comprueba que no hay errores en el build local: `pnpm build`

### Preview deploy no funciona

1. Verifica que `NETLIFY_SITE_ID` y `NETLIFY_AUTH_TOKEN` estén configurados
2. Revisa permisos del token en Netlify
3. Verifica que el PR esté contra la rama `master`

### Deploy a producción no se ejecuta

1. Verifica que el push sea a la rama `master`
2. Revisa el tab "Actions" en GitHub para ver errores
3. Verifica que no haya errores en el build

---

## 📚 Enlaces Útiles

- 🌐 [Sitio en Producción](https://alioth-design-system.netlify.app)
- 📊 [Dashboard Netlify](https://app.netlify.com/projects/alioth-design-system)
- 🔧 [GitHub Actions](https://github.com/ANDY2639/alioth-design-system/actions)
- 📖 [Documentación Netlify](https://docs.netlify.com/)
- 📘 [Documentación Next.js Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## ✅ Checklist Final

Antes de tu primer deploy, asegúrate de:

- [ ] Secretos configurados en GitHub (`NETLIFY_SITE_ID`, `NETLIFY_AUTH_TOKEN`)
- [ ] Build local funciona (`pnpm build`)
- [ ] Archivos committeados (netlify.toml, workflows, next.config.ts)
- [ ] `output: "export"` configurado en next.config.ts
- [ ] PR creado para probar preview deploy
- [ ] Verificar que preview URL funciona
- [ ] Mergear a master para deploy a producción
- [ ] Verificar que producción funciona en <https://alioth-design-system.netlify.app>

---

**🎉 ¡Todo listo para deploy!**
