import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x: this.props.box.x,
        colors: ['red', 'green', 'blue'],
    };

    

    render() {
        // console.log(this.props);
        return ( 
        <React.Fragment>
            {/* {this.props.children} */}
            <div style={this.getStyles()}>{this.toString()}</div>
            <button onClick={this.props.onClickLeft} className='btn btn-primary m-2'>left</button>
            <button onClick={this.props.onClickRight} className='btn btn-success m-2'>right</button>
            <button className='btn btn-danger m-2' onClick={() => this.props.handleRemove(this.props.box.id)}>Delete</button>
            {/* {
                this.state.colors.map(color => (
                    //遍历形式需要每一个标签加一个key
                    <div key={color}>{color}</div>  
                ))
            }

            //逻辑表达式的短路原则
            {this.state.colors.length === 3 && <p>3 Colors</p>} */}
        </React.Fragment>
        );
    }

    getStyles() {
        let styles = {
            width: 50,
            height: 50,
            backgroundColor: "lightblue",
            color: "white",
            lineHeight: "50px",
            textAlign: "center",
            borderRadius: "5px",
            marginLeft: this.props.box.x,
        }

        if(this.props.box.x === 0) styles.backgroundColor = "orange";

        return styles;
    }

    toString() {
        const x = this.props.box.x;
        return `x:${x}`;
    }
}

export default Box;