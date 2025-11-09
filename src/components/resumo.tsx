import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Resumo() {
  return (
    <section className="py-5 bg-white border-top border-bottom">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold mb-5 text-danger">
            <FileText
              size={32}
              className="me-2 mb-1"
              style={{ verticalAlign: "middle" }}
            />
            Resumo do Livro
          </h2>

          <motion.div
            className="card border-0 shadow-lg mx-auto"
            style={{
              maxWidth: "850px",
              background: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="card-body p-4 p-md-5">
              <p className="lh-lg">
                <strong>Dom Casmurro</strong> é um romance publicado em{" "}
                <strong>1899</strong>, narrado por <strong>Bento Santiago</strong>,
                apelidado de <em>Bentinho</em> na juventude. Já na velhice, ele decide
                escrever suas memórias para “atar as duas pontas da vida”.
              </p>

              <p className="lh-lg">
                A história gira em torno de seu amor de infância por{" "}
                <strong>Capitolina (Capitu)</strong>, vizinha e amiga que se
                tornaria sua esposa. O relacionamento é marcado por obstáculos,
                incluindo a promessa de sua mãe de enviá-lo ao seminário.
              </p>

              <p className="lh-lg">
                O ponto central da narrativa é a{" "}
                <strong>suspeita de traição</strong> que consome Bentinho. Ele
                acredita que Capitu o traiu com seu melhor amigo,{" "}
                <strong>Escobar</strong>, e que seu filho Ezequiel seria fruto
                dessa suposta relação.
              </p>

              <p className="lh-lg mb-0">
                A genialidade de <strong>Machado de Assis</strong> está em
                nunca revelar a verdade:{" "}
                <strong>Capitu traiu ou não?</strong> O leitor é convidado a
                decidir por si mesmo, analisando a narrativa de um homem
                profundamente ciumento e possivelmente paranoico.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
