import React from 'react';
import Im13 from '../images/im13.jpg';

function About() {
    return (
<div>
        <section className="py-4 bg-info">
            <div className="container-fluid">
            {/*FIRST ROW*/ }
            <div className="row flex-column-reverse flex-sm-row"> 
                    <div className="col-md-6 text-center leftside">
                        <div>
                            <h1 className="main-heading text-center"> A PROPOS DE NOUS</h1>
                            <div className="underline mx-auto"></div>
                            <p className="m-3 justify-content-center paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            {/* <Link to="/about" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link> */}
                        </div>
                    </div>
        
                    <div className="col-md-6 g-0 col-sm-12 im1">
                        <div>
                            <img src={Im13} class="d-block w-100 img-fluid " alt="..."/>        
                        </div>
                    </div>
                </div>
                {/* END FIRST ROW*/ }
            </div>
        </section>
       
</div>
    )
}

export default About
