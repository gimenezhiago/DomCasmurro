import { motion } from "framer-motion";
import { Users, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const membrosGrupo = [
  { nome: "Hiago Gimenez" },
  { nome: "Gabriel Istchuk" },
  { nome: "Pedro Henry" },
  { nome: "Vitor Bertolla" },
];

export default function Grupo() {
  return (
    <section className="py-5">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2
            className="text-center mb-5 fw-bold fw-bold mb-3 text-danger"
            variants={fadeIn}
          >
            <Users
              size={32}
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            Nosso Grupo
          </motion.h2>

          <div className="row g-4 justify-content-center">
            {membrosGrupo.map((membro, index) => (
              <motion.div
                key={index}
                className="col-sm-6 col-md-5 col-lg-3"
                variants={fadeIn}
              >
                <motion.div
                  className="card text-center shadow-lg border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "1rem",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="card-body py-4 d-flex flex-column align-items-center">
                    <div
                      className="text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        background: "linear-gradient(135deg, #c62828, #8e0000)"
                      }}
                    >
                      <User size={30} />
                    </div>
                    <h5 className="mb-0">{membro.nome}</h5>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
