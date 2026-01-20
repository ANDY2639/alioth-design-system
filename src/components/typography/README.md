# 🅰️ Sistema Tipográfico - Alioth Design System

Sistema tipográfico completo basado en el Design System de Alioth. Incluye componentes reutilizables, configuración centralizada y ejemplos de uso.

## 📦 Componentes Disponibles

### Heading (H1-H6)

Encabezados con 6 niveles jerárquicos y variantes de peso.

```tsx
import { Heading } from '@/components/typography';

// Uso básico
<Heading level={1}>Dashboard general de proyectos</Heading>
<Heading level={2}>Resumen de actividades</Heading>

// Con variantes
<Heading level={1} variant="light">Hero suave</Heading>
<Heading level={6} variant="bold">Énfasis pequeño</Heading>
```

**Estilos base:**

- H1: 40px | Bold | 120% → Títulos principales de páginas
- H2: 32px | Bold | 120% → Títulos de sección
- H3: 28px | Semibold | 130% → Encabezados destacados
- H4: 24px | Semibold | 130% → Divisiones internas
- H5: 20px | Medium | 140% → Subtítulos, bloques informativos
- H6: 16px | Medium | 140% → Labels importantes

**Variantes disponibles:**

- `light` (300)
- `regular` (400)
- `semibold` (600)
- `bold` (700)

---

### Body (Body1, Body2)

Componentes para texto de párrafo.

```tsx
import { Body } from '@/components/typography';

// Body 1 (Medium, 14px)
<Body type="body1">
  Este módulo permite gestionar proveedores...
</Body>

// Body 2 (Regular, 14px)
<Body type="body2">
  Para continuar, selecciona un proveedor...
</Body>

// Con variantes
<Body type="body1" variant="semibold">Texto destacado</Body>
<Body type="body1" variant="light">Texto suave</Body>
```

**Estilos:**

- Body 1: 14px | Medium | 150% → Texto largo, descripciones
- Body 2: 14px | Regular | 150% → Texto corto, inputs, tablas

**Variantes disponibles:**

- `light` (300) - Textos complementarios suaves
- `regular` (400)
- `medium` (500)
- `semibold` (600) - Destacar palabras sin color

---

### Caption

Componente para texto secundario y notas.

```tsx
import { Caption } from '@/components/typography';

<Caption>Última actualización hace 5 minutos.</Caption>
<Caption as="span">Campo obligatorio</Caption>
```

**Estilo:**

- Caption: 12px | Regular | 150% → Notas, información secundaria

---

### Link

Enlaces con estilos del Design System.

```tsx
import { Link } from '@/components/typography';

<Link href="/guia">
  Para más información revisa la guía del proveedor.
</Link>

<Link href="https://example.com" external>
  Documentación externa
</Link>
```

**Propiedades:**

- Color primario según módulo
- Siempre subrayado en hover
- NO usar para acciones principales (usar botones)

---

### List

Listas ordenadas y no ordenadas.

```tsx
import { List } from '@/components/typography';

// Lista ordenada
<List
  type="ordered"
  items={[
    'Selecciona un proveedor',
    'Revisa los documentos',
    'Aprueba o rechaza el proceso'
  ]}
/>

// Lista no ordenada
<List
  type="unordered"
  items={[
    'Documentos pendientes',
    'Información incompleta',
    'Registro actualizado'
  ]}
/>
```

**Casos de uso:**

- Ordenada: Pasos secuenciales
- No ordenada: Elementos sin orden

---

### Note

Componente para notas, avisos y mensajes informativos.

```tsx
import { Note } from '@/components/typography';

<Note>
  Nota: Algunos campos solo pueden ser editados por el administrador.
</Note>

<Note variant="warning">
  Advertencia: Esta acción no se puede deshacer.
</Note>

<Note variant="error">
  Error: No se pudo cargar la información.
</Note>
```

**Variantes disponibles:**

- `neutral` (default)
- `info`
- `success`
- `warning`
- `error`

---

