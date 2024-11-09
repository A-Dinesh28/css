function increment() {
    const counter = document.getElementById("counter");
    let currentValue = parseInt(counter.value);
    counter.value = currentValue + 1;
  }
  
  function decrement() {
    const counter = document.getElementById("counter");
    let currentValue = parseInt(counter.value);
    if (currentValue > 0) {
      counter.value = currentValue - 1;
    }
  }