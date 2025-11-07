import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Resumo() {
  return (
    <section className="py-5">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-4">
              <FileText size={32} className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}} />
              Resumo do Livro
            </h2>
            <motion.div 
              className="card shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: 'none'
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-body p-4">
                <p>
                  <strong>Dom Casmurro</strong> é um romance publicado em 1899, narrado por Bento Santiago, 
                  apelidado de Bentinho na juventude. Já na velhice, ele decide escrever suas memórias para 
                  "atar as duas pontas da vida".
                </p>
                <p>
                  A história gira em torno de seu amor de infância por <strong>Capitolina (Capitu)</strong>, 
                  vizinha e amiga que se tornaria sua esposa. O relacionamento é marcado por obstáculos, 
                  incluindo a promessa de sua mãe de torná-lo padre.
                </p>
                <p>
                  O ponto central da narrativa é a <strong>suspeita de traição</strong> que consome Bentinho. 
                  Ele acredita que Capitu o traiu com seu melhor amigo, Escobar, e que seu filho Ezequiel 
                  seria fruto dessa suposta relação.
                </p>
                <p className="mb-0">
                  A genialidade de Machado está em nunca revelar a verdade: <strong>Capitu traiu ou não?</strong> 
                  O leitor precisa decidir por si mesmo, analisando a narrativa de um homem ciumento e obcecado.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
