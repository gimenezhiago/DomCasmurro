import { motion } from "framer-motion";
import { BookOpen, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Autor() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold mb-5 text-danger">
            <BookOpen
              size={32}
              className="me-2 mb-1"
              style={{ verticalAlign: "middle" }}
            />
            Sobre o Autor
          </h2>

          <motion.div
            className="card border-0 shadow-lg mx-auto"
            style={{
              maxWidth: "900px",
              background: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="card-body p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                    style={{
                      width: "150px",
                      height: "150px",
                      background: "linear-gradient(135deg, #c62828, #8e0000)",
                    }}
                  >
                    <User size={80} className="text-white" />
                  </div>
                  <h5 className="fw-semibold mt-3 mb-1">
                    Joaquim Maria Machado de Assis
                  </h5>
                  <p className="text-muted">1839 – 1908</p>
                </div>

                <div className="col-md-8">
                  <p className="lh-lg">
                    <strong>Machado de Assis</strong> é amplamente considerado o
                    maior escritor brasileiro de todos os tempos e uma das
                    figuras mais importantes da literatura mundial.
                  </p>
                  <p className="lh-lg">
                    Fundador da <strong>Academia Brasileira de Letras</strong>,
                    Machado revolucionou a literatura brasileira com sua
                    narrativa inovadora, ironia refinada e profunda análise
                    psicológica dos personagens.
                  </p>

                  <h6 className="fw-bold mt-4 mb-3 text-danger">
                    Principais Obras:
                  </h6>
                  <ul className="mb-0 lh-lg">
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
