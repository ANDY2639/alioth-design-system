"use client";

import Body from "@/presentation/components/Typography/Body";
import Caption from "@/presentation/components/Typography/Caption";
import Heading from "@/presentation/components/Typography/Heading";

const Home = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12 lg:space-y-16">
      {/* Hero Section */}
      <section className="space-y-4">
        <Heading level={1}>✨ Alioth Design System</Heading>
        <Body type="body1">
          A comprehensive, production-ready design system built with modern tech: Next.js, TypeScript & Tailwind CSS v4. Build faster, stay
          consistent, design with confidence.
        </Body>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <Heading level={2}>🎯 Overview</Heading>
        <div className="space-y-4">
          <Body>
            Alioth gives you everything you need: a complete foundation with carefully crafted components, a robust color system with dark mode magic,
            and comprehensive typography. Ship beautiful UIs faster while keeping everything consistent.
          </Body>
          <Body>
            From simple landing pages to complex applications, Alioth scales with you. Pre-built patterns, smart defaults, and endless
            customization—so you focus on building great experiences.
          </Body>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="space-y-6">
        <Heading level={2}>🏗️ Architecture</Heading>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={3}>🎨 Presentation Layer</Heading>
            <Body type="body2">
              Everything users see and touch lives here. Components, pages, layouts, and state management. Organized by feature for maximum clarity
              and reusability.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>⚙️ Domain Layer</Heading>
            <Body type="body2">
              Pure business logic and rules. What makes your app tick. Completely independent from UI or storage—swap them out without touching core
              functionality.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>💾 Data Layer</Heading>
            <Body type="body2">
              APIs, databases, repositories—where data flows. Clean interfaces hide the complexity, letting your domain layer focus on business logic
              only.
            </Body>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-6">
        <Heading level={2}>⚡ Essential Technologies</Heading>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={3}>🚀 Framework & Runtime</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">Next.js 16.1.2</Body>
                <Caption>App Router, server components, optimal performance. Build fast. Ship faster.</Caption>
              </div>
              <div>
                <Body variant="semibold">React 19.2.3</Body>
                <Caption>The UI library that powers interactive, dynamic applications with hooks & components</Caption>
              </div>
              <div>
                <Body variant="semibold">TypeScript 5</Body>
                <Caption>Catch bugs before they happen. Type safety at scale. Code with confidence.</Caption>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Heading level={3}>🎭 Styling & UI</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">Tailwind CSS v4</Body>
                <Caption>Utility-first. Build anything. Lightning fast. Maximum control.</Caption>
              </div>
              <div>
                <Body variant="semibold">CSS Variables</Body>
                <Caption>Dynamic theming made simple. Light, dark, or any mode you can dream up.</Caption>
              </div>
              <div>
                <Body variant="semibold">HeroUI v2.8.7</Body>
                <Caption>Beautiful, accessible components ready to use. No styling headaches.</Caption>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Heading level={3}>✅ Forms & Validation</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">Formik</Body>
                <Caption>Forms made simple. Validation, errors, submission. All handled.</Caption>
              </div>
              <div>
                <Body variant="semibold">Zod</Body>
                <Caption>TypeScript-native validation. Schema-driven. Bulletproof data safety.</Caption>
              </div>
              <div>
                <Body variant="semibold">zod-formik-adapter</Body>
                <Caption>Perfect sync between Formik and Zod. Best of both worlds.</Caption>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Heading level={3}>🛠️ Development & Quality</Heading>
            <div className="space-y-3">
              <div>
                <Body variant="semibold">ESLint</Body>
                <Caption>Find bugs before production. Enforce quality at scale.</Caption>
              </div>
              <div>
                <Body variant="semibold">Prettier</Body>
                <Caption>One formatting rule to rule them all. Zero debates about style.</Caption>
              </div>
              <div>
                <Body variant="semibold">Husky & lint-staged</Body>
                <Caption>Automate quality checks. Perfect code at every commit.</Caption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="space-y-6">
        <Heading level={2}>📁 Project Structure</Heading>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={3}>🖼️ src/presentation/</Heading>
            <Body type="body2">All UI magic happens here. Components, pages, layouts, contexts. Clean, feature-based organization.</Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>📱 src/app/</Heading>
            <Body type="body2">
              Next.js routing and configuration. App Router magic, global styles, theme providers. The entry point to your application.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>🎨 tailwind.config.js</Heading>
            <Body type="body2">
              Design system defined in code. Colors, spacing, shadows, typography—all customizable. Your visual language, in one file.
            </Body>
          </div>
          <div className="space-y-2">
            <Heading level={3}>⚙️ tsconfig.json</Heading>
            <Body type="body2">Path aliases, strict mode, performance tweaks. TypeScript rules configured for maximum productivity and safety.</Body>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <Caption className="text-neutral-600 dark:text-neutral-400">
          🚀 Explore the Colors, Components, and Typography pages to see the design system in action!
        </Caption>
      </section>
    </div>
  );
};

export default Home;
