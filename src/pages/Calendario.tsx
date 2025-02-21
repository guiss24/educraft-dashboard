
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const Calendario = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const eventos = [
    {
      titulo: "Aula 9º Ano A",
      tipo: "aula",
      horario: "08:00 - 09:30",
      local: "Sala 12",
      cor: "bg-blue-100 text-blue-700",
    },
    {
      titulo: "Reunião de Pais",
      tipo: "reuniao",
      horario: "10:00 - 11:00",
      local: "Auditório",
      cor: "bg-purple-100 text-purple-700",
    },
    {
      titulo: "Prova 7º Ano B",
      tipo: "avaliacao",
      horario: "13:30 - 15:00",
      local: "Sala 15",
      cor: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Calendário</h1>
            <p className="text-gray-600">
              Gerencie suas aulas, avaliações e eventos
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="col-span-2 p-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
                className="w-full"
              />
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-800">
                    {date ? format(date, "dd 'de' MMMM", { locale: ptBR }) : ""}
                  </h2>
                  <CalendarIcon size={20} className="text-gray-500" />
                </div>
                <div className="space-y-4">
                  {eventos.map((evento, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${evento.cor} space-y-2`}
                    >
                      <h3 className="font-medium">{evento.titulo}</h3>
                      <div className="flex items-center text-sm space-x-4">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{evento.horario}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{evento.local}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                  Adicionar Evento
                </h2>
                <button className="w-full bg-teaching-300 text-white px-4 py-2 rounded-lg hover:bg-teaching-400 transition-colors">
                  Novo Evento
                </button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendario;
