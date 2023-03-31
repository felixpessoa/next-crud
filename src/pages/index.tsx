import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import React from "react";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 45, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.getNome())
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir...${cliente.getNome()}`)
  }

  return (
    // <div className={`
    //   flex h-screen justify-center items-center
    //   bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600
    // `}>
    //   <span className="text-4xl">Texto</span>
    // </div> 
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-400 to-purple-500
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="blue" className="mb-4">Novo Cliente</Botao>
        </div>
        {/* <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        /> */}
        <Formulario></Formulario>
      </Layout>
    </div >
  )
}
