
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mynewpassword",
    database: "first"
});


//  ====    ====    ====


function getRandomArbitrary(min, max) {
    // const min = 18;
    // const max = 80;
    return Math.random() * (max - min) + min;
};

// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }


//  ====    ====    ====


var arr = ["CHD", "MOHALI",
    "PATIALA", "DELHI"];

var names = [
    "Adriana C. Ocampo Uria",
    "Albert Einstein",
    "Anna K. Behrensmeyer",
    "Blaise Pascal",
    "Caroline Herschel",
    "Cecilia Payne-Gaposchkin",
    "Chien-Shiung Wu",
    "Dorothy Hodgkin",
    "Edmond Halley",
    "Edwin Powell Hubble",
    "Elizabeth Blackburn",
    "Enrico Fermi",
    "Erwin Schroedinger",
    "Flossie Wong-Staal",
    "Frieda Robscheit-Robbins",
    "Geraldine Seydoux",
    "Gertrude B. Elion",
    "Ingrid Daubechies",
    "Jacqueline K. Barton",
    "Jane Goodall"
];


//  ====    ====    ====


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    for (i = 0; i < 20; i++) {

        var age = getRandomArbitrary(18, 60);
        var randomIndex = Math.floor(Math.random() * 4);
        var address = arr[randomIndex];
        var salary = getRandomArbitrary(20000, 200000);

        var sql = "INSERT INTO CUSTOMERS(NAME, AGE, ADDRESS, SALARY) VALUES ?";
        var values = [
            [names[i], age, address, salary]
        ];

        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log(`${i}th record inserted`);
        });

        console.log("-->", i);
    }

});

//  .... END    ....