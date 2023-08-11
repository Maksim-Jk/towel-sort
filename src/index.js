function towelSort(matrix) {
  if (!matrix) {
    return []
  }
    if (typeof matrix[0] === "number" || matrix.length===0) {
      matrix
    }
    const result = [];
    let counter = 0;
    matrix.forEach((line) => {
        counter % 2 ? result.push(...line.reverse()) : result.push(...line);
        counter++;
    });
    return result;
}

module.exports = towelSort;
