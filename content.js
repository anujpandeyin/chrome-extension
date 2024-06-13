// Function to generate a random email from the given name
function generateEmail(name) {
    const domain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const randomDomain = domain[Math.floor(Math.random() * domain.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    const email = name.toLowerCase().replace(/\s/g, '') + `${randomNumber}@` + randomDomain;
    return email;
  }
  
  // Function to generate a random date in the format ddmmyyyy from 1 January 2023 to today
  function generateRandomDate() {
    const startDate = new Date('2023-01-01');
    const endDate = new Date();
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const year = randomDate.getFullYear();
    return `${day}${month}${year}`;
  }
  
  // Function to fill name, email, and date fields with generated values
  function fillFields(event) {
    const nameArray = ["Kolawole", "Ebuka", "Boniface", "Surajo", "Afeez", "Morgan", "Tawa", "Noble", "Badamasi", 
  "Hammed", "Sikiru", "Chibueze", "Maureen", "Chibuzor", "Dupe", "Adeyemi", "Abel", "Ayodeji", 
  "Macdonald", "Cosmos", "Eze", "Onyinye", "Mamman", "Mark", "Nafisat", "Bashar", "Nasir", 
  "Sandra", "Onyewuchi", "Sadi", "Hafsatu", "Georgewill", "Bitrus", "Yemi", "Ogbonda", "Hawau", 
  "Raphael", "Njobuanwu", "Azunwena", "Iheoma", "Danlami", "Fatsuma", "Olufemi", "Adeniyi", "Rhoda", 
  "Tanimu", "Dorathy", "Aina", "Chiamaka", "Mabel", "Olubunmi", "Eucharia", "Judith", "Risikat", 
  "Titus", "Asabe", "Omolola", "Waheed", "Alaba", "Cletus", "Dennis", "Sagir", "Magret", "Thankgod", 
  "Tanko", "Ernest", "Edwin", "Martina", "Fatimoh", "Sherifat", "Simeon", "Dominic", "Isaiah", 
  "Abayomi", "Oluwaseyi", "Sada", "Kelachi", "Uzoma", "Chizorum", "Bamidele", "Taofeek", "Bulus", 
  "Tolulope", "Udeme", "Funmilola", "Ummaru", "Safiyanu", "Modinat", "Ugochi", "Bawa", "Goodluck", 
  "Nike", "Abdulaziz", "Muritala", "Omotayo", "Francisca", "Olanrewaju", "Faruk", "Jumoke", "Happy", 
  "Malam", "Ndidi", "Oliver", "Martins", "Ann", "Olayemi", "Abdulhamid", "Taye", "Zara", "Olumide", 
  "Haladu", "Farida", "Nelson", "Ronke", "Bolaji", "Shola", "Sakirat", "Margret", "Tijani", 
  "Olamide", "Love", "Umma", "Luka", "Chibuzo", "Celestine", "Hashimu", "Mamuda", "Hannatu", "Mike", 
  "Muntari", "Odunayo", "Busayo", "Abdulrahaman", "Rukaiya", "Susan", "Rafiu", "Philomina", "Ummar", 
  "Halilu", "Hindatu", "Arit", "Ishaku", "Halimat", "Nancy", "Affiong", "Naziru", "Sodiq", "Serah", 
  "Serifat", "Tony", "Abdulazeez", "Jerry", "Rufai", "Zuwaira", "Dare", "Oluwasegun", "Mansir", 
  "Mojisola", "Israel", "Donatus", "Sa", "Ramota", "Ummi", "Ekaette", "Ogbonna", "Udo", 
  "Abdulmalik", "Kasimu", "Hellen", "Balarabe", "Saliu", "Ifeyinwa", "Rotimi", "Sahabi", "Yinka", 
  "Zainabu", "Goodness", "Hussaina", "Edward", "Sunny", "Ishaq", "Ebenezer", "Omowumi", "Williams", 
  "Aminatu", "Mahmud", "Mujidat", "Mutiu", "Motunrayo", "Chukwu", "Akpan", "Idongesit", "Mariya", 
  "Babagana", "Ola", "Mai", "Nil", "Labaran", "Jonah", "Musbahu", "Alfred", "Mayowa", "Kalu", 
  "Dele", "Isreal", "Abdulsalam", "Omowunmi", "Dada", "Raymond", "Mukhtar", "Wada", "Jumai", "Seyi", 
  "Anayo", "Chukwuebuka", "Ishaya", "Luba", "Sanni", "Sulaimon", "Tabitha", "Olaide", "Bako", 
  "Anietie", "Izuchukwu", "Laraba", "Goni", "Joyce", "Tawakalitu", "Falmata", "Agatha", "Fadimatu", 
  "Moshood", "Chinelo", "Benedict", "Tayo", "Franca", "Christianah", "Alh", "Dayo", "Adedayo", 
  "Nonso", "Eric", "Chinasa", "Rabiatu", "Manu", "Nazifi", "Rasheedat", "Arinze", "Kafilat", 
  "Fatimah", "Godspower", "Ayobami", "Salome", "Morufat", "Ya", "Oluwole", "Ben", "Idayat", 
  "Ukamaka", "Nicholas", "Imaobong", "Abidemi", "Shakirat", "Emma", "Itoro", "Sekinat", "Jafar", 
  "Mulikat", "Benson", "Kunle", "Oke", "Basira", "Livinus", "Yohanna", "Fatimat", "Ajoke", 
  "Ndifreke", "Hawa", "Liman", "Habibat", "Taibat", "Idiris", "Nathaniel", "Austine", "Bilyaminu", 
  "Wale", "Jafaru", "Shafaatu", "Ese", "Olufunke", "Osita", "Ebele", "Balikis", "Adesola", "Taiye", 
  "Iniobong", "Adebisi", "Reuben", "Isiyaku", "Kamilu", "Olajide", "Mathias", "Olatunji", "Oladele", 
  "Silas", "William", "Hudu", "Falilat", "Silifat", "Christy", "Cyril", "Rapheal", "Rasidat", 
  "Angelina", "Ade", "Uba", "Godfrey", "Aderonke", "Hamidu", "Mukaila", "Rasaq", "Fidelia", "Biodun", 
  "Dalhatu", "Destiny", "Husaini", "Obi", "Samira", "Steven", "Abibat", "Chukwuka", "Alasan", 
  "Martin", "Kikelomo", "Sirajo", "Ridwan", "Olajumoke", "Alexander", "Oluchukwu", "Adeyinka", 
  "Nkiruka", "Jelili", "Hawawu", "Markus", "Edidiong", "Uju", "Fatimatu", "Chris", "Ahamed", 
  "Magdalene", "Austin", "Kamal", "Adebola", "Ladan", "Chuks", "Oluwabunmi", "Ajayi", "Olaitan", 
  "Aniefiok", "Sade", "Bintu", "Efe", "Elisha", "Jacinta", "Adams", "Nkiru", "Kadijat", "Foluke", 
  "Hamsatu", "Asuquo", "Funmi", "Muideen", "Olaniyi", "Wilson", "Godswill", "Ufuoma", "Kaka", 
  "Abbakar", "Abdulmumini", "Okafor", "Udoka", "Godiya", "Yaya", "Hasiya", "Nsikak", "Uwem", 
  "Abdulrasheed", "Ubaida", "Idorenyin", "Theophilus", "Sadia", "Garuba", "Virginia", "Valentine", 
  "Adejoke", "Ramat", "Nse", "Celestina", "Halimatu", "Semiu", "Cordelia", "Saturday", "Rufus", 
  "Chinwendu", "Robert", "Clara", "Saviour", "Afolabi", "Basil", "Ai", "Olatunde", "Kasim", "Tobi", 
  "Oluwatobi", "Saidat", "Chidimma", "Aniekan", "Maxwell", "Amaechi", "Faiza", "Memunat", "Sikirat", 
  "Justice", "Sidi", "Lubabatu", "Bulama", "Obioma", "Abass", "Shamsiya", "Olakunle", "Enobong", 
  "Rukaya", "Julianah", "Ene", "Atim", "Franklin", "Khalid", "Nafisatu", "Awawu", "Zahrau", 
  "Suliyat", "Nkechinyere", "Dickson", "Abdulrazak", "Okwudili", "Sagiru", "Lekan", "Saudat", 
  "Atiku", "Odinaka", "Adaeze", "Mama", "Caleb", "Olushola", "Eniola", "Abdulwahab", "Yahya", 
  "Ogechukwu", "Ozioma", "Anita", "Lauwali", "Bernard", "Asiya", "Sidikat", "Bidemi", "Harrison", 
  "Saka", "Fasilat", "Muibat", "Irene", "Jubril", "Hanatu", "Kola", "Barnabas", "Temitayo", 
  "Zayyanu", "Musibau", "Hajiya", "Success", "Kufre", "Dayyabu", "Kolo", "Malami", "Sadiat", 
  "Sylvanus", "Uchechi", "Haliru", "Kuburat", "Ejiro", "Maina", "Princess", "Kennedy", "Victory", 
  "Abdulkareem", "Olanike", "Emily", "Sambo", "Wahab", "Babayo", "Ikwo", "Mairo","Musa", "Ibrahim", "Abubakar", "Sani", "Abdullahi", "Mohammed", "Sunday", "Umar", "Emmanuel", 
  "Adamu", "Usman", "Blessing", "Aliyu", "Aisha", "Muhammed", "John", "Muhammad", "Fatima", 
  "Mary", "Esther", "Yusuf", "Ali", "Samuel", "Aminu", "Grace", "Joseph", "Hassan", "Amina", 
  "Haruna", "Salisu", "Peter", "Bello", "Garba", "Zainab", "Maryam", "Joy", "Victoria", "Kabiru", 
  "Elizabeth", "Isa", "Hadiza", "Idris", "Mercy", "Isah", "Yahaya", "Hauwa", "David", "Daniel", 
  "Ngozi", "Yakubu", "Ahmed", "Patience", "Moses", "Taiwo", "James", "Kehinde", "Rabiu", 
  "Victor", "Mustapha", "Friday", "Shehu", "Nura", "Bala", "Comfort", "Lawal", "Godwin", "Emeka", 
  "Monday", "Paul", "Ahmad", "Ifeanyi", "Michael", "Nasiru", "Anthony", "Christiana", "Aishatu", 
  "Saidu", "Abba", "Dauda", "Solomon", "Umaru", "Florence", "Chinedu", "Halima", "Felicia", 
  "Sulaiman", "Rose", "Helen", "Ruth", "Charity", "Bashir", "Rabi", "Chinyere", "Micheal", 
  "Abiodun", "Francis", "Janet", "Glory", "Christopher", "Ikechukwu", "Sarah", "Kingsley", 
  "Stephen", "Alhaji", "Jamilu", "Deborah", "Mariam", "Chioma", "Ijeoma", "Faith", "Samson", 
  "Suleiman", "Auwal", "Alice", "Lawan", "Baba", "Muhammadu", "Ismail", "Hauwau", "Stella", 
  "Murtala", "Isaac", "Ifeoma", "Gabriel", "Joshua", "Dahiru", "Sale", "Hamza", "Funmilayo", 
  "Maria", "Nuhu", "Gloria", "Augustine", "Uche", "Patrick", "Christian", "Auwalu", "Toyin", 
  "Hajara", "Chika", "Idowu", "Uchenna", "Felix", "Oluchi", "Temitope", "Peace", "Henry", 
  "Roseline", "Habiba", "Innocent", "Yau", "Ado", "Juliet", "Obinna", "Gift", "Abdul", "Eunice", 
  "Shuaibu", "Charles", "Justina", "Aminat", "Bose", "Hamisu", "Audu", "Samaila", "Kabir", 
  "Veronica", "Jamila", "Sule", "Ayuba", "Rebecca", "Simon", "Rita", "Johnson", "Adam", "Suleman", 
  "Segun", "Favour", "Bukola", "Wasiu", "Sanusi", "Benjamin", "Lucky", "Precious", "Iyabo", 
  "Theresa", "Yunusa", "Juliana", "Abigail", "Rukayat", "Salihu", "Buhari", "Agnes", "Dorcas", 
  "Josephine", "Opeyemi", "Gambo", "Hussaini", "Sadiq", "Happiness", "Saheed", "Binta", "Mathew", 
  "Okechukwu", "Oluwaseun", "Sadiya", "Babatunde", "Babangida", "Cecilia", "Kenneth", "Bright", 
  "Salamatu", "Rosemary", "Ramatu", "Jacob", "Kayode", "Regina", "Kelechi", "Timothy", "Akeem", 
  "Hassana", "Amadu", "Ugochukwu", "Hafsat", "Onyekachi", "Ismaila", "Ezekiel", "Maimuna", "Jude", 
  "Nkechi", "Danjuma", "Amos", "Tunde", "Danladi", "Femi", "Dan", "Adama", "Basiru", "Patricia", 
  "Habibu", "Kazeem", "Angela", "Ojo", "Gbenga", "Clement", "Abu", "Adeola", "Magaji", "Aishat", 
  "Safiya", "Stanley", "Ebere", "Bassey", "Abosede", "Titilayo", "Prince", "Uchechukwu", "Racheal", 
  "Philip", "Vincent", "Vivian", "Saminu", "Tukur", "Oluwatoyin", "Chidi", "Jibrin", "Evelyn", 
  "Ogechi", "Okon", "Chinenye", "Mohammad", "Saratu", "Azeez", "Chisom", "Jimoh", "Bosede", 
  "Chukwuma", "Martha", "Funke", "Beatrice", "Abdulkadir", "Inno", "Ladi", "Adewale", "Richard", 
  "Abdulahi", "Andrew", "Kemi", "Anas", "Lydia", "Seun", "Tosin", "Tope", "Chigozie", "Anthonia", 
  "Chidinma", "Lawrence", "Oluwakemi", "Caroline", "Adebayo", "Fatai", "Promise", "Julius", 
  "Matthew", "Abraham", "Jonathan", "Kafayat", "Alhassan", "Bola", "Olalekan", "Adenike", 
  "Chukwuemeka", "Monica", "Sabiu", "Amarachi", "Adijat", "Lucy", "Paulina", "Jamiu", "Thomas", 
  "Modupe", "Fati", "Adekunle", "Amaka", "Nnamdi", "Doris", "Hannah", "Sabo", "Olayinka", 
  "Sunusi", "Lawali", "Chijioke", "Chinonso", "Bolanle", "Onyeka", "Tajudeen", "Edith", "Isiaka", 
  "Asmau", "Abbas", "Yusif", "Eno", "Festus", "Lukman", "Gladys", "Nneka", "Abiola", "Yemisi", 
  "Abdu", "Damilola", "Queen", "Augustina", "Modu", "Desmond", "Ahmadu", "Ashiru", "Bashiru", 
  "Effiong", "Margaret", "Chima", "Nana", "Nurudeen", "Hope", "Yetunde", "Loveth", "Ndubuisi", 
  "Habu", "Bukar", "Shaibu", "Onyebuchi", "Bridget", "Rejoice", "Iliyasu", "Saadatu", "Saleh", 
  "Tijjani", "Uduak", "Inusa", "Nnenna", "Shamsu", "Omolara", "Muazu", "Muktar", "Joel", "Mustafa", 
  "Chibuike", "Mubarak", "Nafiu", "Confidence", "George", "Lateef", "Rasheed", "Oluwatosin", 
  "Rashida", "Khadija", "Ada", "Chidiebere", "Rachael", "Rashidat", "Augusta", "Edet", "Cynthia", 
  "Rakiya", "Fatimo", "Jennifer", "Lilian", "Jummai", "Collins", "Fidelis", "Ayodele", "Zubairu", 
  "Chinwe", "Khadijat", "Lami", "Pius", "Tina", "Bilikisu", "Onyinyechi", "Tochukwu", "Bunmi", 
  "Chizoba", "Naomi", "Latifat", "Kudirat", "Oluwafemi", "Rachel", "Gana", "Jane", "Olawale", 
  "Isyaku", "Emem", "Tasiu", "Olusola", "Iliya", "Zakari", "Olusegun", "Elijah", "Nafisa", "Kulu", 
  "Ademola", "Kate", "Talatu", "Godson", "Frank", "Buba", "Folashade", "Monsurat", "Abimbola", 
  "Afusat", "Idi", "Alex", "Chukwudi", "Linus", "Ganiyat", "Mallam", "Ogochukwu", "Abdulrahman", 
  "Shafiu", "Mansur", "Ekene", "Ikenna", "Constance", "Yahuza", "Suwaiba", "Usaini", "Bilkisu", 
  "Ganiyu", "Fausat", "Sylvester", "Ubong", "Rukayya", "Linda", "Ejike", "Catherine", "Folake", 
  "Ime", "Charlse", "Ayo", "Jibril", "Gideon", "Saadu", "Mohammadu", "Wisdom", "Folasade", 
  "Chimezie", "Jeremiah", "Kelvin", "Anna", "Aliu", "Inuwa", "Olabisi", "Etim", "Endurance", 
  "Beauty", "Abdulkarim", "Balkisu", "Sola", "Basirat"]; // Example name array
    const nameField = document.getElementById('author'); // Assuming ID of name field is 'author'
    const emailField = document.getElementById('email'); // Assuming ID of email field is 'email'
    const dateField = document.getElementById('comment_date'); // Assuming ID of date field is 'comment_date'
  
    if (nameField && emailField && dateField) {
      if (event && event.target === nameField) {
        // Select a random name from the array and fill the name field
        const name = nameArray[Math.floor(Math.random() * nameArray.length)];
        nameField.value = name;
        // Generate email based on the selected name and fill email field
        emailField.value = generateEmail(name);
      } else if (event && event.target === dateField) {
        // Generate a random date and fill date field
        dateField.value = generateRandomDate();
      } else {
        // Fill all fields with random values
        const name = nameArray[Math.floor(Math.random() * nameArray.length)];
        nameField.value = name;
        emailField.value = generateEmail(name);
        dateField.value = generateRandomDate();
      }
    }
  }
  
  // Call fillFields when the page is loaded to initialize the fields with random values
  window.addEventListener('load', fillFields);
  
  // Function to add event listeners to name and date fields
  function addEventListeners() {
    const nameField = document.getElementById('author'); // Assuming ID of name field is 'author'
    const dateField = document.getElementById('comment_date'); // Assuming ID of date field is 'comment_date'
  
    if (nameField && dateField) {
      // Add event listener to name field to trigger fillFields function when clicked
      nameField.addEventListener('click', fillFields);
      // Add event listener to date field to trigger fillFields function when clicked
      dateField.addEventListener('click', fillFields);
    }
  }
  
  // Call addEventListeners when the page is loaded
  window.addEventListener('load', addEventListeners);
  