# "use client" Guidelines - Next.js App Router

## 📘 Regla General

En Next.js 13+ con App Router, **todos los componentes son Server Components por defecto**. Solo necesitas `"use client"` cuando el código debe ejecutarse en el cliente (navegador).

## ✅ Cuándo SÍ usar `"use client"`

### 1. Componentes que renderizan JSX con interactividad

```typescript
// ✅ SÍ necesita "use client"
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

**Razón:** Usa `useState` y event handlers (`onClick`).

### 2. Componentes que usan Context Provider

```typescript
// ✅ SÍ necesita "use client"
"use client";

import { ReactNode, useState } from "react";
import FormContext from "./FormContext";

export default function FormProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState({});

  return (
    <FormContext.Provider value={{ values, setValues }}>
      {children}
    </FormContext.Provider>
  );
}
```

**Razón:** Renderiza JSX y usa hooks de React.

### 3. Componentes que usan Browser APIs

```typescript
// ✅ SÍ necesita "use client"
"use client";

import { useEffect, useState } from "react";

export default function WindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth); // Browser API
  }, []);

  return <div>Width: {width}</div>;
}
```

**Razón:** Usa `window`, que solo existe en el navegador.

### 4. Componentes que usan librerías de cliente

```typescript
// ✅ SÍ necesita "use client"
"use client";

import { motion } from "framer-motion";

export default function AnimatedBox() {
  return <motion.div animate={{ x: 100 }} />;
}
```

**Razón:** `framer-motion` necesita ejecutarse en el cliente.

---

## ❌ Cuándo NO usar `"use client"`

### 1. Custom Hooks (Hooks Personalizados)

```typescript
// ❌ NO necesita "use client"
import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);

  return { count, increment, decrement };
}
```

**Razón:** Los hooks heredan el contexto del componente que los usa. Si el componente tiene `"use client"`, el hook también se ejecutará en el cliente.

### 2. Context Definitions (Definición de Contextos)

```typescript
// ❌ NO necesita "use client"
import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export default ThemeContext;
```

**Razón:** Solo define el contexto, no lo usa. El Provider sí necesitará `"use client"`.

### 3. Type Definitions (Definiciones de Tipos)

```typescript
// ❌ NO necesita "use client"
export type User = {
  id: string;
  name: string;
  email: string;
};

export type FormValues = {
  username: string;
  password: string;
};
```

**Razón:** Los tipos se eliminan en tiempo de compilación, no se ejecutan.

### 4. Utility Functions (Funciones de Utilidad)

```typescript
// ❌ NO necesita "use client"
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
```

**Razón:** Funciones puras sin dependencias de cliente. Pueden ejecutarse en servidor o cliente según se necesite.

### 5. Constants y Configuración

```typescript
// ❌ NO necesita "use client"
export const API_BASE_URL = "https://api.example.com";

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
} as const;

export const COLORS = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
} as const;
```

**Razón:** Solo exporta valores estáticos.

---

## 🎯 Ejemplos del Form System

### Análisis de Archivos

| Archivo               | Tiene `"use client"` | ¿Correcto? | Razón                                                   |
| --------------------- | -------------------- | ---------- | ------------------------------------------------------- |
| **FormContext.ts**    | ❌ No                | ✅ **Sí**  | Solo define tipos y crea contexto                       |
| **FormProvider.tsx**  | ✅ Sí                | ✅ **Sí**  | Renderiza JSX, usa hooks (useState, useEffect, useMemo) |
| **useForm.ts**        | ❌ No                | ✅ **Sí**  | Custom hook, hereda contexto del componente             |
| **useFormContext.ts** | ❌ No                | ✅ **Sí**  | Custom hook, hereda contexto del componente             |
| **useFormError.tsx**  | ❌ No                | ✅ **Sí**  | Custom hook, hereda contexto del componente             |

### Ejemplo Completo de Uso

```typescript
// ❌ FormContext.ts - NO necesita "use client"
import { createContext } from "react";

export type FormContextValues = {
  values: Record<string, unknown>;
  // ...
};

