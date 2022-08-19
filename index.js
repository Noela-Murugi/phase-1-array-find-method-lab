// code your solution here


//trials
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];

  function colorFilter(collection, color) {
    for (const user of collection) {
      if (user.favoriteColor === color) {
        console.log(user.firstName);
      }
    }
  }

  colorFilter(users, "Red");


//************************************************************************
//lab solution
const record = [
    {
        year: "2015",
        result: "W"
    },
    {
        year: "2014",
        result: "N/A",
    },
    {
        year: "2013",
        result: "L",
    },
  ];

// function superbowlWin (records){
//     for (const record of records) {
//     if( record.result === "W"){
//         console.log(record.year);
//      }
//    }
// }


superbowlWin(record);

function superbowlWin(allRecord) {
    let records = allRecord.find(element => element.result === "W");
    // return records.year;
    if (typeof records === 'object') {
                return records.year;
            }
}
