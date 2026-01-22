# Form System Migration: FormValue → unknown

## 🎯 Cambio Implementado

Migración de `FormValue` (tipo restrictivo) a `unknown` (tipo flexible) para soportar estructuras de datos complejas.

## 📝 Archivos Modificados

### 1. `src/components/CoreUIX/Form/context/FormContext.ts`

**Antes:**

```typescript
export type FormValue = string | number | boolean | null | string[];

export type FormContextValues<T extends Record<string, FormValue> = Record<string, FormValue>> = {
  values: T;
  onChangeField: (name: string, value: FormValue) => void;
  setPartialValues: (values: Partial<T>) => void;
  // ...
};
```

**Después:**

```typescript
// FormValue eliminado

export type FormContextValues = {
  values: Record<string, unknown>;
  onChangeField: (name: string, value: unknown) => void;
  setPartialValues: (values: Record<string, unknown>) => void;
  // ...
};
```

### 2. `src/components/CoreUIX/Form/hooks/useForm.ts`

**Antes:**

```typescript
import { FormValue } from "../context/FormContext";

export type UseFormReturn<T> = {
  onChangeField: (name: string, value: FormValue) => void;
  // ...
};

const onChangeField = useCallback(
  (name: string, value: FormValue) => {
    setFieldValue(name, value);
    clearError(name);
  },
  [setFieldValue, clearError],
);
```

**Después:**

```typescript
// Import de FormValue eliminado

export type UseFormReturn<T> = {
  onChangeField: (name: string, value: unknown) => void;
  // ...
};

const onChangeField = useCallback(
  (name: string, value: unknown) => {
    setFieldValue(name, value);
    clearError(name);
  },
  [setFieldValue, clearError],
);
```

### 3. `src/components/CoreUIX/Form/context/FormProvider.tsx`

**Antes:**

```typescript
import FormContext, { FormValue } from "@/components/CoreUIX/Form/context/FormContext";

type FormProviderProps<T extends Record<string, unknown>> = {
  data?: { [key: string]: FormValue };
  // ...
};

const setPartialValues = useCallback(
  (partialValues: Partial<T>) => {
    setValues({ ...values, ...partialValues } as T);
  },
  [setValues, values],
);

const contextValue = useMemo(
  () => ({
    values: values as Record<string, FormValue>,
    errors: errors as Record<string, string | undefined>,
    touched: touched as Record<string, boolean>,
    setPartialValues: setPartialValues as (values: Partial<Record<string, FormValue>>) => void,
    // ...
  }),
  [
    /* deps */
  ],
);
```

**Después:**

```typescript
import FormContext from "@/components/CoreUIX/Form/context/FormContext";

type FormProviderProps<T extends Record<string, unknown>> = {
  data?: { [key: string]: unknown };
  // ...
};

const setPartialValues = useCallback(
  (partialValues: Record<string, unknown>) => {
    setValues({ ...values, ...partialValues } as T);
  },
  [setValues, values],
);

const contextValue = useMemo(
  () => ({
    values, // ✅ Sin conversión
    errors: errors as Record<string, string | undefined>,
    touched: touched as Record<string, boolean>,
    setPartialValues, // ✅ Sin conversión
    // ...
  }),
  [
    /* deps */
  ],
);
```

### 4. `src/components/CoreUIX/Form/hooks/useFormContext.ts`

**Antes:**

```typescript
const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
```

**Después:**

```typescript
type TypedFormContextValues<T extends Record<string, unknown>> = Omit<FormContextValues, "values" | "setPartialValues"> & {
  values: T;
  setPartialValues: (values: Partial<T>) => void;
};

function useFormContext<T extends Record<string, unknown> = Record<string, unknown>>(): TypedFormContextValues<T> {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context as TypedFormContextValues<T>;
}
```

## ✅ Beneficios

### 1. Soporte para Estructuras Complejas

**Antes (❌ No funcionaba):**

```typescript
const userSchema = z.object({
  name: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  skills: z.array(
    z.object({
      name: z.string(),
      level: z.number(),
    }),
  ),
  avatar: z.instanceof(File).optional(),
  birthDate: z.date(),
});

type UserForm = z.infer<typeof userSchema>;

// ❌ ERROR: Type error - necesitas "as FormValue"
const { onChangeField } = useFormContext();
onChangeField("address", {
  street: "123 Main",
  city: "NYC",
  coordinates: { lat: 40.7, lng: -74.0 },
}); // ❌ ERROR
```

**Después (✅ Funciona):**

```typescript
const userSchema = z.object({
  name: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  skills: z.array(
    z.object({
      name: z.string(),
      level: z.number(),
    }),
  ),
  avatar: z.instanceof(File).optional(),
  birthDate: z.date(),
});

type UserForm = z.infer<typeof userSchema>;

// ✅ Funciona sin problemas
const { onChangeField, values } = useFormContext<UserForm>();
onChangeField("address", {
  street: "123 Main",
  city: "NYC",
  coordinates: { lat: 40.7, lng: -74.0 },
}); // ✅ OK

// ✅ Type inference completo
values.address.city; // string
values.address.coordinates.lat; // number
values.skills[0].level; // number
```

