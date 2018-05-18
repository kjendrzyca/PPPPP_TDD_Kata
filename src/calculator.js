export default {
  add: (input) => {
    if (!input.length) {
      return 0;
    }

    const inputLines = input.split('\n');
    const firstLine = inputLines[0];

    if (firstLine && firstLine.length && firstLine.startsWith('//')) {
      const lastIndex = firstLine.lastIndexOf('/');
      const delimiter = firstLine.substring(lastIndex + 1, firstLine.length);

      return inputLines[1]
        .split(delimiter)
        .reduce((prev, next) => prev + Number(next), 0);
    }

    let negatives = [];

    const result = input
      .split('\n')
      .join(',')
      .split(',')
      .reduce((prev, next) => {
        const parsedNext = Number(next);

        if (parsedNext < 0) {
          negatives = [...negatives, parsedNext];
        }

        return prev + parsedNext;
      }, 0);

    if (negatives.length) {
      throw new Error(`Negatives not supported ${negatives}`);
    }

    return result;
  },
};