const FormContext = createContext<FormContextValues>({
  values: {},
  // ...
});

export default FormContext;
```

```typescript
// ✅ FormProvider.tsx - SÍ necesita "use client"
"use client";

import { ReactNode, useState, useMemo } from "react";
import FormContext from "./FormContext";

export default function FormProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState({});

  const contextValue = useMemo(
    () => ({ values, setValues }),
    [values]
  );

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}
```

```typescript
// ❌ useFormContext.ts - NO necesita "use client"
import { useContext } from "react";
import FormContext from "./FormContext";

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
}
```

```typescript
// ✅ MyForm.tsx - SÍ necesita "use client" (porque usa el hook)
"use client";

import { useFormContext } from "./useFormContext";

export default function MyForm() {
  const { values, setValues } = useFormContext();

  return (
    <input
      value={values.name}
      onChange={(e) => setValues({ ...values, name: e.target.value })}
    />
  );
}
```

---

## 🚀 Best Practices

### 1. Marca solo el boundary más alto

```typescript
// ✅ MEJOR: Solo marca el componente padre
"use client";

export default function InteractiveSection() {
  return (
    <div>
      <Counter />
      <Form />
      <Modal />
    </div>
  );
}

// ❌ EVITAR: No marques cada componente hijo
"use client";
function Counter() { /* ... */ }

"use client";
function Form() { /* ... */ }

"use client";
function Modal() { /* ... */ }
```

### 2. Separa Server y Client Components

```typescript
// ✅ MEJOR: Componente servidor que importa cliente
import ClientCounter from "./ClientCounter"; // Este tiene "use client"

export default async function DashboardPage() {
  const data = await fetchData(); // Fetch en servidor

  return (
    <div>
      <h1>Dashboard</h1>
      <ServerDataDisplay data={data} />
      <ClientCounter /> {/* Client component */}
    </div>
  );
}
```

### 3. Minimiza el bundle de cliente

```typescript
// ❌ EVITAR: Todo el componente en cliente por un pequeño botón
"use client";

import HeavyChart from "heavy-chart-library"; // 500KB

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeavyChart data={data} /> {/* Todo esto se envía al cliente */}
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

// ✅ MEJOR: Separa lo interactivo
import HeavyChart from "heavy-chart-library"; // Server component
import CounterButton from "./CounterButton"; // Client component

export default function Dashboard() {
  return (
    <div>
      <HeavyChart data={data} /> {/* Renderizado en servidor */}
      <CounterButton /> {/* Solo esto va al cliente */}
    </div>
  );
}
```

---

## 🔍 Debugging Tips

### Cómo saber si necesitas "use client"

Si obtienes estos errores, necesitas `"use client"`:

```-
❌ Error: useState only works in Client Components
❌ Error: useEffect only works in Client Components
❌ Error: Event handlers cannot be passed to Client Components
❌ ReferenceError: window is not defined
```

### Herramientas

1. **Next.js Bundle Analyzer:**

   ```bash
   pnpm add @next/bundle-analyzer
   ```

2. **React DevTools:**
   - Server Components: Mostrados en gris
   - Client Components: Mostrados en azul

---

## 📦 Resumen del Form System

```-
src/components/CoreUIX/Form/
├── context/
│   ├── FormContext.ts          ❌ NO "use client" (solo define contexto)
│   └── FormProvider.tsx        ✅ SÍ "use client" (renderiza JSX + hooks)
└── hooks/
    ├── useForm.ts              ❌ NO "use client" (custom hook)
    ├── useFormContext.ts       ❌ NO "use client" (custom hook)
    └── useFormError.tsx        ❌ NO "use client" (custom hook)
```

**Regla simple:** Solo `FormProvider.tsx` necesita `"use client"` porque:

1. Renderiza JSX (`<Form>`, `<Row>`, `<FormContext.Provider>`)
2. Usa hooks de React (`useState`, `useEffect`, `useCallback`, `useMemo`)
3. Gestiona estado interactivo

Los demás archivos son hooks/utils que heredan el contexto de quien los use.
