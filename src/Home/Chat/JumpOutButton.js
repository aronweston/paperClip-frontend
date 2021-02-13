import React from 'react';

const JumpOutButton = (props) => {
    console.log(props);
    return (
        <div>
            <button className="btn btn-tertiary" onClick={props.jumpOut}> Jump Out Button</button>
        </div>
    );
}

export default JumpOutButton;
