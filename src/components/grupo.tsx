import { motion } from "framer-motion";
import { Users, User } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const membrosGrupo = [
    { nome: "Hiago Gimenez"},
    { nome: "Gabriel Istchuk"},
    { nome: "Pedro Henry"},
    { nome: "Vitor Bertolla"},
]


export default function Grupo() {
    return(
         <section className="py-5">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 
              className="text-center mb-4"
              variants={fadeIn}
            >
              <Users size={32} className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}} />
              Nosso Grupo
            </motion.h2>
            <div className="row g-3">
              {membrosGrupo.map((membro, index) => (
                <motion.div 
                  key={index} 
                  className="col-md-6"
                  variants={fadeIn}
                >
                  <motion.div 
                    className="card shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: 'none'
                    }}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center">
                        <div 
                          className="text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: '50px',
                            height: '50px',
                            minWidth: '50px',
                            background: 'red'
                          }}
                        >
                          <User size={24} />
                        </div>
                        <div>
                          <h5 className="mb-0">{membro.nome}</h5>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    )
}