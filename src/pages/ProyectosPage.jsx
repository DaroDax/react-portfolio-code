import React from 'react'
import Aboutme from '../assets/json/aboutme.json';

export const ProyectosPage = () => {
    let proyects = Object.values(Aboutme.proyects);
    console.log(proyects);
    return (
        <div>
            <div className="container p-4 light" style={{ background: '#131313' }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 fw-bold mb-4">
                            Proyectos<span className='text-info'>__</span>
                        </h2>

                        <div className="row mb-3 cards">

                            {
                                proyects.map(proyect => {
                                    return (
                                        <div className="col-md-4 px-4">
                                            <div className="card text-center bg-dark">
                                                <div className="overflow">
                                                    <img src={proyect.src} alt="Image source" className="card-img-top" />
                                                </div>
                                                <div className="card-body text-light">
                                                    <h4 className="card-title">{proyect.title}</h4>
                                                    <p className="card-text text-secondary">
                                                        {proyect.desc}
                                                    </p>

                                                </div>
                                                <div className="card-footer">
                                                    <a href={proyect.link} className="btn btn-outline-secondary rounded-0" target="_blank">
                                                        Ir al sitio.
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}