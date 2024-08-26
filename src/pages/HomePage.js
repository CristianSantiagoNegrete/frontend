import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="../estetoscopio.png" width="300" alt="estetoscopio" />
            </div>
            <div className="columnas">
                <div classname="bienvenidos left">
<h2>Bienvenidos</h2>
<p>AAAAAAAAAA TEXTO DE EJEMPLO</p>
                </div>
            </div>
        </main>
    );
}

export default HomePage;