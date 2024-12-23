import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <main className="container mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;