
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  BarChart2,
  MessageSquare,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Visão Geral", href: "/" },
  { icon: Users, label: "Turmas", href: "/turmas" },
  { icon: BookOpen, label: "Diário", href: "/diario" },
  { icon: Calendar, label: "Calendário", href: "/calendario" },
  { icon: BarChart2, label: "Relatórios", href: "/relatorios" },
  { icon: MessageSquare, label: "Mensagens", href: "/mensagens" },
];

export const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <div
          className={cn(
            "h-screen bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col",
            collapsed ? "w-20" : "w-64"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b">
            {!collapsed && <h1 className="text-xl font-semibold">EduCraft</h1>}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "bg-teaching-100 text-teaching-600"
                        : "hover:bg-teaching-100"
                    )}
                  >
                    <item.icon size={20} className="text-gray-600" />
                    {!collapsed && (
                      <span className="text-gray-700">{item.label}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Link
              to="/configuracoes"
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                location.pathname === "/configuracoes"
                  ? "bg-teaching-100 text-teaching-600"
                  : "hover:bg-teaching-100"
              )}
            >
              <Settings size={20} className="text-gray-600" />
              {!collapsed && <span className="text-gray-700">Configurações</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50 px-4">
          <div className="flex items-center justify-between h-full">
            <h1 className="text-lg font-semibold">EduCraft</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-40 transition-opacity",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={cn(
            "fixed top-16 left-0 bottom-0 w-64 bg-white z-50 shadow-xl transition-transform duration-300 ease-out transform",
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="h-full overflow-y-auto">
            <div className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                        location.pathname === item.href
                          ? "bg-teaching-100 text-teaching-600"
                          : "hover:bg-teaching-100"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon size={20} className="text-gray-600" />
                      <span className="text-gray-700">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t">
                <Link
                  to="/configuracoes"
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                    location.pathname === "/configuracoes"
                      ? "bg-teaching-100 text-teaching-600"
                      : "hover:bg-teaching-100"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Settings size={20} className="text-gray-600" />
                  <span className="text-gray-700">Configurações</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Spacer for fixed header */}
        <div className="h-16" />
      </div>
    </>
  );
};
