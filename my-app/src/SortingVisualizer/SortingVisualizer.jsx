import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            arraySize: 222,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray(x = this.state.arraySize) {
        const size = Number(x) || this.state.arraySize;
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(randomIntFromIntervals(5, 1000));
        }
        this.setState({ array });
    }

    handleInputChange(event) {
        const value = Number(event.target.value);
        this.setState({ arraySize: Number.isNaN(value) ? 0 : value });
    }

    render() {
        const { array, arraySize } = this.state;
        return (
            <div>
                <div className="button-container">
                    <label>
                        Array Size: <input name="myInput" value={arraySize} onChange={this.handleInputChange} />
                    </label>
                    <button onClick={() => this.resetArray(arraySize)}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>MergeSort</button>
                    <button onClick={() => this.bubbleSort()}>BubbleSort</button>
                    <button onClick={() => this.selectionSort()}>SelectionSort</button>
                    <button onClick={() => this.pigeonholeSort()}>PigeonHoleSort</button>
                    <button onClick={() => this.quickSort()}>QuickSort</button>
                </div>
                <br></br>
                <br></br>
                <div className="array-container">
                    {array.map((value, index) => (
                        <div className="array-bar"
                            key={index}
                            style={{ height: `${value}px` }}>
                        </div>
                    ))}
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }

    mergeSort(){

    }

    bubbleSort(){

    }

    selectionSort(){

    }

    pigeonholeSort(){

    }

    quickSort(){

    }
}

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

