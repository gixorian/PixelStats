const config = {
  type: 'radar',
  data: data,
  options: {
    scales: {
      r: {
        max: 200,
        min: 0,
        angleLines: {
          color: 'black'
        },
        ticks: {
            stepSize: 50
        },
        pointLabels: {
          font:{
            size: 20,
            family: 'impact'
          }
        }
      }
    },
    responsive: false,
    elements: {
      line: {
        tension: 0,
        borderWidth: 3
      }
    }
  },
};
