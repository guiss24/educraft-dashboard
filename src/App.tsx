
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Turmas from "./pages/Turmas";
import Diario from "./pages/Diario";
import Calendario from "./pages/Calendario";
import Relatorios from "./pages/Relatorios";
import Mensagens from "./pages/Mensagens";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/turmas" element={<Turmas />} />
          <Route path="/diario" element={<Diario />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/mensagens" element={<Mensagens />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
