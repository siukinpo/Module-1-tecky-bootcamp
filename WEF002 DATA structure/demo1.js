// const str = 'Hello';
// console.log(str);
// console.log(str.substring(2));
// console.log(str.slice(2));
// console.log(typeof str.substring(2));
// console.log(typeof str.slice(2));

// const newStr = str.slice(2);
// console.log(newStr);

/*
[] human-readable format
[] The attribute should be capitalized
[] For array, you can print the content of [10,15] to comma-separated string "10,15" 
*/

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

// const capitalize = (word) => {
//   return word[0].toUpperCase() + word.substring(1);
// };
const capitalize = (word) => word[0].toUpperCase() + word.substring(1);

const hk = data[0];
for (let key in hk) {
  // console.log(capitalize(key));
  if (hk[key] instanceof Object) {
    //意思係Object and Array就留係到先
    if (Array.isArray(hk[key])) {
      //Array
      const subElement = hk[key][0];
      if (subElement instanceof Object) {
        let idx = 0;
        for (let subItem of hk[key]) {
          for (let subKey in subItem) {
            console.log(
              `${capitalize(key)}_${subKey}_${idx}: ${subItem[subKey]}`
            );
          }
          idx = idx + 1;
        }
      } else {
        if (hk[key.length] === 1) {
          console.log(`${capitalize(key)}: ${hk[key[0]]}`);
        } else if (hk[key].length === 0) {
          console.log(`${capitalize(key)}: []`);
        } else {
          const str = hk[key].join(",");
          console.log(`${capitalize(key)}: ${str}`);
        }
      }
      ///////////////////////////////////////////////////////////////////////
      //object
    } else {
      for (let subKey in hk[key]) {
        console.log(`${capitalize(key)}_${subKey}: ${hk[key][subKey]}`);
      }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  } else {
    console.log(`${capitalize(key)}: ${hk[key]}`);
  }
}
