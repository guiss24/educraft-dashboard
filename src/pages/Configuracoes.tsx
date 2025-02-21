
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Moon,
  Sun,
  Volume2,
  Mail,
  Shield,
  Palette,
  Languages,
  HelpCircle,
} from "lucide-react";

const Configuracoes = () => {
  const configSections = [
    {
      title: "Aparência",
      icon: Palette,
      options: [
        {
          name: "Tema",
          description: "Escolha entre tema claro ou escuro",
          action: (
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="w-24">
                <Sun size={16} className="mr-2" />
                Claro
              </Button>
              <Button variant="outline" size="sm" className="w-24">
                <Moon size={16} className="mr-2" />
                Escuro
              </Button>
            </div>
          ),
        },
      ],
    },
    {
      title: "Notificações",
      icon: Bell,
      options: [
        {
          name: "Notificações por email",
          description: "Receber alertas importantes por email",
          action: (
            <Button variant="outline" size="sm">
              <Mail size={16} className="mr-2" />
              Configurar
            </Button>
          ),
        },
        {
          name: "Sons do sistema",
          description: "Ativar ou desativar sons de notificação",
          action: (
            <Button variant="outline" size="sm">
              <Volume2 size={16} className="mr-2" />
              Configurar
            </Button>
          ),
        },
      ],
    },
    {
      title: "Privacidade e Segurança",
      icon: Shield,
      options: [
        {
          name: "Alterar senha",
          description: "Atualize sua senha de acesso",
          action: (
            <Button variant="outline" size="sm">
              Alterar
            </Button>
          ),
        },
        {
          name: "Verificação em duas etapas",
          description: "Adicione uma camada extra de segurança",
          action: (
            <Button variant="outline" size="sm">
              Ativar
            </Button>
          ),
        },
      ],
    },
    {
      title: "Sistema",
      icon: Languages,
      options: [
        {
          name: "Idioma",
          description: "Escolha o idioma do sistema",
          action: (
            <Button variant="outline" size="sm">
              Português (BR)
            </Button>
          ),
        },
        {
          name: "Fuso horário",
          description: "Configure seu fuso horário",
          action: (
            <Button variant="outline" size="sm">
              UTC-3 (Brasília)
            </Button>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Configurações
            </h1>
            <p className="text-gray-600">
              Personalize sua experiência no sistema
            </p>
          </header>

          <div className="space-y-6">
            {configSections.map((section) => (
              <Card key={section.title} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <section.icon className="h-5 w-5 text-teaching-300" />
                  <h2 className="text-lg font-medium text-gray-800">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.options.map((option) => (
                    <div
                      key={option.name}
                      className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {option.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {option.description}
                        </p>
                      </div>
                      {option.action}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="text-gray-600">
              <HelpCircle size={16} className="mr-2" />
              Central de Ajuda
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configuracoes;
