import React from 'react';
import PropTypes from 'prop-types';

const Autonomia = (props) => {

    return (
        <ul>
            <li>Carga rápida en estación de repostaje: {props.km}</li>
        </ul>
    )
}

Autonomia.propTypes = {
    km: PropTypes.number,
}

export default Autonomia;