## 🎨 CSS Variables Disponibles

Todas las variables están definidas en `src/app/globals.css`:

### **Tipografía Base - Alioth Design System**

```css
/* Font Sizes - Base */
--font-size-h1: 40px
--font-size-h2: 32px
--font-size-h3: 28px
--font-size-h4: 24px
--font-size-h5: 20px
--font-size-h6: 16px
--font-size-body: 14px
--font-size-caption: 12px

/* Line Heights - Base */
--line-height-heading: 1.2      /* 120% */
--line-height-heading-md: 1.3   /* 130% */
--line-height-heading-lg: 1.4   /* 140% */
--line-height-body: 1.5         /* 150% */

/* Font Weights - Base */
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### **Tipografía Extendida - Sistema Completo**

```css
/* Font Sizes - Headings Extendidos */
--font-size-heading1: 61px      /* text-heading1 */
--font-size-heading2: 49px      /* text-heading2 */
--font-size-heading3: 39px      /* text-heading3 */
--font-size-heading4: 31px      /* text-heading4 */
--font-size-heading5: 25px      /* text-heading5 */
--font-size-heading6: 20px      /* text-heading6 */
--font-size-heading7: 18px      /* text-heading7 */

/* Font Sizes - Body Extendidos */
--font-size-body1: 16px         /* text-body1 */
--font-size-body2: 13px         /* text-body2 */

/* Font Sizes - Tamaños Adicionales */
--font-size-xs: 12px            /* text-xs */
--font-size-xl: 20px            /* text-xl */
--font-size-1xl: 22px           /* text-1xl */
--font-size-2xl: 24px           /* text-2xl */
--font-size-3xl: 28px           /* text-3xl */
--font-size-4xl: 30px           /* text-4xl */
--font-size-5xl: 48px           /* text-5xl */

/* Font Weights - Extendidos */
--font-weight-extrabold: 800    /* font-extrabold */
--font-weight-black: 900        /* font-black */
```

### **Spacing Scale - Múltiplos de 4px**

```css
/* Sistema de Espaciado (p-*, m-*, gap-*, etc.) */
--spacing-0: 0px
--spacing-px: 1px
--spacing-0.5: 2px
--spacing-1: 4px               /* gap-1, p-1, m-1 */
--spacing-2: 8px               /* gap-2, p-2, m-2 */
--spacing-3: 12px              /* gap-3, p-3, m-3 */
--spacing-4: 16px              /* gap-4, p-4, m-4 */
--spacing-5: 20px
--spacing-6: 24px
--spacing-7: 28px
--spacing-8: 32px
--spacing-9: 36px
--spacing-10: 40px
--spacing-11: 44px
--spacing-12: 48px
--spacing-13: 52px
--spacing-14: 56px
--spacing-15: 60px
--spacing-16: 64px
--spacing-20: 80px
--spacing-24: 96px
--spacing-25: 100px
--spacing-27: 108px
--spacing-32: 128px
--spacing-40: 160px
--spacing-48: 192px
--spacing-56: 224px
--spacing-64: 256px
```

### **Border Radius - Bordes Redondeados**

```css
--radius-sm: 8px               /* rounded-sm */
--radius-md: 12px              /* rounded-md */
--radius-lg: 14px              /* rounded-lg */
--radius-full: 50%             /* rounded-full */
```

### **Box Shadow - Sombras**

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)           /* shadow-sm */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)            /* shadow-md */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)          /* shadow-lg */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1)          /* shadow-xl */
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25)        /* shadow-2xl */
--shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.05)  /* shadow-inner */
```

---

## 📚 Configuración Tipográfica

La configuración completa está en `src/lib/typography.ts`:

```tsx
import { TYPOGRAPHY_CONFIG, TYPOGRAPHY_USE_CASES, TYPOGRAPHY_GUIDELINES } from '@/lib/typography';

// Acceder a configuración de H1
const h1Config = TYPOGRAPHY_CONFIG.headings.h1;
// { fontSize: 40, lineHeight: 1.2, fontWeight: 700, ... }

// Casos de uso
const headingExamples = TYPOGRAPHY_USE_CASES.headings;

// Guías de cuándo usar
const guidelines = TYPOGRAPHY_GUIDELINES;
```

