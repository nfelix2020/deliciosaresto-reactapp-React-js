import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Im1 from '../images/im1.jpg';
import Im7 from '../images/im7.jpg';
import Im8 from '../images/im8.jpg';
import Im9 from '../images/im9.jpg';
import Im10 from '../images/im10.jpg';
import Im11 from '../images/im11.jpg';
import Video from '../inc/video';



function Home() {
    return (
        
        <div>
            <Slider/>
            
              
            <Link to="/reservation" className="btn w-25 bg-primary shadow text-white mb-4 reserver"> Réserver</Link>
          
            <section className="section section2">
              <div className="container-fluid">
                
                {/*FIRST ROW*/ }
                <div className="row flex-column-reverse flex-sm-row"> 
                    <div className="col-md-6 text-center leftside">
                        <div>
                            <h1 className="main-heading text-center"> MENU</h1>
                            <div className="underline mx-auto"></div>
                            <p className="m-3 justify-content-center paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Link to="/menus" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link>
                        </div>
                    </div>
        
                    <div className="col-md-6 g-0 col-sm-12 im1">
                        <div>
                            <img src={Im1} class="d-block w-100 img-fluid " alt="..."/>        
                        </div>
                    </div>
                </div>
                {/* END FIRST ROW*/ }

                {/*SECOND ROW*/ }
                <div className="row "> 
                    <div className="col-md-6 g-0 col-sm-12 ">
                            <div>
                                <img src={Im7} class="d-block w-100 img-fluid " alt="..."/>        
                            </div>
                        </div>

                        <div className="col-md-6 text-center rightside">
                            <div>
                                <h1 className="main-heading text-center"> MENU</h1>
                                <div className="underline mx-auto"></div>
                                <p className="m-3 justify-content-center paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="/about" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link>
                            </div>
                        </div>
                </div>
                {/* END SECOND ROW*/ }

                

                 {/*THIRD ROW*/ }
                 <div className="row mt-4 mb-4 w-100">  
                       <div className="col-md-12 text-center">
                       <Video/> 
                       </div> 
               </div>
               {/* END THIRD ROW*/ }
               
                   {/*THIRD ROW*/ }
                   <div className="row flex-column-reverse flex-sm-row"> 
                       
                        <div className="col-md-6 text-center leftside">
                            <div>
                                <h1 className="main-heading text-center"> EVENEMENTS</h1>
                                <div className="underline mx-auto"></div>
                                <p className="m-3 justify-content-center paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="/about" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link>
                            </div>
                        </div>

                        <div className="col-md-6 g-0 col-sm-12">
                            <div className="rightside">
                                <img src={Im8} class="d-block w-100 img-fluid " alt="..."/>        
                            </div>
                        </div>

                </div>
                {/* END THIRD ROW*/ }


                 {/*THIRD ROW*/ }
                 <div className="row"> 

                       <div className="col-md-6 g-0 col-sm-12">
                           <div>
                               <img src={Im9} class="d-block w-100 img-fluid " alt="..."/>        
                           </div>
                       </div>
                       
                       <div className="col-md-6 text-center rightside">
                           <div>
                               <h1 className="main-heading text-center"> PÊCHE DURABLE</h1>
                               <div className="underline mx-auto"></div>
                               <p className="m-3 justify-content-center paragraph">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </p>
                               <Link to="/about" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link>
                           </div>
                       </div>
               </div>
               {/* END THIRD ROW*/ }


                 {/*THIRD ROW*/ }
                 <div className="row flex-column-reverse flex-sm-row"> 
                       
                       <div className="col-md-6 text-center leftside">
                           <div>
                               <h1 className="main-heading text-center"> NOS CÉRÉALES</h1>
                               <div className="underline mx-auto"></div>
                               <p className="m-3 justify-content-center paragraph">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </p>
                               <Link to="/about" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link>
                           </div>
                       </div>

                       <div className="col-md-6 g-0 col-sm-12">
                           <div>
                               <img src={Im10} class="d-block w-100 img-fluid " alt="..."/>        
                           </div>
                       </div>
               </div>
               {/* END THIRD ROW*/ }

             {/*THIRD ROW*/ }
             <div className="row"> 

                       <div className="col-md-6 g-0 col-sm-12">
                           <div>
                               <img src={Im11} class="d-block w-100 img-fluid mt-5 " alt="..."/>        
                           </div>
                       </div>

                       <div className="col-md-6 text-center rightside">
                           <div>
                               <h1 className="main-heading text-center"> NOS CAFÉS</h1>
                               <div className="underline mx-auto"></div>
                               <p className="m-3 justify-content-center paragraph">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </p>
                               <Link to="/about" className="btn w-25 bg-dark shadow text-white mb-4"> Détails</Link>
                           </div>
                       </div>

                     
               </div>
               {/* END THIRD ROW*/ }

              </div>
          </section>
        
        </div>
    )
}

export default Home
