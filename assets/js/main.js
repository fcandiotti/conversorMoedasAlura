function converterDolar()  {
  let valueElement = document.getElementById("valor");
  
  let value = valueElement.value;
  let valueDolar = parseFloat(value);
  
  let valueBTC = valueDolar * 12;
  let valueReal = valueDolar * 5;

  let elementValueConverter = document.getElementById('valorConvertido');
  let elementValueConverterBTC = document.getElementById('valorConvertidoBTC');
  
  let valueConverter = `O Resultado em Real é R$ ${valueReal}`;
  let valueConverterBTC = `O Resultado em BTC é R$ ${valueBTC}`;
  
  elementValueConverter.innerHTML = valueConverter;
  elementValueConverterBTC.innerHTML = valueConverterBTC;
}

function converterEuro () {
  let valueElement = document.getElementById("valor");

  let value = valueElement.value;
  let valueEuro = parseFloat(value);

  let valueReal = valueEuro * 6;
  let valueBTC = valueEuro * 12;

  let elementValueConverter = document.getElementById('valorConvertido');
  let elementValueConverterBTC = document.getElementById('valorConvertidoBTC');

  let valueConverter = `O Resultado em Euro é  ${valueReal}`;
  let valueConverterBTC = `O Resultado em BTC é R$ ${valueBTC}`;

  elementValueConverter.innerHTML = valueConverter;
  elementValueConverterBTC.innerHTML = valueConverterBTC;

}
