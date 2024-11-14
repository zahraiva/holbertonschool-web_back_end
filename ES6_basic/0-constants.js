export function taskFirst() {
    const task1 = 'I prefer const when I can.';
    return task1;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
    return combination;
  }
