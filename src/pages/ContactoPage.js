import React from "react";
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="Datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <div className="datos">
                    <li><div className="dato1">Teléfono:</div> 123456789</li>
                    <li><div className="dato2">Email:</div> TerapiaMolecular@TOB.com.ar</li>
                    <li><div className="dato3">Facebook:</div> Terapia_Organizativa_Biomolec._</li>
                    </div>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;