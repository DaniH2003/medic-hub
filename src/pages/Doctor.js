import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import longo from "@/image/logo.jpg"
import React from 'react';
const inter = Inter({ subsets: ['latin'] })
const signIn = async () => {
  //Si phantom no esta instalado
  const provider = window?.phantom?.solana;

  if (!provider?.isPhantom || !solana.isPhantom) {
      toast.error("Phantom no esta instalado");
      setTimeout(() => {
          window.open("https://phantom.app/", "_blank");
      }, 2000);
      return;
  }

  //Si phantom esta instalado
  let phantom;
  if (provider?.isPhantom) phantom = provider;

  const { publicKey } = await phantom.connect(); //conecta a phantom
  console.log("publicKey", publicKey.toString()); //muestra la publicKey
  setPublicKey(publicKey.toString()); //guarda la publicKey en el state
  window.localStorage.setItem("publicKey", publicKey.toString()); //guarda la publicKey en el localStorage

  toast.success("Tu Wallet esta conectada 👻");

  getBalances(publicKey);
};
export default function Home() {
  return (
    <div>
            
        <Image
          src={longo}
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
            <div className="flex flex-col place-items-center justify-center">
               <h1>Formulario</h1>
               
               <p>Formulario para Doctor👻</p>
               <form>
                <lable>Nombre</lable>
                <input type="text"/>
                <lable>Apellidos</lable>
                <input type="text"/>
                <lable>Especialidad</lable>
                <input type="text"/>
                <lable>Cedula</lable>
                <input type="text"/>
               </form>
                            <br/>
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
                                onClick={() => {
                                  signIn();
                                    location.href="/"
                                }}
                            >
                                Registrar😁👻
                            </button>
                        </div>

    </div>
  )
}
