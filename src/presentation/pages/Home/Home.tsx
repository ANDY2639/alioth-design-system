"use client";

import { Heading, Body, Caption } from "@/presentation/components/Typography";

const Home = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12 lg:space-y-16">
      {/* Hero Section */}
      <section className="space-y-4">
        <Heading level={1}>Alioth Design System</Heading>
        <Body type="body1">
          A comprehensive, production-ready design system built with Next.js, TypeScript, and Tailwind CSS v4. Designed to streamline development and
          maintain visual consistency across applications.
        </Body>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <Heading level={2}>Overview</Heading>
        <div className="space-y-4">
          <Body>
            Alioth Design System provides a complete foundation for building modern, scalable web applications. It combines carefully crafted UI
            components, a robust color system with dark mode support, and comprehensive typography guidelines—all designed to accelerate development
            while ensuring design consistency.
          </Body>
          <Body>
            Whether you&apos;re building a simple page or a complex application, Alioth gives you the tools and patterns needed to create beautiful,
            functional interfaces quickly and with confidence.
          </Body>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="space-y-6">
        <Heading level={2}>Architecture</Heading>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={3}>Presentation Layer</Heading>
            <Body type="body2">
              Contains all UI components, pages, contexts, and layouts. This layer handles user interactions and displays data. Includes reusable
              components organized by feature, from simple typography to complex composite components.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>Domain Layer</Heading>
            <Body type="body2">
              Encapsulates business logic, entities, and use cases. Remains independent of UI and data access concerns. Provides the core
              functionality that drives your application regardless of how it&apos;s presented or persisted.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>Data Layer</Heading>
            <Body type="body2">
              Handles external integrations, API communication, databases, and repositories. Abstracts data access patterns and provides a clean
              interface to the domain layer for retrieving and persisting information.
            </Body>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-6">
        <Heading level={2}>Essential Technologies</Heading>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={3}>Framework & Runtime</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">Next.js 16.1.2</Body>
                <Caption>React framework with App Router for file-based routing and optimized performance</Caption>
              </div>
              <div>
                <Body variant="semibold">React 19.2.3</Body>
                <Caption>UI library providing component model and hooks for building interactive interfaces</Caption>
              </div>
              <div>
                <Body variant="semibold">TypeScript 5</Body>
                <Caption>Type safety for JavaScript, catching errors at development time for more reliable code</Caption>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Heading level={3}>Styling & UI</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">Tailwind CSS v4</Body>
                <Caption>Utility-first CSS framework for rapid UI development with excellent performance</Caption>
              </div>
              <div>
                <Body variant="semibold">CSS Variables</Body>
                <Caption>Custom theme system with HSL color values enabling seamless dark/light mode switching</Caption>
              </div>
              <div>
                <Body variant="semibold">HeroUI v2.8.7</Body>
                <Caption>Pre-built component library providing accessible, beautiful UI components out of the box</Caption>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Heading level={3}>Forms & Validation</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">Formik</Body>
                <Caption>Comprehensive form state management with easy-to-use APIs for complex forms</Caption>
              </div>
              <div>
                <Body variant="semibold">Zod</Body>
                <Caption>Schema validation library with TypeScript-first design for runtime type safety</Caption>
              </div>
              <div>
                <Body variant="semibold">zod-formik-adapter</Body>
                <Caption>Bridge between Formik and Zod for seamless integration of schema validation</Caption>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Heading level={3}>Development & Quality</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">ESLint</Body>
                <Caption>Code linting tool catching potential bugs and enforcing code quality standards</Caption>
              </div>
              <div>
                <Body variant="semibold">Prettier</Body>
                <Caption>Code formatter ensuring consistent code style across the entire project</Caption>
              </div>
              <div>
                <Body variant="semibold">Husky & lint-staged</Body>
                <Caption>Git hooks automation for running tests and formatting on commits</Caption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="space-y-6">
        <Heading level={2}>Project Structure</Heading>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={3}>src/presentation/</Heading>
            <Body type="body2">
              Contains all UI layer code: reusable components, pages, contexts for state management, and layout structures. Organized by feature for
              easy navigation and maintenance.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>src/app/</Heading>
            <Body type="body2">
              Next.js App Router configuration with route definitions, global styles, and root layout. Handles application-wide setup including theme
              providers and CSS variables.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>tailwind.config.js</Heading>
            <Body type="body2">
              Tailwind CSS configuration with custom theme values, color palette definitions, and design tokens for spacing, shadows, and border
              radius.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>tsconfig.json</Heading>
            <Body type="body2">
              TypeScript configuration with path aliases (@ symbol) for clean imports and strict type checking settings for code reliability.
            </Body>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <Caption className="text-neutral-600 dark:text-neutral-400">
          Explore the Colors, Components, and Typography pages to see the design system in action.
        </Caption>
      </section>
    </div>
  );
};

export default Home;
