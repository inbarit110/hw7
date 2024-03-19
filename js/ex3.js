// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];


// Function to filter countries starting with the input text
function filterCountries(inputText) {
  return countryList.filter(country => country.toLowerCase().startsWith(inputText.toLowerCase()));
}

// Function to display suggestions
function displaySuggestions(suggestions) {
  const suggestionsDiv = document.getElementById('suggestions');
  suggestionsDiv.innerHTML = ''; // Clear previous suggestions

  suggestions.forEach(suggestion => {
    const suggestionElem = document.createElement('div');
    suggestionElem.classList.add('suggestion');
    suggestionElem.textContent = suggestion;

    suggestionElem.addEventListener('click', function () {
      document.getElementById('country').value = suggestion;
      suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
    });

    suggestionsDiv.appendChild(suggestionElem);
  });
}

// Function to handle input change event
function handleInputChange() {
  const inputText = document.getElementById('country').value;
  const suggestions = filterCountries(inputText);
  displaySuggestions(suggestions);
}

// Add event listener to input box for input change
document.getElementById('country').addEventListener('input', handleInputChange);