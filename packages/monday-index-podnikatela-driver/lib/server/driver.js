

findCompanyDataServerCallback.push(function(search, data) {
  data = data || [];

  log('ts');
  var token = getSetting('indexPodnikatelaToken');

  if(token) {
    var companyId = parseInt(search.fulltext);
    var parameter = null;
    var value = null;
    if(companyId) {
      parameter = 'ico';
      value = companyId;
    } else {
      parameter = 'nazov';
      value = search.fulltext;
    }
    var url = 'http://api.indexpodnikatela.sk/basic?' + parameter + '=' + value + '&token=' + token;

    // must run on server
    var result =  HTTP.get(url);
    var content = JSON.parse(result.content);
    log(content)

    data = content;
  }

  return data;
});
