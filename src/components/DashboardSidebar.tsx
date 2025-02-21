
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  BarChart2,
  MessageSquare,
  Bell,
  Settings,
  Menu,
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

  return (
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
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-teaching-100 transition-colors"
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
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-teaching-100 transition-colors"
        >
          <Settings size={20} className="text-gray-600" />
          {!collapsed && <span className="text-gray-700">Configurações</span>}
        </Link>
      </div>
    </div>
  );
};
