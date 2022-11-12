import React, { Component } from 'react';
import Boxes from './boxes';
import NavBar from './navbar';

class App extends Component {
    state = { 
        boxes: [
            {id: 10, x: 0},
            {id: 11, x: 1},
            {id: 12, x: 2},
            {id: 13, x: 3},
        ],
    } 

    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount() {
        console.log("App - Mounted")
    }

    handleReset = () => {
        const boxes = this.state.boxes.map(b => {
            return {
                id: b.id,
                x: 0,
            }
        });
        this.setState({boxes: boxes});
    }

    handleRemove = (id) => {
        const boxes = this.state.boxes.filter((box) => box.id !== id);
        this.setState({
            boxes: boxes
        });
    }

    handleClickLeft = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x --;
        this.setState({boxes});
        console.log(`${box.id} : ${boxes[k].x}`);
    }

    handleClickRight = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x ++;
        this.setState({boxes});
        console.log(`${box.id} : ${boxes[k].x}`);
    }
    render() { 
        console.log("App - Render");
        return (
            <React.Fragment>
                <NavBar 
                    boxesCount={this.state.boxes.filter(b => b.x !== 0).length}
                />
                <div className='container'>
                    <Boxes 
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onClickRemove={this.handleRemove}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;