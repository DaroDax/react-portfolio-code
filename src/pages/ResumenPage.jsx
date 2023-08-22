import React from 'react'
import Aboutme from '../assets/json/aboutme.json';

export const ResumenPage = () => {
    let experiences = Object.values(Aboutme.experiences);

    let skills = Object.values(Aboutme.programs);

    let education = Object.values(Aboutme.education);

    return (
        <div>
            <div className="container p-4 resumeContainer">
                <div className="row">

                    <div className="col-md-6 col-12 name">
                        <div className='m-3'><img src="./src/assets/img/nbd-logo.jpg" alt="NBD-logo" className='nbd-logo' /></div>
                        <div className="nombre"><h1 className='h1 fw-bold'>Nicolay Barrientos</h1></div>
                        <div className="lenguajes d-flex my-3">
                            <div><i className="h3 fa-brands fa-html5"></i></div>
                            <div><i className="h3 fa-brands fa-css3-alt ms-2"></i></div>
                            <div><i className="h3 fa-brands fa-js ms-2"></i></div>
                            <div><i className="h3 fa-brands fa-react ms-2"></i></div>
                            <div><i className="h3 fa-brands fa-php ms-2"></i></div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 contact">
                        <div className="contactList m-0 d-flex justify-content-end flex-column">
                            <div className='contactItems'><a href="https://wa.me/573027490686" target="_blank"><span className='hidden-text'>Whatsapp</span><i className="h3 fa-brands fa-whatsapp ms-2"></i></a></div>
                            <div className='contactItems'><a href="mailto:nickdevbarrientos@gmail.com" target="_blank"><span className='hidden-text'>Gmail</span><i className="h3 fa-regular fa-envelope ms-2"></i></a></div>
                            <div className='contactItems'><a href="https://github.com/DaroDax" target="_blank"><span className='hidden-text'>Github</span><i className="h3 fa-brands fa-github ms-2"></i></a></div>
                            <div className='contactItems'><a href="https://www.linkedin.com/in/nicolay-barrientos-dev/" target="_blank"><span className='hidden-text'>LinkedIn</span><i className="h3 fa-brands fa-linkedin ms-2"></i></a></div>
                            <div className='contactItems'><a href="https://www.instagram.com/tso.lab/" target="_blank"><span className='hidden-text'>Instagram</span><i className="h3 fa-brands fa-instagram ms-2"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-4 bg-light text-dark">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 fw-bold mb-2">
                            Sobre mi<span className='text-info'>__</span>
                        </h2>
                        <p className='text-secondary p-2'>
                            Apasionado desarrollador web con un enfoque en la creación de experiencias digitales
                            excepcionales. Mi experiencia abarca desde la programación en JavaScript y React, con conocimiento en backend con PHP y MySQL hasta
                            el diseño UX/UI.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container p-4 light" style={{ background: '#131313' }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 fw-bold mb-4">
                            Experiencia<span className='text-info'>__</span>
                        </h2>
                        <div className="row">
                            {

                                experiences.map(experience => {
                                    return (
                                        <div className="col-md-6 col-12 py-3" key={experiences.indexOf(experience)}>
                                            <div className='p-2'>
                                                <h3 className='h4 text-info'>{experience.position}</h3>
                                                <h4 className='h6 text-secondary fw-bold text-uppercase'>{experience.company}, {experience.time}</h4>
                                                <ul>
                                                    <li>{experience.functions[0]}</li>
                                                    <li>{experience.functions[1]}</li>

                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-4 bg-light text-dark">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 fw-bold mb-2">
                            Habilidades<span className='text-info'>__</span>
                        </h2>
                        <div className="row">
                            {
                                skills.map(skill => {
                                    return (
                                        <div className="col-md-6 col-12" key={skills.indexOf(skill)}>
                                            <li className="h6 text-secondary p-3">
                                                {skill.language}
                                                <div className="progress rounded-1" style={{ height: "10px" }}>
                                                    <div className="progress-bar" role="progressbar" aria-label="Example 1px high" style={{ width: skill.percent }} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100">{skill.percent}</div>
                                                </div>
                                            </li>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-4 light" style={{ background: '#131313' }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 fw-bold mb-4">
                            Educación<span className='text-info'>__</span>
                        </h2>
                        <div className="row">
                            {

                                education.map(title => {
                                    return (
                                        <div className="col-md-6 col-12 py-3" key={education.indexOf(title)}>
                                            <div className='p-2 '>
                                                <h3 className='h4 '>{title.title}</h3>
                                                <h4 className='h6 text-secondary'>{title.site}</h4>
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

