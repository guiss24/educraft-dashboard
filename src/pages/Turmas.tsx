
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Users, BookOpen, Calendar, BarChart2 } from "lucide-react";

const Turmas = () => {
  const turmas = [
    {
      nome: "9º Ano A",
      disciplina: "Matemática",
      alunos: 32,
      sala: "Sala 12",
      horario: "Segunda e Quarta - 08:00",
    },
    {
      nome: "7º Ano B",
      disciplina: "Matemática",
      alunos: 28,
      sala: "Sala 15",
      horario: "Terça e Quinta - 10:00",
    },
    {
      nome: "8º Ano C",
      disciplina: "Matemática",
      alunos: 30,
      sala: "Sala 14",
      horario: "Segunda e Quarta - 13:30",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                Minhas Turmas
              </h1>
              <p className="text-gray-600">Gerencie suas turmas e alunos</p>
            </div>
            <button className="bg-teaching-300 text-white px-4 py-2 rounded-lg hover:bg-teaching-400 transition-colors">
              Nova Turma
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {turmas.map((turma, index) => (
              <Card key={index} className="p-6 hover-card">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {turma.nome}
                      </h3>
                      <p className="text-sm text-gray-600">{turma.disciplina}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-teaching-100">
                      <Users size={20} className="text-teaching-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-2" />
                      <span>{turma.alunos} alunos</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen size={16} className="mr-2" />
                      <span>{turma.sala}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{turma.horario}</span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t">
                    <button className="text-sm text-teaching-300 hover:underline">
                      Ver alunos
                    </button>
                    <button className="text-sm text-teaching-300 hover:underline">
                      Gerenciar
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Turmas;
