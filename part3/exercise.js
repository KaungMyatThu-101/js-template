// "helllo";

// Que. calculate the heightest array value

// 1
// const temperature = [2, 4, -3, 12, 0, 5];

// const calcTemp = temps => {
//   console.log(Math.max(...temperature));
// };
// calcTemp(temperature);

// 2
// const tempperatures = [2, 4, -3, 'error', 15, 0, 5];

// const calcTemp2 = temp => {
//   let max = temp[0];
//   let min = temp[0];
//   for (var i = 1; i < temp.length; i++) {
//     const currentTemp = temp[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   return `temperature differences is ${max - min} `;
// };
// const valueTemp = calcTemp2(tempperatures);
// console.log(valueTemp);

//----------------------------- Debagging

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unite: 'celsius',
    value: prompt('Pleasure enter Celsius'),
  };

  // const kelvin = measurement.value + 273;//bug
  console.log(measurement);
  console.table(measurement);
  const kelvin = parseInt(measurement.value) + 273;
  // const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
