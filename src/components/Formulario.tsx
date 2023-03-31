import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.getId()
    const [nome, setNome] = useState(props.cliente?.getNome() ?? '');
    const [idade, setIdade] = useState(props.cliente?.getIdade() ?? '');
    return (
        <div>{id ? (
            <Entrada
                somenteLeitura
                texto="Código"
                valor={id}
            />
        ) : false}
        <Entrada 
            texto="Nome" 
            valor={nome}
            valorMudou={setNome}
        />
        <Entrada 
            texto="Idade" 
            tipo="number" 
            valor={idade}
            valorMudou={setIdade}
        />
        </div>
    )
}