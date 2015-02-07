

findCompanyDataServerCallback.push(function(search, data) {
  data = data || [];

  log('ts');
  var token = getSetting('indexPodnikatelaToken');

  if(token) {
    var url = 'http://api.indexpodnikatela.sk/basic?ico=' + search.companyId + '&token=' + token;

    // must run on server
    var result =  HTTP.get(url);
    console.log('api >>', result);
  }

  return data;
});
