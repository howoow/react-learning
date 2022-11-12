import React, { Component } from 'react';
import Box from './box';
const Boxes = (props) => {
    return (
        <React.Fragment>
            <button className='btn btn-info mb-2' onClick={props.onReset}>Reset</button>
            {props.boxes.map((box) => (
                <Box 
                key={box.id}
                box={box}
                handleRemove = {props.onClickRemove}
                onClickLeft = {() => props.onClickLeft(box)}
                onClickRight = {() => props.onClickRight(box)}
                >
                    {/* <h3>Box</h3>
                    <p>#{box.id}</p> */}
                </Box>
            ))}
        </React.Fragment>
    );
}
 
export default Boxes;