import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>BBBBBBBBBB TEXTO DE EJEMPLO</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
            <div className="personas">
                <div className="persona1">
                    <img src="../silueta doctor.webp" width="250" alt="Juan Dominguez" />
                    <h5>Juan Dominguez</h5>
                    <h6>Médico General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit neque nam orci curae faucibus taciti, magna platea bibendum diam dapibus. Felis nisl primis per ornare commodo dui blandit sapien, porttitor vestibulum facilisi placerat curabitur risus varius, lobortis vulputate rutrum est taciti urna curae.</p>
                </div>
                <div className="persona2">
                <img src="../silueta doctora.webp" width="250" alt="Paula Toledo" />
                    <h5>Paula Toledo</h5>
                    <h6>Kinesióloga y Fisioterapeuta</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit neque nam orci curae faucibus taciti, magna platea bibendum diam dapibus. Felis nisl primis per ornare commodo dui blandit sapien, porttitor vestibulum facilisi placerat curabitur risus varius, lobortis vulputate rutrum est taciti urna curae. </p>
                </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;