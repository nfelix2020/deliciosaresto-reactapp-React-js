import React from 'react'

function Contact() {
    return (
<div>
    <section className="section">
        <div className="container">
            <div className="card shadow">            
                <div className="card-body ">
                <div className="row">
                <div className="col-md-6 border-right">
                    <h2>Contactez-nous</h2>
                    <hr/>
                        <div className="form-group">
                            <label className="mb-1">Nom et Prénom</label>
                            <input type="text"  className="form-control"   placeholder="Votre Nom et Prénom"/>                       
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Téléphone</label>
                            <input type="text"  className="form-control"   placeholder="Votre numéro de téléphone"/>                       
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Email</label>
                            <input type="text"  className="form-control"   placeholder="Votre adresse email"/>                       
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Message</label>                       
                            <textarea rows="3" className="form-control"   placeholder="Saisissez votre message"></textarea>
                        </div>

                        <div className="form-group py-3">                      
                            <button type="button"  className="btn btn-primary shadow w-100">Envoyer</button>
                        </div>
                    </div>

                    <div className="col-md-6 text-center border-start">
                       <div className="main-heading-contact text-center">Contacts</div>
                        <div className="underline"></div>
                        <p>
                        <span className="contact mb-3">Adresse</span>: <br/>  
                            2 Rue Gaspard Coriolis  <br/>
                            37200 Tours <br/>
                            France
                        </p>
                        <p>
                           <span className="contact">Télephone</span>: +3375675586 <br/>  
                        </p>

                        <p>
                           <span className="contact">Email</span>: nfelix2020@yahoo.com <br/>  
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</div>

    )
}

export default Contact
