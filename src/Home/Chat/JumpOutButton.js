import React from 'react';
import jumpSVG from '../../assets/jumpout.svg'
import '../../aron.css'

const JumpOutButton = (props) => {
    return <button className="btn full-width btn-tertiary" onClick={props.onClick}> Jump Out <img className="btn-icon" src={jumpSVG} alt="Exit chat button"/></button>
}

export default JumpOutButton;
