
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Download, Filter } from "lucide-react";

const Relatorios = () => {
  const desempenhoData = [
    { turma: "6º A", media: 7.8 },
    { turma: "7º B", media: 8.2 },
    { turma: "8º C", media: 7.5 },
    { turma: "9º A", media: 8.0 },
  ];

  const presencaData = [
    { name: "Presentes", value: 85 },
    { name: "Ausentes", value: 15 },
  ];

  const COLORS = ["#90EE90", "#FFB1B1"];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Relatórios</h1>
              <p className="text-gray-600">
                Análise de desempenho e frequência
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
                <Filter size={16} />
                <span>Filtrar</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-teaching-300 text-white rounded-lg hover:bg-teaching-400">
                <Download size={16} />
                <span>Exportar</span>
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-6">
                Média por Turma
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={desempenhoData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="turma" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="media" fill="#90EE90" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-6">
                Taxa de Presença
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={presencaData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {presencaData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              Relatórios Disponíveis
            </h2>
            <div className="space-y-4">
              {[
                "Desempenho por Turma",
                "Frequência Mensal",
                "Avaliações Realizadas",
                "Progresso do Conteúdo",
              ].map((relatorio, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{relatorio}</span>
                  <button className="text-sm text-teaching-300 hover:underline">
                    Gerar Relatório
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Relatorios;
