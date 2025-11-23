import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, FileText, MessageSquare, ArrowLeft, X, Users } from "lucide-react";
import { Link } from "react-router-dom";
import personagens from "../components/personagensText.ts";

// Interfaces
interface TextoConteudo {
  titulo: string;
  conteudo: string;
}

interface Personagem {
  id: number;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  cor: string;
  textos: {
    carta: TextoConteudo;
    artigo: TextoConteudo;
    entrevista: TextoConteudo;
  };
}

interface TextoSelecionado extends TextoConteudo {
  tipo: "carta" | "artigo" | "entrevista";
}

type TipoTexto = "carta" | "artigo" | "entrevista";

// Configurações de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Configurações dos botões
const BOTOES_CONFIG = [
  { 
    tipo: "carta" as const, 
    label: "Carta", 
    icone: Mail, 
    gradient: "from-red-500 to-rose-600" 
  },
  { 
    tipo: "artigo" as const, 
    label: "Artigo", 
    icone: FileText, 
    gradient: "from-rose-500 to-pink-600" 
  },
  { 
    tipo: "entrevista" as const, 
    label: "Entrevista", 
    icone: MessageSquare, 
    gradient: "from-pink-500 to-red-600" 
  },
];

// Componente principal
export default function Personagens() {
  const [personagemSelecionado, setPersonagemSelecionado] = useState<Personagem | null>(null);
  const [textoSelecionado, setTextoSelecionado] = useState<TextoSelecionado | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  // Funções de manipulação
  const abrirTexto = (personagem: Personagem, tipo: TipoTexto) => {
    setPersonagemSelecionado(personagem);
    setTextoSelecionado({
      tipo,
      titulo: personagem.textos[tipo].titulo,
      conteudo: personagem.textos[tipo].conteudo,
    });
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTimeout(() => {
      setTextoSelecionado(null);
      setPersonagemSelecionado(null);
    }, 300);
  };

  const getIcone = (tipo: TipoTexto) => {
    switch (tipo) {
      case "carta": return Mail;
      case "artigo": return FileText;
      case "entrevista": return MessageSquare;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 py-10">
      <div className="container mx-auto px-6">
        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
          >
            <ArrowLeft size={20} />
            Voltar para Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl">
              <Users size={36} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">
              Personagens
            </h1>
          </motion.div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conheça os personagens principais e explore suas histórias através de{" "}
            <span className="font-semibold text-red-600">cartas</span>,{" "}
            <span className="font-semibold text-rose-600">artigos</span> e{" "}
            <span className="font-semibold text-pink-600">entrevistas</span> exclusivas.
          </p>
        </motion.div>

        {/* Grid de Personagens */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {personagens.map((personagem) => (
            <motion.div
              key={personagem.id}
              className="flex"
            >
              <motion.div
                className="group flex-1 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col h-full text-center">
                  {/* Avatar */}
                  <motion.div
                    className="relative mb-5 mx-auto"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: personagem.cor }}
                    >
                      <User size={48} className="text-white drop-shadow-sm" />
                    </div>
                  </motion.div>

                  {/* Informações */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{personagem.nome}</h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">{personagem.nomeCompleto}</p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {personagem.descricao}
                  </p>

                  {/* Botões de ação */}
                  <div className="space-y-3 mt-auto">
                    {BOTOES_CONFIG.map(({ tipo, label, icone: Icone, gradient }) => (
                      <motion.button
                        key={tipo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full flex items-center justify-center gap-3 py-3 px-4 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200`}
                        onClick={() => abrirTexto(personagem, tipo)}
                      >
                        <Icone size={18} />
                        {label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalAberto && textoSelecionado && personagemSelecionado && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={fecharModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/30"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              {/* Header do Modal */}
              <div 
                className="flex items-center justify-between p-6 text-white" 
                style={{ background: personagemSelecionado.cor }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    {(() => {
                      const Icone = getIcone(textoSelecionado.tipo);
                      return <Icone size={20} />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{textoSelecionado.titulo}</h2>
                    <p className="text-sm opacity-90">{personagemSelecionado.nome}</p>
                  </div>
                </div>
                <motion.button
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
                  whileHover={{ rotate: 90 }}
                  onClick={fecharModal}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Conteúdo do Modal */}
              <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-gray-50 to-white">
                <p className="whitespace-pre-line text-gray-700 text-base md:text-lg leading-relaxed">
                  {textoSelecionado.conteudo}
                </p>
              </div>

              {/* Footer do Modal */}
              <div className="bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/50 p-6 flex justify-center">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-black text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fecharModal}
                >
                  Fechar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}