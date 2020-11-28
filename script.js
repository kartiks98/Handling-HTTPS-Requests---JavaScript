axios.post('https://rest-api-payment-stripe.herokuapp.com/create', {"email":"rohitsharma@gmail.com",
                                                                    "amount":30.99})
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

  axios.get('https://rest-api-payment-stripe.herokuapp.com/show')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });