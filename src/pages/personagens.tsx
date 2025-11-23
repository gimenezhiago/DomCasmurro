import { useState } from "react";
import { User, Mail, FileText, MessageSquare, ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";

const personagens = [
  {
    id: 1,
    nome: "Bentinho",
    nomeCompleto: "Bento Santiago",
    descricao: "Narrador e protagonista da obra, advogado que relata sua vida marcada pelo ciúme e pela dúvida sobre a fidelidade de Capitu.",
    cor: "#764ba2",
    textos: {
      carta: {
        titulo: "Carta de Bentinho para Capitu",
        conteudo: "Minha querida Capitu,\n\nEscrevo estas linhas com o coração apertado, lutando contra pensamentos que não me dão sossego. Cada gesto teu, cada olhar, tudo em ti me encanta e me atormenta ao mesmo tempo.\n\nSerá possível que este amor que sinto seja correspondido com a mesma intensidade? Os teus olhos de ressaca me arrastam para um mar de dúvidas e certezas conflitantes.\n\nPromete-me que seremos sempre um só, que nada nos separará, nem mesmo as minhas próprias inseguranças.\n\nTeu para sempre,\nBentinho"
      },
      artigo: {
        titulo: "Análise: O Ciúme de Bentinho",
        conteudo: "O ciúme de Bentinho é o motor narrativo de Dom Casmurro. Machado de Assis constrói um narrador não confiável, cuja perspectiva distorcida pela possessão amorosa e pelo ressentimento contamina toda a narrativa.\n\nO protagonista projeta suas próprias inseguranças na relação com Capitu, interpretando cada gesto, cada palavra, cada silêncio como possíveis indícios de traição. Essa obsessão revela não apenas um amor doentio, mas também questões mais profundas sobre poder, gênero e controle nas relações do século XIX.\n\nA pergunta que permanece é: Capitu traiu Bentinho ou ele destruiu seu casamento com suas próprias mãos?"
      },
      entrevista: {
        titulo: "Entrevista: Bentinho aos 54 anos",
        conteudo: "Repórter: Sr. Bento, o senhor decidiu escrever suas memórias. Por quê?\n\nBentinho: Precisava dar sentido ao que vivi. Atar as duas pontas da vida, como digo no livro. Reconstruir o que foi... ou o que penso que foi.\n\nRepórter: E sobre Capitu? Por que essa necessidade de revisitar o passado?\n\nBentinho: (silêncio longo) Capitu... ela me persegue até hoje. Aqueles olhos de ressaca não me abandonam. Preciso saber, preciso entender o que aconteceu.\n\nRepórter: O senhor não acha que poderia ter dialogado mais com ela na época?\n\nBentinho: (desvia o olhar) Talvez. Mas algumas certezas são mais confortáveis que dúvidas dolorosas."
      }
    }
  },
  {
    id: 2,
    nome: "Capitu",
    nomeCompleto: "Capitolina Pádua",
    descricao: "Esposa de Bentinho, mulher inteligente e de personalidade forte, conhecida por seus famosos 'olhos de ressaca'.",
    cor: "#f5576c",
    textos: {
      carta: {
        titulo: "Carta de Capitu para Bentinho",
        conteudo: "Meu querido Bentinho,\n\nTuas dúvidas me ferem mais do que qualquer palavra dura poderia ferir. Será que não vês o quanto te amo? Será que meus olhos, que tanto dizes admirar, não te mostram a verdade do meu coração?\n\nCada dia ao teu lado é uma luta contra fantasmas que só tu vês. Não sei mais o que fazer para te provar minha lealdade, meu amor, minha devoção.\n\nPeço apenas que confies em mim, como eu sempre confiei em ti.\n\nTua sempre fiel,\nCapitu"
      },
      artigo: {
        titulo: "Capitu: Vítima ou Vilã?",
        conteudo: "A personagem Capitu é uma das mais controversas da literatura brasileira. Machado de Assis cria uma mulher complexa, inteligente e enigmática, que desafia as convenções de seu tempo.\n\nSeus 'olhos de ressaca' tornam-se símbolo de sedução e mistério, mas também podem ser lidos como a projeção das inseguranças masculinas sobre a sexualidade feminina. Capitu é punida não por um crime comprovado, mas pela suspeita, pela possibilidade, pela ameaça que representa ao controle patriarcal.\n\nA narrativa de Bentinho nos priva da voz de Capitu, condenando-a ao silêncio. Cabe ao leitor questionar: até que ponto conhecemos a verdadeira Capitu?"
      },
      entrevista: {
        titulo: "Entrevista: A Voz de Capitu",
        conteudo: "Repórter: Sra. Capitolina, como a senhora se sente sendo lembrada apenas através das palavras de Bentinho?\n\nCapitu: É uma injustiça. Minha vida, minha verdade, meus sentimentos foram filtrados pelo olhar de um homem que já não confiava em mim. Como posso me defender se minha voz foi silenciada?\n\nRepórter: E sobre a suposta traição?\n\nCapitu: (com firmeza) Nunca traí Bentinho. Amei-o profundamente. Mas amor sem confiança é prisão, não é união.\n\nRepórter: Se pudesse falar diretamente com ele hoje, o que diria?\n\nCapitu: Diria que destruiu nossa família por orgulho e insegurança. E que seus olhos nunca viram além de suas próprias sombras."
      }
    }
  },
  {
    id: 3,
    nome: "Escobar",
    nomeCompleto: "Ezequiel de Sousa Escobar",
    descricao: "Melhor amigo de Bentinho desde o seminário, comerciante bem-sucedido e suposto amante de Capitu.",
    cor: "#00bcd4",
    textos: {
      carta: {
        titulo: "Carta de Escobar para Bentinho",
        conteudo: "Meu caro Bentinho,\n\nNossa amizade começou no seminário e floresceu ao longo dos anos. És o irmão que a vida me deu, o amigo com quem divido alegrias e tristezas.\n\nVejo-te feliz ao lado de Capitu e isso me enche de satisfação. Ela é uma mulher notável, e tu és um homem de sorte por tê-la ao teu lado.\n\nQue nossa amizade perdure para sempre, e que nossas famílias continuem unidas pelos laços do afeto e da confiança mútua.\n\nTeu amigo leal,\nEscobar"
      },
      artigo: {
        titulo: "Escobar: O Amigo Traidor?",
        conteudo: "Escobar representa na narrativa o suposto traidor, o amigo que rompe os códigos de lealdade masculina. Mas será mesmo?\n\nA construção de Escobar como vilão depende inteiramente da perspectiva de Bentinho, um narrador cuja confiabilidade é questionável. Escobar é descrito como inteligente, carismático e bem-sucedido - características que poderiam ter despertado inveja em Bentinho.\n\nA morte prematura de Escobar por afogamento impede qualquer defesa ou esclarecimento. Ele se torna o vilão perfeito: morto, impossibilitado de falar, existindo apenas na memória distorcida de um homem consumido pelo ciúme.\n\nSeria Escobar realmente culpado ou apenas mais uma vítima das obsessões de Bentinho?"
      },
      entrevista: {
        titulo: "Entrevista: Sancha fala sobre Escobar",
        conteudo: "Repórter: Sra. Sancha, como era seu marido Escobar?\n\nSancha: Ezequiel era um homem íntegro, trabalhador, dedicado à família. Um amigo leal que valorizava profundamente sua amizade com Bentinho.\n\nRepórter: E sobre as acusações...\n\nSancha: (interrompendo) Mentiras! Invenções de uma mente doentia. Meu marido jamais trairia a confiança de seu melhor amigo. Jamais!\n\nRepórter: A senhora tem certeza?\n\nSancha: Absoluta. Conheço o homem com quem fui casada. As suspeitas de Bentinho mataram mais que meu marido - mataram também nossa amizade e a felicidade de duas famílias."
      }
    }
  }
];

export default function Personagens() {
  const [modalAberto, setModalAberto] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState(null);
  const [tipoTexto, setTipoTexto] = useState(null);

  const abrirModal = (personagem, tipo) => {
    setPersonagemAtual(personagem);
    setTipoTexto(tipo);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const IconeBotao = ({ tipo }) => {
    if (tipo === "carta") return <Mail size={16} />;
    if (tipo === "artigo") return <FileText size={16} />;
    if (tipo === "entrevista") return <MessageSquare size={16} />;
    return null;
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
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#b91c1c"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#dc2626"}
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

              {/* Botões */}
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => abrirModal(personagem, "carta")} style={{
                  flex: 1,
                  padding: "10px 15px",
                  backgroundColor: "#dc2626",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <IconeBotao tipo="carta" />
                  Carta
                </button>

                <button onClick={() => abrirModal(personagem, "artigo")} style={{
                  flex: 1,
                  padding: "10px 15px",
                  backgroundColor: "#f43f5e",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <IconeBotao tipo="artigo" />
                  Artigo
                </button>

                <button onClick={() => abrirModal(personagem, "entrevista")} style={{
                  flex: 1,
                  padding: "10px 15px",
                  backgroundColor: "#ec4899",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <IconeBotao tipo="entrevista" />
                  Entrevista
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalAberto && personagemAtual && tipoTexto && (
        <div onClick={fecharModal} style={{
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
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            backgroundColor: "white",
            borderRadius: "20px",
            maxWidth: "800px",
            width: "100%",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
          }}>
            
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
                  {personagemAtual.textos[tipoTexto].titulo}
                </h2>
                <p style={{ fontSize: "14px", opacity: 0.9 }}>
                  {personagemAtual.nome}
                </p>
              </div>
              <button onClick={fecharModal} style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "8px",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
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
                {personagemAtual.textos[tipoTexto].conteudo}
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
              <button onClick={fecharModal} style={{
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
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#000"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1f2937"}
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