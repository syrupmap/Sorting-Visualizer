export const MergeSort = array => {
    if (array.size() <= 1){
        return array;
    }
    let half = array.size()/2;
    const firstHalf = MergeSort(array.splice(0, half));
    const secondHalf = MergeSort(array.splice(half, -1));
    if (array.size() == 2) {
        
    }

    
}