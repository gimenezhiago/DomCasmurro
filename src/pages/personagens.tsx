import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, FileText, MessageSquare, ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import personagens from "../components/personagensText";

type Texto = {
  titulo: string;
  conteudo: string;
};

type Personagem = {
  id: number;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  cor: string;
  textos: {
    carta: Texto;
    artigo: Texto;
    entrevista: Texto;
  };
};

export default function Personagens() {
  const [personagemSelecionado, setPersonagemSelecionado] = useState<Personagem | null>(null);
  const [textoSelecionado, setTextoSelecionado] = useState<
    { tipo: "carta" | "artigo" | "entrevista"; titulo: string; conteudo: string } | null
  >(null);
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const abrirTexto = (personagem: Personagem, tipo: "carta" | "artigo" | "entrevista") => {
    setPersonagemSelecionado(personagem);
    setTextoSelecionado({ tipo, ...personagem.textos[tipo] });
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTimeout(() => {
      setTextoSelecionado(null);
      setPersonagemSelecionado(null);
    }, 300);
  };

  const getIconeTipo = (tipo?: string) => {
    switch (tipo) {
      case "carta":
        return <Mail size={20} />;
      case "artigo":
        return <FileText size={20} />;
      case "entrevista":
        return <MessageSquare size={20} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <Link
          to="/"
          className="btn text-white mb-4 shadow"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "none",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={20} className="me-2" style={{ display: "inline-block", verticalAlign: "middle" }} />
          Voltar
        </Link>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-5">
          <h1 className="display-4 text-white mb-3">🎭 Personagens</h1>
          <p className="lead text-white">Conheça os personagens principais e seus textos</p>
        </motion.div>

        <div className="row g-4">
          {Array.isArray(personagens) &&
            personagens.map((personagem: Personagem, index: number) => (
              <motion.div
                key={personagem.id}
                className="col-12 col-md-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="card h-100 shadow-lg"
                  style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)", border: "none" }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "100px", height: "100px", background: personagem.cor }}
                      >
                        <User size={50} className="text-white" />
                      </div>
                      <h3 className="mb-1">{personagem.nome}</h3>
                      <p className="text-muted small mb-0">{personagem.nomeCompleto}</p>
                    </div>

                    <p className="text-muted text-center mb-4" style={{ fontSize: "0.9rem" }}>
                      {personagem.descricao}
                    </p>

                    <div className="d-grid gap-2">
                      <motion.button
                        type="button"
                        className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => abrirTexto(personagem, "carta")}
                      >
                        <Mail size={18} className="me-2" />
                        Carta
                      </motion.button>

                      <motion.button
                        type="button"
                        className="btn btn-outline-success d-flex align-items-center justify-content-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => abrirTexto(personagem, "artigo")}
                      >
                        <FileText size={18} className="me-2" />
                        Artigo de Opinião
                      </motion.button>

                      <motion.button
                        type="button"
                        className="btn btn-outline-info d-flex align-items-center justify-content-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => abrirTexto(personagem, "entrevista")}
                      >
                        <MessageSquare size={18} className="me-2" />
                        Entrevista
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {modalAberto && textoSelecionado && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{ background: "rgba(0, 0, 0, 0.7)", zIndex: 9999, backdropFilter: "blur(5px)" }}
            onClick={fecharModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card shadow-lg"
              style={{
                maxWidth: "800px",
                width: "100%",
                maxHeight: "80vh",
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(10px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="card-header text-white d-flex justify-content-between align-items-center"
                style={{ background: personagemSelecionado?.cor ?? undefined }}
              >
                <div className="d-flex align-items-center">
                  {getIconeTipo(textoSelecionado?.tipo)}
                  <h5 className="mb-0 ms-2">{textoSelecionado?.titulo}</h5>
                </div>
                <button className="btn btn-link text-white p-0" onClick={fecharModal} style={{ textDecoration: "none" }}>
                  <X size={24} />
                </button>
              </div>

              <div className="card-body p-4" style={{ overflowY: "auto", maxHeight: "calc(80vh - 120px)" }}>
                <div className="mb-3 text-center">
                  <span className="badge text-white px-3 py-2" style={{ background: personagemSelecionado?.cor }}>
                    {personagemSelecionado?.nome}
                  </span>
                </div>
                <div style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>{textoSelecionado?.conteudo}</div>
              </div>

              <div className="card-footer bg-light text-center">
                <button className="btn btn-secondary" onClick={fecharModal}>
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )


} 