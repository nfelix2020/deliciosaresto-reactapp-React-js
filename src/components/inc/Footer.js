import React from 'react';
import {Link} from 'react-router-dom';

function footer() {
    return (
        

        <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                                
                    <div className="col-md-6 ">
                        <h6>Liens Utiles</h6>
                        <hr/>
                        <div> <Link to="/">Acceuil</Link></div>
                        <div> <Link to="about">A Propos de Nous</Link></div>
                        <div> <Link to="reservation">Réserver</Link></div>
                        <div> <Link to="/contact">Contacts</Link></div>

                    </div>

                    <div className="col-md-6 ">
                        <h6>Contactez-Nous</h6>
                        <hr/>
                            2 Rue Gaspard Coriolis  <br/>
                            37200 Tours <br/>
                            France
                            <h6>**************************</h6>
                            Télephone: +33753675586 
                            <h6>**************************</h6>
                            Email: info@deliciosa.com / nfelix2020@yahoo.com
                        
                    </div>

                    </div>
                </div>
            </section>
                    



















    )
}

export default footer
