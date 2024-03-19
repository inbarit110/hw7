// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};


// Function to populate the house dropdown list
function populateHouseDropdown() {
  const houseDropdown = document.getElementById('house');

  houses.forEach(house => {
    const option = document.createElement('option');
    option.value = house.code;
    option.textContent = house.name;
    houseDropdown.appendChild(option);
  });

  // Add event listener to the dropdown to show characters on selection change
  houseDropdown.addEventListener('change', showCharacters);
}

// Function to show characters of the selected house
function showCharacters() {
  const selectedHouseCode = document.getElementById('house').value;
  const charactersList = document.getElementById('characters');
  charactersList.innerHTML = ''; // Clear previous list

  if (selectedHouseCode) {
    const characters = getCharacters(selectedHouseCode);
    characters.forEach(character => {
      const listItem = document.createElement('li');
      listItem.textContent = character;
      charactersList.appendChild(listItem);
    });
  }
}

// Populate the house dropdown during page load
populateHouseDropdown();