# 🚀 Deployment Guide - Alioth Design System

## 📋 Información del Sitio Netlify

```
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

```
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
- ✅ Ejecuta el build de Next.js
- ✅ Despliega a Netlify (deploy preview)
- ✅ Comenta en el PR con la URL del preview

### 2. 🚀 Production Deploy

**Archivo:** `.github/workflows/production-deploy.yml`

**Se ejecuta cuando:**

- Haces push directo a `master`
- Un PR es merged a `master`

**Qué hace:**

- ✅ Instala dependencias con pnpm
- ✅ Ejecuta el build de Next.js
- ✅ Despliega a producción en Netlify
- ✅ Notifica en los logs de GitHub

---

## 🔄 Flujo de Trabajo

```
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

# Deploy a producción
netlify deploy --prod --dir=.next

# Deploy de prueba
netlify deploy --dir=.next
```

---

## 🧪 Testing Local

Antes de hacer un deploy, asegúrate de probar localmente:

```bash
# Instalar dependencias
pnpm install

# Build de producción
pnpm build

# Servir localmente
pnpm start
```

---

## 📝 Configuración de Netlify

El archivo `netlify.toml` contiene la configuración:

```toml
[build]
  command = "pnpm install && pnpm build"
  publish = ".next"

[context.production]
  command = "pnpm install && pnpm build"

[context.deploy-preview]
  command = "pnpm install && pnpm build"
```

---

## ❓ Troubleshooting

### Build falla en Netlify

1. Verifica que los secretos estén configurados correctamente
2. Revisa los logs en el workflow de GitHub Actions
3. Verifica que `pnpm-lock.yaml` esté committeado

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

---

## ✅ Checklist Final

Antes de tu primer deploy, asegúrate de:

- [ ] Secretos configurados en GitHub (`NETLIFY_SITE_ID`, `NETLIFY_AUTH_TOKEN`)
- [ ] Build local funciona (`pnpm build`)
- [ ] Archivos committeados (netlify.toml, workflows)
- [ ] PR creado para probar preview deploy
- [ ] Verificar que preview URL funciona
- [ ] Mergear a master para deploy a producción
- [ ] Verificar que producción funciona en <https://alioth-design-system.netlify.app>

---

**🎉 ¡Todo listo para deploy!**
