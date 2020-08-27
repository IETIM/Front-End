import React from 'react'
import '../degradados.css';

export default function Home() {
    return (
        <div>
            <div className = 'home'>
                <header>
                    <h1> Bienvenido! </h1>
                    <h3> Esta es la mejor aplicación de **** del mundo! </h3>
                </header>     
                <br></br>                
            </div>
            <div>
                    Este es un texto de prueba: <br></br>    
                    Cuando Satoshi Nakamoto dio a conocer su proyecto bitcoin, expuso en el artículo
    que era necesario hacer participar a la comunidad para lograr que el sistema fuese
    robusto y resistente a los ataques. La estrategia para lograrlo fue recompensar a los
    miembros de la comunidad con mayor capacidad de procesamiento para que
    permanezcan como nodos honestos y evitar de esta forma que utilicen dicha
    capacidad para atacar el sistema. La idea detrás del incentivo es simple, con la
    misma capacidad de cómputo es más rentable generar bitcoins de forma honesta
    que tratar de robarlos [1].
    • Ver white-paper: https://bitcoin.org/files/bitcoin-paper/bitcoin_es_latam.pdf
    ¿De dónde vienen los bitcoins?
    Hay que recordar que en el caso del dinero papel, el banco central es quien decide
    cuando imprimir y distribuirlo. Sin embargo, Bitcoin no tiene un banco central que
    los emita, sino que la circulación de nuevos bitcoins está programada para
    realizarse cada vez que se crea un bloque de transacciones validadas. A diferencia
    de la moneda papel, el bitcoin tiene una cantidad fija.
    Los mineros
    Los mineros son miembros de la red de trabajo de bitcoin que colaboran para que
    el sistema funcione de forma descentralizada. Los mineros ponen sus máquinas a
    trabajar como nodos de la red. Los nodos se encargan de guardar copias de la base
    de datos, validar las transacciones, así como cerrar y validar los bloques. 
                </div>   
        </div>
    )
}
