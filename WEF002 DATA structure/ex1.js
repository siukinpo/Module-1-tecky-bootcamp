const data = [
  {
    name: "Hong Kong",
    topLevelDomain: [".hk"],
    alpha2Code: "HK",
    alpha3Code: "HKG",
    callingCodes: ["852"],
    capital: "City of Victoria",
    altSpellings: ["HK", "香港"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 7324300,
    latlng: [22.25, 114.16666666],
    demonym: "Chinese",
    area: 1104.0,
    gini: 53.3,
    timezones: ["UTC+08:00"],
    borders: ["CHN"],
    nativeName: "香港",
    numericCode: "344",
    currencies: [
      {
        code: "HKD",
        name: "Hong Kong dollar",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
      {
        iso639_1: "zh",
        iso639_2: "zho",
        name: "Chinese",
        nativeName: "中文 (Zhōngwén)",
      },
    ],
    translations: {
      de: "Hong Kong",
      es: "Hong Kong",
      fr: "Hong Kong",
      ja: "香港",
      it: "Hong Kong",
      br: "Hong Kong",
      pt: "Hong Kong",
      nl: "Hongkong",
      hr: "Hong Kong",
      fa: "هنگ‌کنگ",
    },
    flag: "https://restcountries.eu/data/hkg.svg",
    regionalBlocs: [],
    cioc: "HKG",
  },
];

// console.log(Array.isArray(data));

const dataObject = data[0];
// console.log(typeof data1);
// console.log(Array.isArray(data1));

// console.log(data1 instanceof Array);
//////////////////////////////////////////////////////////////
//    dataString = dataObject[data].toString();
function humanRead(dataObject) {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  // const capitalize(word)=>word[0].toUpperCase()+word.substring(1)

  for (let dataKey in dataObject) {
    if (dataObject[dataKey] instanceof Array) {
      for (let dataProperty of dataObject[dataKey]) {
        if (dataProperty instanceof Object) {
          for (let insideKey in dataProperty) {
            console.log(
              capitalize(dataKey) +
                "_" +
                insideKey +
                ": " +
                dataProperty[insideKey]
            );
          }
        } else {
          dataProperty.toString();
          console.log(capitalize(dataKey) + ": " + dataObject[dataKey]);
          break;
        }
      }
    } else {
      if (dataObject[dataKey] instanceof Object) {
        if (dataObject[dataKey].length === 0) {
          console.log(`${capitalize(dataKey)}: []`);
        }

        for (let insideKey in dataObject[dataKey]) {
          console.log(
            capitalize(dataKey) +
              "_" +
              insideKey +
              ": " +
              dataObject[dataKey][insideKey]
          );
        }
      } else if (dataObject[dataKey].length === 0) {
        console.log(`${capitalize(dataKey)}: []`);
      } else {
        console.log(capitalize(dataKey) + ": " + dataObject[dataKey]);
      }
    }
  }
}

humanRead(dataObject);

// for (let dataKey in dataObject) {
//   if (dataObject[dataKey] instanceof Array) {
//     for (let dataProperty of dataObject[dataKey]) {
//       if (dataProperty instanceof Object) {
//         for (let insideKey in dataProperty) {
//           console.log(
//             dataKey.substring(0, 1).toLocaleUpperCase() +
//               dataKey.substring(1) +
//               '_' +
//               insideKey +
//               ': ' +
//               dataProperty[insideKey]
//           );
//         }
//       } else {
//         dataProperty.toString();
//         console.log(
//           dataKey.substring(0, 1).toLocaleUpperCase() +
//             dataKey.substring(1) +
//             ': ' +
//             dataObject[dataKey]
//         );
//         break;
//       }
//     }
//   } else {
//     if (dataObject[dataKey] instanceof Object) {
//       for (let insideKey in dataObject[dataKey]) {
//         console.log(
//           dataKey.substring(0, 1).toLocaleUpperCase() +
//             dataKey.substring(1) +
//             '_' +
//             insideKey +
//             ': ' +
//             dataObject[dataKey][insideKey]
//         );
//       }
//     } else {
//       console.log(
//         dataKey.substring(0, 1).toLocaleUpperCase() +
//           dataKey.substring(1) +
//           ': ' +
//           dataObject[dataKey]
//       );
//     }
//   }
// }