---

## ✅ Cuándo usar el sistema tipográfico

✔️ **SÍ usarlo cuando:**

- Se necesita mantener una jerarquía clara y consistente
- Se construyen layouts de producto (dashboards, formularios, listados)
- Se requiere equilibrio entre densidad de contenido y legibilidad
- Los headings deben guiar la lectura visual rápidamente

❌ **NO usarlo cuando:**

- Se necesiten estilos decorativos (no existen en el sistema)
- Se intente usar headings como texto regular para ahorrar espacio
- Se mezclen demasiados pesos generando ruido visual
- Se use Light como texto base (reduce accesibilidad)

---

## 🧪 Principios

**Font Size:** El tamaño del texto. Construye la jerarquía visual.

**Line Height:** El espacio vertical entre líneas. Define la legibilidad.

**En Alioth:** Usamos line-height entre 120% y 150% según la densidad del contenido.

---

## 📖 Ejemplos Completos

### **Usando Utilidades Extendidas**

```tsx
// Nuevas utilidades de tipografía extendida
<h1 className="text-heading1 font-bold">
  Título Principal Gigante (61px)
</h1>

<h2 className="text-heading2 font-semibold">
  Subtítulo Grande (49px)
</h2>

<p className="text-body1">
  Texto principal del cuerpo (16px)
</p>

<span className="text-xs font-light">
  Texto pequeño (12px)
</span>

<h3 className="text-5xl font-black">
  Título Masivo (48px, peso 900)
</h3>

// Sistema de spacing
<div className="p-25 m-27 gap-32">
  {/* Padding 100px, Margin 108px, Gap 128px */}
</div>

// Bordes y sombras
<div className="rounded-md shadow-xl">
  {/* Border radius 12px, Sombra extra grande */}
</div>
```

### Página de Dashboard

```tsx
import { Heading, Body, Caption, Link } from '@/components/typography';

export default function Dashboard() {
  return (
    <div className="p-8 gap-6">
      {/* Título principal */}
      <Heading level={1}>Dashboard general de proyectos</Heading>

      {/* Sección */}
      <Heading level={2}>Resumen de actividades</Heading>

      {/* Descripción */}
      <Body type="body1">
        Este módulo permite gestionar proveedores, revisar documentos 
        y controlar el avance del PPM.
      </Body>

      {/* Subsección */}
      <Heading level={3}>Proyectos activos</Heading>

      {/* Información secundaria */}
      <Caption>Última actualización hace 5 minutos.</Caption>

      {/* Enlace de ayuda */}
      <Link href="/guia">Ver guía completa</Link>
    </div>
  );
}
```

### Formulario

```tsx
import { Heading, Body, Caption, Note } from '@/components/typography';

export default function Form() {
  return (
    <form>
      <Heading level={4}>Información del proveedor</Heading>

      <Note variant="info">
        Nota: Algunos campos solo pueden ser editados por el administrador.
      </Note>

      <div>
        <label>
          <Heading level={6}>Nombre del proveedor</Heading>
          <Caption>Campo obligatorio</Caption>
        </label>
        <input type="text" />
      </div>

      <Body type="body2">
        Para continuar, complete todos los campos requeridos.
      </Body>
    </form>
  );
}
```

---

## 🎯 Visualización

Para ver todos los estilos y ejemplos de uso, navega a la sección de **Tipografía** en el Design System:

```tsx
import FontShowcase from '@/components/typography/FontShowcase';

<FontShowcase />
```

El componente `FontShowcase` muestra:

- Todos los estilos base (H1-H6, Body1-2, Caption)
- Variantes funcionales
- Ejemplos de uso real
- Condiciones de cuándo usar cada estilo
- Guías y principios tipográficos
