function addPokemon(id){

  for (var i = 0; i < data.datasets.length; i++) {
    if(data.datasets[i].id == id){
      removePokemon(id);
      return;
    }
  }

  var newData = {
    id: 16,
    label: 'Pidgey',
    data: [40, 45, 40, 35, 35, 56],
    fill: true,
    backgroundColor: 'rgba(143, 227, 111, 0.4)',
    borderColor: 'rgb(143, 227, 111)',
    pointBackgroundColor: 'rgb(143, 227, 111)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(143, 227, 111)'
  }

  data.datasets.push(newData);

  myChart.update();
}

function removePokemon(id){
  data.datasets.find((dataset, index) => {
    if (dataset.id == id) {
       data.datasets.splice(index, 1);
       return true; // stop searching
    }
  });
  myChart.update();
}
