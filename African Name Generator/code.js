console.clear();
console.log("Plugin started");

const africanNames = {
  Nigeria: {
    male: {
      first: [
        "Oluwaseun",
        "Chidi",
        "Emeka",
        "Olumide",
        "Babatunde",
        "Adebayo",
        "Chukwu",
        "Oluwadamilare",
        "Ikenna",
        "Obinna",
      ],
      last: [
        "Adebayo",
        "Okafor",
        "Nnamani",
        "Okonkwo",
        "Eze",
        "Nwosu",
        "Obioma",
        "Afolayan",
        "Oludare",
        "Adeyemi",
      ],
    },
    female: {
      first: [
        "Oluwaseyi",
        "Chioma",
        "Ngozi",
        "Folake",
        "Yewande",
        "Adebola",
        "Oluwadamilola",
        "Chizoba",
        "Adaobi",
        "Oluwakemi",
      ],
      last: [
        "Adekunle",
        "Nwosu",
        "Okoli",
        "Adeyemi",
        "Okafor",
        "Okonkwo",
        "Nnamani",
        "Adebayo",
        "Ogunde",
        "Oladipo",
      ],
    },
  },
  Kenya: {
    male: {
      first: [
        "Kamau",
        "Ochieng",
        "Kipchoge",
        "Mutua",
        "Njoroge",
        "Wekesa",
        "Odhiambo",
        "Otieno",
        "Kimani",
        "Munyao",
      ],
      last: [
        "Muthomi",
        "Odhiambo",
        "Wanjiru",
        "Kimani",
        "Maina",
        "Ngugi",
        "Ochieng",
        "Mutua",
        "Kariuki",
        "Njoroge",
      ],
    },
    female: {
      first: [
        "Wanjiku",
        "Akinyi",
        "Nyambura",
        "Atieno",
        "Muthoni",
        "Njeri",
        "Wangari",
        "Adhiambo",
        "Awuor",
        "Nekesa",
      ],
      last: [
        "Muthomi",
        "Odhiambo",
        "Wanjiru",
        "Kimani",
        "Maina",
        "Ngugi",
        "Ochieng",
        "Mutua",
        "Kariuki",
        "Njoroge",
      ],
    },
  },
  Ghana: {
    male: {
      first: [
        "Kwame",
        "Kofi",
        "Kwesi",
        "Akwasi",
        "Kojo",
        "Yaw",
        "Kwabena",
        "Fiifi",
        "Ato",
        "Nii",
      ],
      last: [
        "Mensah",
        "Osei",
        "Owusu",
        "Boateng",
        "Agyeman",
        "Ansah",
        "Adjei",
        "Danso",
        "Kumi",
        "Appiah",
      ],
    },
    female: {
      first: [
        "Ama",
        "Akua",
        "Yaa",
        "Adwoa",
        "Abena",
        "Afua",
        "Afia",
        "Akosua",
        "Esi",
        "Efua",
      ],
      last: [
        "Mensah",
        "Osei",
        "Owusu",
        "Boateng",
        "Agyeman",
        "Ansah",
        "Adjei",
        "Danso",
        "Kumi",
        "Appiah",
      ],
    },
  },
  SouthAfrica: {
    male: {
      first: [
        "Thabo",
        "Sipho",
        "Mandla",
        "Bongani",
        "Themba",
        "Lunga",
        "Mduduzi",
        "Sibusiso",
        "Thabiso",
        "Nkosi",
      ],
      last: [
        "Nkosi",
        "Ndlovu",
        "Khumalo",
        "Dlamini",
        "Zulu",
        "Mkhize",
        "Mbatha",
        "Molefe",
        "Mokoena",
        "Tshabalala",
      ],
    },
    female: {
      first: [
        "Nomvula",
        "Thandi",
        "Nokuthula",
        "Zanele",
        "Nonhlanhla",
        "Ntombifuthi",
        "Lungile",
        "Busisiwe",
        "Nompumelelo",
        "Lindiwe",
      ],
      last: [
        "Nkosi",
        "Ndlovu",
        "Khumalo",
        "Dlamini",
        "Zulu",
        "Mkhize",
        "Mbatha",
        "Molefe",
        "Mokoena",
        "Tshabalala",
      ],
    },
  },
  Ethiopia: {
    male: {
      first: [
        "Abebe",
        "Kebede",
        "Desta",
        "Girma",
        "Mulugeta",
        "Tadesse",
        "Yohannes",
        "Getachew",
        "Alemayehu",
        "Tesfaye",
      ],
      last: [
        "Tadesse",
        "Bekele",
        "Demissie",
        "Negash",
        "Tesfaye",
        "Assefa",
        "Abebe",
        "Tekle",
        "Worku",
        "Kebede",
      ],
    },
    female: {
      first: [
        "Almaz",
        "Tigist",
        "Hiwot",
        "Meskerem",
        "Yordanos",
        "Seble",
        "Rahel",
        "Meron",
        "Samrawit",
        "Bethlehem",
      ],
      last: [
        "Tadesse",
        "Bekele",
        "Demissie",
        "Negash",
        "Tesfaye",
        "Assefa",
        "Abebe",
        "Tekle",
        "Worku",
        "Kebede",
      ],
    },
  },
  Egypt: {
    male: {
      first: [
        "Ahmed",
        "Mohamed",
        "Youssef",
        "Mahmoud",
        "Hassan",
        "Omar",
        "Khaled",
        "Mostafa",
        "Ibrahim",
        "Ali",
      ],
      last: [
        "El-Sayed",
        "Hassan",
        "Mahmoud",
        "Fahmy",
        "Ibrahim",
        "Khalil",
        "Abdel",
        "Mostafa",
        "Ali",
        "Gamal",
      ],
    },
    female: {
      first: [
        "Fatima",
        "Mariam",
        "Salma",
        "Nour",
        "Layla",
        "Amina",
        "Sara",
        "Yasmin",
        "Farida",
        "Hana",
      ],
      last: [
        "El-Sayed",
        "Hassan",
        "Mahmoud",
        "Fahmy",
        "Ibrahim",
        "Khalil",
        "Abdel",
        "Mostafa",
        "Ali",
        "Gamal",
      ],
    },
  },
  Senegal: {
    male: {
      first: [
        "Mamadou",
        "Ibrahima",
        "Cheikh",
        "Abdoulaye",
        "Ousmane",
        "Aliou",
        "Amadou",
        "Babacar",
        "Modou",
        "Moussa",
      ],
      last: [
        "Ndiaye",
        "Diop",
        "Sarr",
        "Ba",
        "Gueye",
        "Fall",
        "Dieng",
        "Sow",
        "Faye",
        "Cisse",
      ],
    },
    female: {
      first: [
        "Aminata",
        "Awa",
        "Fatou",
        "Mariama",
        "Coumba",
        "Adama",
        "Khadija",
        "Safi",
        "Ndeye",
        "Bineta",
      ],
      last: [
        "Ndiaye",
        "Diop",
        "Sarr",
        "Ba",
        "Gueye",
        "Fall",
        "Dieng",
        "Sow",
        "Faye",
        "Cisse",
      ],
    },
  },
  Uganda: {
    male: {
      first: [
        "James",
        "John",
        "David",
        "Joseph",
        "Robert",
        "George",
        "Charles",
        "Henry",
        "Paul",
        "Michael",
      ],
      last: [
        "Kato",
        "Okello",
        "Lwanga",
        "Nkurunziza",
        "Bukenya",
        "Mugisha",
        "Kagwa",
        "Musiime",
        "Kintu",
        "Semakula",
      ],
    },
    female: {
      first: [
        "Mary",
        "Margaret",
        "Susan",
        "Grace",
        "Janet",
        "Christine",
        "Ruth",
        "Sarah",
        "Agnes",
        "Alice",
      ],
      last: [
        "Kato",
        "Okello",
        "Lwanga",
        "Nkurunziza",
        "Bukenya",
        "Mugisha",
        "Kagwa",
        "Musiime",
        "Kintu",
        "Semakula",
      ],
    },
  },
  Tanzania: {
    male: {
      first: [
        "Juma",
        "Hamisi",
        "Abdallah",
        "Musa",
        "Kassim",
        "Hassan",
        "Ali",
        "Jafari",
        "Said",
        "Omari",
      ],
      last: [
        "Mwinyi",
        "Kassim",
        "Juma",
        "Hassan",
        "Musa",
        "Omar",
        "Ali",
        "Abdallah",
        "Jafari",
        "Said",
      ],
    },
    female: {
      first: [
        "Asha",
        "Fatma",
        "Zainab",
        "Halima",
        "Mariam",
        "Amina",
        "Saida",
        "Rehema",
        "Farida",
        "Hawa",
      ],
      last: [
        "Mwinyi",
        "Kassim",
        "Juma",
        "Hassan",
        "Musa",
        "Omar",
        "Ali",
        "Abdallah",
        "Jafari",
        "Said",
      ],
    },
  },
  Morocco: {
    male: {
      first: [
        "Mohammed",
        "Ahmed",
        "Youssef",
        "Abdel",
        "Omar",
        "Khalid",
        "Hamza",
        "Anas",
        "Rachid",
        "Said",
      ],
      last: [
        "El-Fassi",
        "Benzekri",
        "El-Mansouri",
        "El-Yousfi",
        "El-Kadiri",
        "El-Amin",
        "Benjelloun",
        "Alaoui",
        "El-Gharbi",
        "El-Hajji",
      ],
    },
    female: {
      first: [
        "Fatima",
        "Khadija",
        "Amina",
        "Rania",
        "Nadia",
        "Hanae",
        "Siham",
        "Wafaa",
        "Meryem",
        "Soukaina",
      ],
      last: [
        "El-Fassi",
        "Benzekri",
        "El-Mansouri",
        "El-Yousfi",
        "El-Kadiri",
        "El-Amin",
        "Benjelloun",
        "Alaoui",
        "El-Gharbi",
        "El-Hajji",
      ],
    },
  },
  Cameroon: {
    male: {
      first: [
        "Jean",
        "Paul",
        "Eric",
        "Alain",
        "Joseph",
        "Emmanuel",
        "Daniel",
        "Michel",
        "Thierry",
        "Roger",
      ],
      last: [
        "Nguewa",
        "Ekomo",
        "Ewodo",
        "Njoya",
        "Tchatchouang",
        "Ngando",
        "Ndongo",
        "Mbarga",
        "Mekongo",
        "Nana",
      ],
    },
    female: {
      first: [
        "Marie",
        "Esther",
        "Sylvie",
        "Carine",
        "Martine",
        "Anne",
        "Julienne",
        "Clarisse",
        "Elodie",
        "Christelle",
      ],
      last: [
        "Nguewa",
        "Ekomo",
        "Ewodo",
        "Njoya",
        "Tchatchouang",
        "Ngando",
        "Ndongo",
        "Mbarga",
        "Mekongo",
        "Nana",
      ],
    },
  },
};

