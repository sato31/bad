import React from 'react'
import relojito from '../../img/spinner.gif'

const Reloj = () => {
    return (
        <img src={relojito} style={{ width: '200px', margin: 'auto', display: 'block' }} alt='Cargando...' />
    )
}

export default Reloj