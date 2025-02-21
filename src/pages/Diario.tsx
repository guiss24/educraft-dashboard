
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Check, Clock } from "lucide-react";

const Diario = () => {
  const turmas = [
    {
      nome: "9º Ano A - Matemática",
      horario: "08:00 - 09:30",
      alunos: 32,
      presenca: 30,
    },
    {
      nome: "7º Ano B - Matemática",
      horario: "10:00 - 11:30",
      alunos: 28,
      presenca: 26,
    },
    {
      nome: "8º Ano C - Matemática",
      horario: "13:30 - 15:00",
      alunos: 30,
      presenca: 28,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Diário de Classe
            </h1>
            <p className="text-gray-600">
              Gerenciar frequências, conteúdos e avaliações
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {turmas.map((turma, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-800">
                      {turma.nome}
                    </h3>
                    <BookOpen className="text-teaching-300" size={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{turma.horario}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="mr-2" />
                      <span>
                        Presença: {turma.presenca}/{turma.alunos}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="text-sm text-teaching-300 hover:underline">
                      Fazer chamada
                    </button>
                    <button className="text-sm text-teaching-300 hover:underline">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Conteúdo Previsto
              </h3>
              <div className="space-y-4">
                {["Equações do 2º Grau", "Teorema de Pitágoras", "Funções"].map(
                  (conteudo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{conteudo}</span>
                      <button className="text-sm text-teaching-300 hover:underline">
                        Editar
                      </button>
                    </div>
                  )
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Próximas Avaliações
              </h3>
              <div className="space-y-4">
                {[
                  {
                    titulo: "Prova Bimestral",
                    turma: "9º Ano A",
                    data: "15/03/2024",
                  },
                  {
                    titulo: "Trabalho em Grupo",
                    turma: "7º Ano B",
                    data: "18/03/2024",
                  },
                  {
                    titulo: "Teste Surpresa",
                    turma: "8º Ano C",
                    data: "20/03/2024",
                  },
                ].map((avaliacao, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">
                        {avaliacao.titulo}
                      </p>
                      <p className="text-sm text-gray-600">
                        {avaliacao.turma} • {avaliacao.data}
                      </p>
                    </div>
                    <button className="text-sm text-teaching-300 hover:underline">
                      Detalhes
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diario;