const countryCodes = {
  Nigeria: "ng",
  Kenya: "ke",
  Ghana: "gh",
  SouthAfrica: "za",
  Ethiopia: "et",
  Egypt: "eg",
  Senegal: "sn",
  Uganda: "ug",
  Tanzania: "tz",
  Morocco: "ma",
  Cameroon: "cm",
};

// Mockaroo API URL and key
const MOCKAROO_API_URL =
  "https://my.api.mockaroo.com/african_names_generator.json?key=98c86060";

// Function to fetch a random name from Mockaroo
const fetchAfricanNameFromMockaroo = async (country, gender) => {
  console.log(`Fetching name for ${country}, ${gender} from Mockaroo`);
  try {
    const response = await fetch(
      `${MOCKAROO_API_URL}&country=${country}&gender=${gender}`
    );
    if (response.ok) {
      const data = await response.json();
      const { first_name, last_name } = data[0]; // Adjust according to your schema's response
      return { first_name, last_name };
    } else {
      throw new Error(`API call failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(`API call error: ${error.message}`);
    throw error;
  }
};

// Function to generate a random name
async function generateName(country, gender, nameType) {
  console.log(`Generating name for ${country}, ${gender}, ${nameType}`);
  try {
    const { first_name, last_name } = await fetchAfricanNameFromMockaroo(
      country,
      gender
    );
    let result;
    if (nameType === "first") {
      result = first_name;
    } else if (nameType === "last") {
      result = last_name;
    } else {
      result = `${first_name} ${last_name}`;
    }
    console.log(`Generated name from Mockaroo: ${result}`);
    return result;
  } catch (error) {
    console.error(
      `API call error: ${error.message}. Falling back to local database.`
    );

    // Fallback to local database if API call fails
    const countryNames = africanNames[country];
    const genderNames = countryNames[gender];

    let result;
    if (nameType === "first") {
      result =
        genderNames.first[Math.floor(Math.random() * genderNames.first.length)];
    } else if (nameType === "last") {
      result =
        genderNames.last[Math.floor(Math.random() * genderNames.last.length)];
    } else {
      const firstName =
        genderNames.first[Math.floor(Math.random() * genderNames.first.length)];
      const lastName =
        genderNames.last[Math.floor(Math.random() * genderNames.last.length)];
      result = `${firstName} ${lastName}`;
    }
    console.log(`Generated name from local database: ${result}`);
    return result;
  }
}

// Main function to run the plugin
figma.showUI(__html__, { width: 300, height: 400 });
console.log("UI shown");

// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
  console.log("Received message from UI:", msg);
  if (msg.type === "generate-name") {
    const { country, gender, nameType } = msg;
    console.log(`Generating name for ${country}, ${gender}, ${nameType}`);
    const generatedName = await generateName(country, gender, nameType);
    console.log(`Generated name: ${generatedName}`);

    // Notify the UI that the name has been generated
    figma.ui.postMessage({ type: "name-generated", name: generatedName });
  } else if (msg.type === "insert-name") {
    const { name } = msg;

    // Check if there's a text node selected
    if (
      figma.currentPage.selection.length === 0 ||
      figma.currentPage.selection[0].type !== "TEXT"
    ) {
      figma.ui.postMessage({
        type: "error",
        message: "Please select a text layer first.",
      });
      return;
    }

    const textNode = figma.currentPage.selection[0];

    try {
      // Get the font family and style from the selected text node
      const fontName = textNode.fontName;

      // Load the font before updating the text node
      console.log(`Loading font: ${fontName.family} ${fontName.style}`);
      await figma.loadFontAsync(fontName);
      console.log("Font loaded successfully");

      // Insert the name into the selected text node
      textNode.characters = name;
      figma.ui.postMessage({
        type: "success",
        message: "Name inserted successfully!",
      });
    } catch (error) {
      figma.ui.postMessage({
        type: "error",
        message: "Error inserting name: " + error.message,
      });
    }
  }
};

console.log("Plugin setup complete");
