
import { Card } from "@/components/ui/card";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import {
  BarChart,
  Calendar,
  GraduationCap,
  Users,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const quickStats = [
    {
      icon: Users,
      label: "Total de Alunos",
      value: "127",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: GraduationCap,
      label: "Turmas Ativas",
      value: "5",
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: CheckCircle,
      label: "Presença Média",
      value: "92%",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: Calendar,
      label: "Aulas Hoje",
      value: "4",
      color: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-teaching-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">MP</span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                  Bem-vindo(a), Professor(a)
                </h1>
                <p className="text-gray-600">
                  Terça-feira, 12 de Março de 2024
                </p>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat) => (
              <Card
                key={stat.label}
                className={`p-6 ${stat.color} border-none animate-slideIn`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-semibold mt-1 text-gray-800">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-2 rounded-lg ${stat.iconColor} bg-white/80`}
                  >
                    <stat.icon size={20} />
                  </div>
                </div>
              </Card>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Próximas Aulas
                </h2>
                <button className="text-sm text-teaching-300 hover:underline">
                  Ver todas
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-12 bg-teaching-300 rounded-full" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Matemática - 9º Ano A
                        </p>
                        <p className="text-sm text-gray-600">
                          08:00 - 09:30 • Sala 12
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-teaching-300 hover:underline">
                      Detalhes
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Atividades Pendentes
                </h2>
                <button className="text-sm text-teaching-300 hover:underline">
                  Ver todas
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-2 h-12 rounded-full ${
                          i === 0
                            ? "bg-red-400"
                            : i === 1
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          Corrigir Provas - 7º Ano B
                        </p>
                        <p className="text-sm text-gray-600">
                          Vence em 2 dias • 25 alunos
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-teaching-300 hover:underline">
                      Iniciar
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
