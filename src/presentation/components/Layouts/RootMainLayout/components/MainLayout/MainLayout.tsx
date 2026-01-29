export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex-1 bg-white dark:bg-background transition-colors duration-300 overflow-auto">
      <div className="p-8">{children}</div>
    </main>
  );
}
