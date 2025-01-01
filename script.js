// Continent-specific country names (175 names per continent)
const africaNames = [
  "Zarathia", "Amara", "Bashira", "Kintaro", "Ezulini", "Sihira", "Ramahara", "Dakhira", "Imara", "Mubera",
  "Nabatu", "Makaria", "Tanzira", "Banjara", "Kilara", "Jubira", "Amhara", "Kivutu", "Zubara", "Mokazi", "Zebira",
  // ... (add all the names here from the previous code you received)
];

const asiaNames = [
  "Sangara", "Kirimura", "Ashiwa", "Noryo", "Alhana", "Tanzura", "Mikora", "Khoshan", "Daisu", "Omoshi",
  "Liyuan", "Ayashi", "Rurikawa", "Kiyoshi", "Tamaru", "Zentara", "Haruka", "Fuyuki", "Shiran", "Takara", "Aomori",
  // ... (add all the names here from the previous code you received)
];

// Prefixes and suffixes
const prefixes = [
  "Republic of", "Federation of", "Kingdom of", "Empire of", "Democratic Republic of", "Union of", 
  "Confederation of", "People's", "Soviet", "Grand Duchy of", "The Free", "Dominion of", "Commonwealth of"
];

const suffixes = [
  "Islands", "Federation", "Union", "Empire", "Kingdom", "Republic", "Territory", "Republic of", 
  "State", "Confederation", "Province", "Principality", "Territory", "Nation", "Commonwealth"
];

// Function to generate random country name based on continent
const randomCountryName = (continent) => {
  let baseNames;
  if (continent === 'Africa') {
    baseNames = africaNames;
  } else if (continent === 'Asia') {
    baseNames = asiaNames;
  } else if (continent === 'Europe') {
    baseNames = europeNames;
  } else if (continent === 'North America') {
    baseNames = northAmericaNames;
  } else if (continent === 'South America') {
    baseNames = southAmericaNames;
  } else if (continent === 'Oceania') {
    baseNames = oceaniaNames;
  } else {
    baseNames = []; // Default empty array if continent is not recognized
  }

  const name = baseNames[Math.floor(Math.random() * baseNames.length)];
  const applyPrefixSuffix = Math.random() < 0.33; // 1/3 chance to apply a prefix or suffix

  if (applyPrefixSuffix) {
    const prefixOrSuffix = Math.random() < 0.5 ? "prefix" : "suffix";
    
    if (prefixOrSuffix === "prefix") {
      return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${name}`;
    } else {
      return `${name} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    }
  } else {
    return name; // No prefix or suffix
  }
};

// Example usage: generate 175 random country names for each continent
const generateRandomCountries = () => {
  const continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];
  const countryNames = {};

  continents.forEach(continent => {
    countryNames[continent] = Array.from({ length: 175 }, () => randomCountryName(continent));
  });

  return countryNames;
};

// Display country information when the button is clicked
function generateCountry() {
  const continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];
  const continent = continents[Math.floor(Math.random() * continents.length)];
  
  const countries = generateRandomCountries();
  const country = countries[continent][Math.floor(Math.random() * countries[continent].length)];

  const countryInfoDiv = document.getElementById('countryInfo');
  countryInfoDiv.innerHTML = `
    <div class="country-info">
        <div><strong>Country Name:</strong> ${country}</div>
        <div><strong>Continent:</strong> ${continent}</div>
        <div><strong>Population (Millions):</strong> ${Math.floor(Math.random() * 100) + 1}</div>
        <div><strong>GDP (Billions):</strong> ${Math.floor(Math.random() * 1000) + 10}</div>
        <div><strong>Size (mi²):</strong> ${Math.floor(Math.random() * 1000000) + 50000}</div>
        <div><strong>Government:</strong> ${Math.random() < 0.5 ? "Republic" : "Monarchy"}</div>
        <div><strong>Military Strength:</strong> ${Math.floor(Math.random() * 100000) + 10000}</div>
        <div><strong>Economy Strength:</strong> ${Math.random() < 0.5 ? "Strong" : "Weak"}</div>
    </div>
  `;
}
