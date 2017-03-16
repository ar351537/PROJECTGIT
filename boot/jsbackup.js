var fs=require('fs');
var ln = require('readline').createInterface({
  input: fs.createReadStream('Food.csv')
});

var country = ['Netherlands', 'Canada', 'United Kingdom' , 'United States' , 'Australia' , 'France' , 'Germany' , 'Spain', 'South Africa'];
var data=[],final_c=[];
var indexSugar=0,indexSalt=0,indexCountry=0,countryv = 0,sugar = 0,salt = 0,i=0;
var sugarv = Array(9).fill(0);
var saltv = Array(9).fill(0);

ln.on('line', function (line) {
  data=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);


while(i<1) {
    indexCountry=data.indexOf('countries_en');
    indexSugar=data.indexOf('sugars_100g');
    indexSalt=data.indexOf('salt_100g');
    i++;
  }

countryv=data[indexCountry];
sugar=data[indexSugar];
salt=data[indexSalt];
   
   if(sugar=="") sugar=0;
   if(salt=="") salt=0;
   

var index=country.indexOf(countryv);
     if(index!=-1)
     {
      sugarv[index]+=parseFloat(sugar);
      saltv[index]+=parseFloat(salt);
    }
});

ln.on('close', function() {
  for(var h=0;h<country.length;h++) {
    var obj={};
    obj["country"]=country[h];
    obj["Sugar"]=sugarv[h].toFixed();
    obj["salt"]=saltv[h].toFixed();
    final_c.push(obj);
    //console.log(country[h]+" "+sugarv[h]+" "+saltv[h]);
     }
console.log(JSON.stringify(final_c));
});