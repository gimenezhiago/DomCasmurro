import Autor from "../components/autor";
import Grupo from "../components/grupo";
import Professora from "../components/professora";
import Resumo from "../components/resumo";
import BotaoPersonagens from "../components/botaoPersonagens";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Principal() {
  return (
    <>
      <motion.header
        className="text-white text-center py-5 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #c62828, #8e0000)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <BookOpen size={80} className="mb-3" />
          </motion.div>

          <motion.h1
            className="display-3 fw-bold mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Dom Casmurro
          </motion.h1>

          <motion.p
            className="lead fs-4 mb-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Machado de Assis
          </motion.p>
        </div>
      </motion.header>

      <main className="bg-light">
        <section className="py-5 container">
          <Professora />
        </section>

        <section className="py-5 bg-white border-top border-bottom">
          <Resumo />
        </section>

        <section className="py-5 container">
          <Autor />
        </section>

        <section className="py-5 bg-white border-top border-bottom">
          <BotaoPersonagens />
        </section>

        <section className="py-5 container">
          <Grupo />
        </section>
      </main>

      <motion.footer
        className="text-white text-center py-4 mt-5 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #8e0000, #c62828)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <p className="mb-0 fs-6">
            <BookOpen
              size={20}
              className="me-2"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            <span className="fw-semibold">
              Projeto Dom Casmurro — Literatura Brasileira 2024
            </span>
          </p>
        </div>
      </motion.footer>
    </>
  );
}
