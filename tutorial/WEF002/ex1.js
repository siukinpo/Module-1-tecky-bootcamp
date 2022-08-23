//capitalized
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

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1);
}

const hk = data[0];

//////////////////////////////////////////////////////////////////////////////////////////////////////
// for (let key in ["a", "b", "c"]) {
//   console.log(key);
// }

// // object係用唔到for of loop   , can use object.entires() , but only javascript has this function
// for (let key of ["a", "b", "c"]) {
//   console.log(key);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isObject(value) {
  return value instanceof Object;
  //呢到return出去嘅就係true or false
}

function isArray(value) {
  return Array.isArray(value);
}

function handleObject(key, value) {
  if (key === "translations") {
    for (lang_key in value) {
      console.log(`${key}_${lang_key}: ${value[lang_key]}`);
    }
  }
}

function handleArray(key, value) {
  // switch (key) {
  //   case "topLevelDomain":
  //     console.log(`${key}: ${value[0]}`);
  //     break;
  //   case "callingCodes":
  //     console.log(`${key}: ${value[0]}`);
  //     break;
  //   case "altSpellings":
  //     console.log(`${key}: ${value.join(",")}`);
  //     break;
  //   default:
  //     break;
  if (value.length === 0) {
    console.log(`${key}: []`);
    return;
  }
  //value >= 1
  if (isObject(value[0])) {
    if (isArray(value[0])) {
      //TODO: Element is an array
    } else {
      // element is an Object
      for (let obj of value) {
        for (let objKey in obj) {
          console.log(`${key}_${objKey}: ${obj[objKey]}`);
        }
      }
    }
  } else {
    console.log(`${key}: ${value.join(",")}`);
  }
}

////////////////////////////////////////////////////////////////////////////////////

for (let key in hk) {
  const value = hk[key];

  if (isObject(value)) {
    if (isArray(value)) {
      //Value is an array
      // console.log(`${key}: Array`);
      handleArray(key, value);
    } else {
      // value is an Object
      handleObject(key, value);
    }
  } else {
    // Value is some basic type, string/number/boolean
    const value = hk[key];
    console.log(`${key}: ${value}`);
  }
}
