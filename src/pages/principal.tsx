import Autor from '../components/autor'
import Grupo from '../components/grupo'
import Professora from '../components/professora'
import Resumo from '../components/resumo'
import { BookOpenText } from 'lucide-react'

export default function Principal() {
    return(
        <>
            <div className='max-w-4xl mx-auto text-center'>
                <BookOpenText/>
                <h1>Dom Casmurro</h1>
                <h3>Machado de Assis</h3>
                <h4>Um clássico da literatura brasileira</h4>
                <button>Explore a Obra</button>
            </div>
            <Professora/>
            <Resumo/>
            <Autor/>
            <Grupo/>
        </>
    )
}