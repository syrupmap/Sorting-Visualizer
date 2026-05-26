import React from 'react';
import './SortingVisualizer.css';

/*
    Sorting Visualizer class from Clément Mihailescu's "Sorting Visualization Tutorial" 
    ->  https://www.youtube.com/watch?v=pFXYym4Wbkc&list=PL3lfepputJuGAaI3S7FvcBIutzHNtZ_pb&index=2 
    Great tutorial that helped me create fundtions componentDidMount, resetArray, handleInputChange, and render. 

    SortingVisualizer is a component within the App that creates the sorting visualization
*/
export default class SortingVisualizer extends React.Component {

    /* 
        Initializes the component state, including the visualized array and the array's size.
     */
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            arraySize: 222,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /*
        Make sures that when the app loads, and when the component loads for the first time, the resetArray method is called.
    */
    componentDidMount() {
        this.resetArray();
    }

    /*
        Takes a parameter of x, then creates an array of size x. For each x, the array chooses a random number between 5 and 1000. 
    */
    resetArray(x = this.state.arraySize) {
        const size = Number(x) || this.state.arraySize;
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(randomIntFromIntervals(5, 1000));
        }
        this.setState({ array });
    }

    /*
        Updates the arraySize state based on user input. If the input is invalid (not a number), sets it to 0.
    */
    handleInputChange(event) {
        const value = Number(event.target.value);
        this.setState({ arraySize: Number.isNaN(value) ? 0 : value });
    }

    /*
        Basically the html of the sortingvisualizer, defines what shows on screen
    */
    render() {
        const { array, arraySize } = this.state;
        return (
            <div>
                <div className="button-container">
                    <label>
                        Array Size: <input name="myInput" value={arraySize} onChange={this.handleInputChange} /*prevents invalid input*/ /> 
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
                <div className="array-container"
                /* 
                    For every index in the array(looped through with .map()), a bar is drawn with its value as the height
                */
                >
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