### 2. Código más Limpio

**Antes:**

```typescript
// ❌ Type assertions en todos lados
onChangeField("address", address as FormValue);
onChangeField("skills", skills as FormValue);
onChangeField("avatar", file as FormValue);
```

**Después:**

```typescript
// ✅ Sin conversiones de tipo
onChangeField("address", address);
onChangeField("skills", skills);
onChangeField("avatar", file);
```

### 3. Consistencia

Ahora todos los componentes del form system usan `Record<string, unknown>`:

- ✅ `useForm<T extends Record<string, unknown>>`
- ✅ `FormProvider<T extends Record<string, unknown>>`
- ✅ `FormContextValues` con `values: Record<string, unknown>`

### 4. Type Safety Mantenido

```typescript
// ✅ Type inference por genérico T
const { values, onChangeField } = useFormContext<UserProfileForm>();

values.name; // ✅ TypeScript sabe que es string
values.age; // ✅ TypeScript sabe que es number
values.address.city; // ✅ TypeScript sabe que es string
values.skills[0].name; // ✅ TypeScript sabe que es string

// ⚠️ Validación en runtime por Zod
onChangeField("age", "invalid"); // TypeScript no se queja
// PERO Zod mostrará error de validación cuando se valide el formulario
```

## 🔍 Ejemplo Completo

```typescript
import { z } from "zod";
import FormProvider from "@/components/CoreUIX/Form/context/FormProvider";
import useFormContext from "@/components/CoreUIX/Form/hooks/useFormContext";

// Schema complejo
const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zipCode: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  skills: z.array(z.object({
    name: z.string(),
    level: z.number().min(1).max(5),
  })),
  avatar: z.instanceof(File).optional(),
  birthDate: z.date(),
  tags: z.array(z.string()),
});

type UserForm = z.infer<typeof userSchema>;

// Componente de formulario
function UserProfileForm() {
  return (
    <FormProvider<UserForm>
      initialValues={{
        name: "",
        email: "",
        age: 0,
        address: {
          street: "",
          city: "",
          zipCode: "",
          coordinates: { lat: 0, lng: 0 },
        },
        skills: [],
        avatar: undefined,
        birthDate: new Date(),
        tags: [],
      }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        console.log("Form submitted:", values);
        // values tiene type safety completo
        values.address.city; // ✅ string
        values.skills[0].level; // ✅ number
      }}
    >
      <UserFormFields />
    </FormProvider>
  );
}

// Componente hijo con campos
function UserFormFields() {
  const { values, onChangeField } = useFormContext<UserForm>();

  const handleAddressChange = () => {
    // ✅ Funciona sin "as FormValue"
    onChangeField("address", {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
      coordinates: { lat: 40.7128, lng: -74.0060 },
    });
  };

  const handleAddSkill = () => {
    // ✅ Funciona con arrays de objetos
    onChangeField("skills", [
      ...values.skills,
      { name: "React", level: 5 },
    ]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // ✅ Funciona con File
      onChangeField("avatar", file);
    }
  };

  return (
    <>
      <input
        value={values.name}
        onChange={(e) => onChangeField("name", e.target.value)}
      />
      <input
        type="number"
        value={values.age}
        onChange={(e) => onChangeField("age", Number(e.target.value))}
      />
      <input
        value={values.address.city}
        onChange={(e) => onChangeField("address", {
          ...values.address,
          city: e.target.value,
        })}
      />
      <input type="file" onChange={handleFileUpload} />
      <button type="button" onClick={handleAddressChange}>
        Update Address
      </button>
      <button type="button" onClick={handleAddSkill}>
        Add Skill
      </button>
    </>
  );
}
```

## 🎉 Resultado

- ✅ **TypeScript types:** Pasan sin errores
- ✅ **ESLint:** Sin warnings
- ✅ **Build:** Compilación exitosa
- ✅ **Código más limpio:** Sin `as FormValue` en todos lados
- ✅ **Soporte completo:** Objetos anidados, arrays complejos, File, Date, etc.
- ✅ **Type safety:** Mantenido por genéricos + Zod validation
- ✅ **Backward compatible:** Formularios simples siguen funcionando igual

## 🔄 Migración de Código Existente

Si tienes código existente que usa `FormValue`:

**Buscar y reemplazar:**

```typescript
// Antes
import { FormValue } from "@/components/CoreUIX/Form/context/FormContext";
onChangeField("field", value as FormValue);

// Después
// Eliminar import
onChangeField("field", value);
```

**No necesitas cambiar:**

- Definiciones de schemas de Zod
- Componentes FormProvider
- Lógica de validación
- Handlers de submit
