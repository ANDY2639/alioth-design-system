import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const RootMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  );
};

export default RootMainLayout;
