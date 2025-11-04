import { motion } from "framer-motion";
import { BookOpen, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Autor() {
  return (
    <section className="py-5">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-white">
            <BookOpen
              size={32}
              className="me-2"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            Sobre o Autor
          </h2>
          <motion.div
            className="card shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "none",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  <div
                    className="text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      background:
                        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    }}
                  >
                    <User size={80} />
                  </div>
                  <h5>Joaquim Maria Machado de Assis</h5>
                  <p className="text-muted">1839 - 1908</p>
                </div>
                <div className="col-md-8">
                  <p>
                    <strong>Machado de Assis</strong> é considerado o maior
                    escritor brasileiro de todos os tempos e um dos maiores da
                    literatura mundial.
                  </p>
                  <p>
                    Fundador da Academia Brasileira de Letras, Machado
                    revolucionou a literatura brasileira com sua narrativa
                    inovadora, ironia refinada e profunda análise psicológica
                    dos personagens.
                  </p>
                  <h6 className="mt-4">Principais Obras:</h6>
                  <ul>
                    <li>Memórias Póstumas de Brás Cubas (1881)</li>
                    <li>Quincas Borba (1891)</li>
                    <li>Dom Casmurro (1899)</li>
                    <li>Esaú e Jacó (1904)</li>
                    <li>Memorial de Aires (1908)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
