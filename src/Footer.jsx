import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='bg-dark rounded-bottom mb-3 p-3'>
                <div className="row align-items-center footer">
                    <div className="col-md-6 col-12 footerItem">
                        <p className='m-0 text-secondary' >© 2023 Nicolay Barrientos Developer <span className='hidden-text'> - All rights reserved. </span></p>
                    </div>

                    <div className="col-md-6 col-12 d-flex justify-content-end footerItem">

                        <a href="https://wa.me/573027490686" target="_blank" className='text-secondary'><i className="h4 fa-brands fa-whatsapp mx-3"></i></a>
                        <a href="https://github.com/DaroDax" target="_blank" className='text-secondary'><i className="h4 fa-brands fa-github mx-3"></i></a>
                        <a href="https://www.instagram.com/tso.lab/" target="_blank" className='text-secondary'><i className="h4 fa-brands fa-instagram mx-3"></i></a>

                    </div>
                </div>
            </div>
    </div>
  )
}
