var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
   
  fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));