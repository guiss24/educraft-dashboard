
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Search, Send, User } from "lucide-react";

const Mensagens = () => {
  const conversas = [
    {
      nome: "Maria Silva",
      turma: "9º Ano A",
      ultimaMensagem: "Professora, sobre a atividade...",
      horario: "09:30",
      naoLidas: 2,
    },
    {
      nome: "João Santos",
      turma: "7º Ano B",
      ultimaMensagem: "Obrigado pelo feedback!",
      horario: "08:45",
      naoLidas: 0,
    },
    {
      nome: "Ana Oliveira",
      turma: "8º Ano C",
      ultimaMensagem: "A reunião foi remarcada...",
      horario: "Ontem",
      naoLidas: 1,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 flex">
        <div className="w-1/3 border-r bg-white">
          <div className="p-4 border-b">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Buscar mensagens..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teaching-300"
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-5rem)]">
            {conversas.map((conversa, index) => (
              <div
                key={index}
                className="p-4 border-b hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{conversa.nome}</h3>
                  <span className="text-sm text-gray-500">{conversa.horario}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{conversa.turma}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 truncate">
                    {conversa.ultimaMensagem}
                  </p>
                  {conversa.naoLidas > 0 && (
                    <span className="bg-teaching-300 text-white text-xs px-2 py-1 rounded-full">
                      {conversa.naoLidas}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-gray-50">
          <div className="p-4 bg-white border-b">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={20} className="text-gray-500" />
              </div>
              <div>
                <h2 className="font-medium text-gray-800">Maria Silva</h2>
                <p className="text-sm text-gray-600">9º Ano A</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-sm">
                  <p className="text-gray-800">
                    Professora, sobre a atividade de hoje, posso entregar amanhã?
                    Tive um imprevisto.
                  </p>
                  <span className="text-xs text-gray-500 mt-1">09:30</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-teaching-300 text-white rounded-lg p-3 max-w-[70%] shadow-sm">
                  <p>
                    Olá Maria! Sim, pode entregar amanhã sem problemas. Mas não
                    esqueça que vale nota, ok?
                  </p>
                  <span className="text-xs text-white/80 mt-1">09:35</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teaching-300"
              />
              <button className="bg-teaching-300 text-white p-2 rounded-lg hover:bg-teaching-400 transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mensagens;
