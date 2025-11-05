import { motion } from "framer-motion";
import { GraduationCap, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Professora() {
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
          <h2 className="text-center mb-4 text-white">
            <GraduationCap
              size={32}
              className="me-2"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            Sobre a Professora
          </h2>
          <motion.div
            className="card shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "none",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-3 text-center mb-3 mb-md-0">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      background:
                        "red",
                    }}
                  >
                    <User size={60} className="text-white" />
                  </div>
                </div>
                <div className="col-md-9">
                  <h4>Profa. Dra. Mariana Rodrigues</h4>
                  <p className="text-muted mb-0">
                    Especialista em Literatura Brasileira do século XIX, com
                    doutorado pela USP. Dedica-se ao estudo da obra de Machado
                    de Assis há mais de 15 anos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
