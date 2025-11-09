import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BotaoPersonagens() {
  return (
    <section className="py-5 bg-white border-top border-bottom">
      <div className="container text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold mb-3 text-danger">
            <Users
              size={32}
              className="me-2 mb-1"
              style={{ verticalAlign: "middle" }}
            />
            Personagens
          </h2>

          <p className="lead text-muted mb-5">
            Conheça os personagens principais e explore suas cartas, artigos e
            entrevistas exclusivas.
          </p>

          <Link to="/personagens" style={{ textDecoration: "none" }}>
            <motion.div
              className="btn btn-lg shadow-lg text-white d-inline-flex align-items-center justify-content-center px-5 py-3"
              style={{
                background: "linear-gradient(135deg, #c62828, #8e0000)",
                border: "none",
                borderRadius: "2rem",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Users
                size={24}
                className="me-2"
                style={{ verticalAlign: "middle" }}
              />
              Ver Personagens
              <ArrowRight
                size={22}
                className="ms-2"
                style={{ verticalAlign: "middle" }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
