import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 222; i++) {
            array.push(randomIntFromIntervals(5, 1000));
        }
        this.setState({ array });
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                {array.map((value, index) => (
                    <div className="array-bar" 
                    key={index}
                    style={{height: `${value}px`}}>
                    </div>
                ))}
                <br></br>
                <br></br>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>MergeSort</button>
                <button onClick={() => this.bubbleSort()}>BubbleSort</button>
                <button onClick={() => this.selectionSort()}>SelectionSort</button>
                <button onClick={() => this.selectionSort()}>PigeonHoleSort</button>
                <button onClick={() => this.selectionSort()}>QuickSort</button>
            </div>
        );
    }
}

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

