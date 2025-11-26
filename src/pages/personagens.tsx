import { useState } from "react";
import { User, Mail, FileText, MessageSquare, ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";

// Definindo tipos TypeScript
interface Texto {
  titulo: string;
  conteudo: string;
}

interface Personagem {
  id: number;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  cor: string;
  tipo: "carta" | "artigo" | "entrevista";
  texto: Texto;
}

const personagens: Personagem[] = [
  {
    id: 1,
    nome: "Bentinho",
    nomeCompleto: "Bento Santiago",
    descricao: "Narrador e protagonista da obra, advogado que relata sua vida marcada pelo ciúme e pela dúvida sobre a fidelidade de Capitu.",
    cor: "#764ba2",
    tipo: "carta",
    texto: {
      titulo: "Carta de Bentinho para Capitu",
      conteudo: "Minha querida Capitu,\n\nEscrevo estas linhas com o coração apertado, lutando contra pensamentos que não me dão sossego. Cada gesto teu, cada olhar, tudo em ti me encanta e me atormenta ao mesmo tempo.\n\nSerá possível que este amor que sinto seja correspondido com a mesma intensidade? Os teus olhos de ressaca me arrastam para um mar de dúvidas e certezas conflitantes.\n\nPromete-me que seremos sempre um só, que nada nos separará, nem mesmo as minhas próprias inseguranças.\n\nTeu para sempre,\nBentinho"
    }
  },
  {
    id: 2,
    nome: "Capitu",
    nomeCompleto: "Capitolina Pádua",
    descricao: "Esposa de Bentinho, mulher inteligente e de personalidade forte, conhecida por seus famosos 'olhos de ressaca'.",
    cor: "#f5576c",
    tipo: "entrevista",
    texto: {
      titulo: "Entrevista: A Voz de Capitu",
      conteudo: "Repórter: Sra. Capitolina, como a senhora se sente sendo lembrada apenas através das palavras de Bentinho?\n\nCapitu: É uma injustiça. Minha vida, minha verdade, meus sentimentos foram filtrados pelo olhar de um homem que já não confiava em mim. Como posso me defender se minha voz foi silenciada?\n\nRepórter: E sobre a suposta traição?\n\nCapitu: (com firmeza) Nunca traí Bentinho. Amei-o profundamente. Mas amor sem confiança é prisão, não é união.\n\nRepórter: Se pudesse falar diretamente com ele hoje, o que diria?\n\nCapitu: Diria que destruiu nossa família por orgulho e insegurança. E que seus olhos nunca viram além de suas próprias sombras."
    }
  },
  {
    id: 3,
    nome: "Escobar",
    nomeCompleto: "Ezequiel de Sousa Escobar",
    descricao: "Melhor amigo de Bentinho desde o seminário, comerciante bem-sucedido e suposto amante de Capitu.",
    cor: "#00bcd4",
    tipo: "artigo",
    texto: {
      titulo: "Escobar: O Amigo Traidor?",
      conteudo: "Escobar representa na narrativa o suposto traidor, o amigo que rompe os códigos de lealdade masculina. Mas será mesmo?\n\nA construção de Escobar como vilão depende inteiramente da perspectiva de Bentinho, um narrador cuja confiabilidade é questionável. Escobar é descrito como inteligente, carismático e bem-sucedido - características que poderiam ter despertado inveja em Bentinho.\n\nA morte prematura de Escobar por afogamento impede qualquer defesa ou esclarecimento. Ele se torna o vilão perfeito: morto, impossibilitado de falar, existindo apenas na memória distorcida de um homem consumido pelo ciúme.\n\nSeria Escobar realmente culpado ou apenas mais uma vítima das obsessões de Bentinho?"
    }
  }
];

// Props para o componente IconeTipo
interface IconeTipoProps {
  tipo: "carta" | "artigo" | "entrevista";
  color?: string;
}

export default function Personagens() {
  const [modalAberto, setModalAberto] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState<Personagem | null>(null);

  const abrirModal = (personagem: Personagem) => {
    setPersonagemAtual(personagem);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setPersonagemAtual(null);
  };

  const IconeTipo = ({ tipo, color = "#000" }: IconeTipoProps) => {
    if (tipo === "carta") return <Mail size={20} color={color} />;
    if (tipo === "artigo") return <FileText size={20} color={color} />;
    if (tipo === "entrevista") return <MessageSquare size={20} color={color} />;
    return null;
  };

  const getTipoTexto = (tipo: "carta" | "artigo" | "entrevista"): string => {
    if (tipo === "carta") return "Carta";
    if (tipo === "artigo") return "Artigo";
    if (tipo === "entrevista") return "Entrevista";
    return "";
  };

  const getCorBotao = (tipo: "carta" | "artigo" | "entrevista"): string => {
    if (tipo === "carta") return "#dc2626";
    if (tipo === "artigo") return "#f43f5e";
    if (tipo === "entrevista") return "#ec4899";
    return "#6b7280";
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff5f5", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Botão Voltar */}
        <button style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "30px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#b91c1c";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#dc2626";
        }}
        >
          <ArrowLeft size={20} />
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Voltar para Home
          </Link>
        </button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#1f2937", marginBottom: "10px" }}>
            Personagens
          </h1>
          <p style={{ fontSize: "18px", color: "#6b7280" }}>
            Conheça os personagens de Dom Casmurro!
          </p>
        </div>

        {/* Grid de Personagens */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {personagens.map((personagem) => (
            <div key={personagem.id} style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "all 0.3s",
              textAlign: "center"
            }}>
              
              {/* Avatar */}
              <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: personagem.cor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}>
                <User size={50} color="white" />
              </div>

              {/* Info */}
              <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937", marginBottom: "5px" }}>
                {personagem.nome}
              </h3>
              <p style={{ fontSize: "14px", color: "#9ca3af", marginBottom: "15px" }}>
                {personagem.nomeCompleto}
              </p>
              <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6", marginBottom: "25px" }}>
                {personagem.descricao}
              </p>

              {/* Tipo de Texto */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "20px",
                padding: "8px 16px",
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
                border: `2px solid ${personagem.cor}20`
              }}>
                <IconeTipo tipo={personagem.tipo} color={personagem.cor} />
                <span style={{ 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  color: personagem.cor 
                }}>
                  {getTipoTexto(personagem.tipo)}
                </span>
              </div>

              {/* Botão Único */}
              <button 
                onClick={() => abrirModal(personagem)} 
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  backgroundColor: getCorBotao(personagem.tipo),
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <IconeTipo tipo={personagem.tipo} />
                Ler {getTipoTexto(personagem.tipo).toLowerCase()}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalAberto && personagemAtual && (
        <div 
          onClick={fecharModal} 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 1000
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
            }}
          >
            
            {/* Header Modal */}
            <div style={{
              backgroundColor: personagemAtual.cor,
              color: "white",
              padding: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "5px" }}>
                  {personagemAtual.texto.titulo}
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconeTipo tipo={personagemAtual.tipo} color="white" />
                  <p style={{ fontSize: "14px", opacity: 0.9 }}>
                    {personagemAtual.nome} • {getTipoTexto(personagemAtual.tipo)}
                  </p>
                </div>
              </div>
              <button 
                onClick={fecharModal} 
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <X size={28} />
              </button>
            </div>

            {/* Conteúdo Modal */}
            <div style={{
              padding: "30px",
              overflowY: "auto",
              flex: 1,
              backgroundColor: "#f9fafb"
            }}>
              <p style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#374151",
                whiteSpace: "pre-line"
              }}>
                {personagemAtual.texto.conteudo}
              </p>
            </div>

            {/* Footer Modal */}
            <div style={{
              padding: "20px",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f9fafb"
            }}>
              <button 
                onClick={fecharModal} 
                style={{
                  padding: "12px 40px",
                  backgroundColor: "#1f2937",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#000";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#1f2937";
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}