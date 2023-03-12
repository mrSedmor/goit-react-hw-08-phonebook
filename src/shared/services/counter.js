function* createCounter() {
  for (let i = 1; ; i += 1) {
    yield i;
  }
}

const counter = createCounter();

const getId = () => counter.next().value;

export default getId;
