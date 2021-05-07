import React from 'react';
import Im13 from '../images/im13.jpg';

function Reservation() {
    return (
        <div>
            <section className="section">
        <div className="container">
            <div className="card shadow">            
                <div className="card-body ">
                <div className="row">
                <div className="col-md-6 border-right">
                    <h2>Réservez votre place chez DELICIOSA</h2>
                    <hr/>
                        <div className="form-group mb-3">
                           
                            <input type="text"  className="form-control"   placeholder="Votre Nom et Prénom"/>                       
                        </div>
                        <div className="form-group mb-3">
                           
                            <input type="text"  className="form-control"   placeholder="Votre numéro de téléphone"/>                       
                        </div>
                        <div className="form-group mb-3">
                          
                            <input type="text"  className="form-control"   placeholder="Votre adresse email"/>                       
                        </div>

                        <div className="form-group mb-3">
                            <input type="date"  className="form-control"   placeholder="Date de réservation"/>                       
                        </div>
                        <div className="form-group mb-3">
                            <input type="number"  className="form-control"   placeholder="Nombre de personnes"/>                       
                        </div>
                        <div className="form-group mb-3">                      
                            <textarea rows="3" className="form-control"   placeholder="Avez-vous d'autres précisions?"></textarea>
                        </div>

                        <div className="form-group py-3">                      
                            <button type="button"  className="btn btn-primary shadow w-100">Réserver</button>
                        </div>

                        <h2>Réservez par Téléphone</h2>

                        <div className="form-group py-3">                      
                            <button type="button"  className="btn btn-dark shadow w-50">+33753675586</button>
                        </div>
                    </div>

                    <div className="col-md-6 g-0 col-sm-12 im1">
                        <div>
                            <img src={Im13} class="d-block w-100 img-fluid " alt="..."/>        
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </section>
            
        </div>
    )
}

export default Reservation
