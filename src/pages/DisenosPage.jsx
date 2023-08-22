import React from 'react'
import Aboutme from '../assets/json/aboutme.json';

export const DisenosPage = () => {
    let designs = Object.values(Aboutme.designs);
    console.log(designs);
    return (
        <div>
            <div className="container p-4 light" style={{ background: '#131313' }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 fw-bold mb-4">
                            Diseños<span className='text-info'>__</span>
                        </h2>

                        <div className="row mb-3 designs px-4">

                            {
                                designs.map(design => {
                                    return (
                                        <div className="col-md-4 col-12">

                                            <div className="design">

                                                <div className='design-desc text-center'>
                                                    <h4 className='fw-bold  py-3'>{design.title}</h4>
                                                    <p className='px-3'>{design.desc}</p>
                                                </div>

                                                <img src={design.src} alt={design.title} className='img-fluid rounded-4 design-img' />

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

