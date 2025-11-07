import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BotaoPersonagens() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Personagens</h2>
          <p className="lead mb-4">
            Conheça os personagens principais e leia suas cartas, artigos e entrevistas
          </p>
          <Link to="/personagens" style={{ textDecoration: 'none' }}>
            <motion.div
              className="btn btn-lg text-white shadow-lg px-5 py-3"
              style={{
                background: 'red',
                border: 'none',
                fontSize: '1.2rem'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={24} className="me-2" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
              Ver Personagens
              <ArrowRight size={24} className="ms-2" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}