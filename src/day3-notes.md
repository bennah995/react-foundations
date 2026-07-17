TASK 3
<!-- <button onClick={() => {
  setCount(count + 1);
  setCount(count + 1);
}}>+2</button> -->
=> In the above: both setCount calls see the same stale count

<!-- <button onClick={() => {
  setCount((c) => c + 1);
  setCount((c) => c + 1);
}}>+2</button> -->
FUNCTIONAL UPDATES
=> In he above, it adds 2 because we use the most recent state an our argument, which allows multiple updates to queue