const config = {
  type: 'radar',
  data: data,
  options: {
    scales: {
      r: {
        max: 200,
        min: 0,
        ticks: {
            stepSize: 50
        }
      }
    },
    responsive: false,
    elements: {
      line: {
        tension: 10,
        borderWidth: 3
      }
    }
  },
};
