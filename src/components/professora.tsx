import { motion } from "framer-motion";
import { GraduationCap, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Professora() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold mb-5 text-danger">
            <GraduationCap
              size={32}
              className="me-2 mb-1"
              style={{ verticalAlign: "middle" }}
            />
            Sobre a Professora
          </h2>

          <motion.div
            className="card border-0 shadow-lg mx-auto"
            style={{
              maxWidth: "800px",
              background: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="card-body p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                    style={{
                      width: "130px",
                      height: "130px",
                      background: "linear-gradient(135deg, #c62828, #8e0000)",
                    }}
                  >
                    <User size={64} className="text-white" />
                  </div>
                </div>

                <div className="col-md-8">
                  <h4 className="fw-semibold mb-2">
                    Profa. Dra. Mariana Rodrigues
                  </h4>
                  <p className="text-muted mb-0 lh-lg">
                    Especialista em Literatura Brasileira do século XIX, com
                    doutorado pela USP. Dedica-se ao estudo da obra de Machado
                    de Assis há mais de 15 anos, inspirando alunos a compreender
                    as nuances sociais e psicológicas presentes em suas obras.
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
