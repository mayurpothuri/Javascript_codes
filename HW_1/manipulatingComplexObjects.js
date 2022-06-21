//  Add a new album to the myMusic array. Add artist and title strings, release_year number, 
//  and a formats array of strings.

//  myMusic should be an array
//  Passed:myMusic should have at least two elements
// Passed:The elements in the myMusic array should be objects
//  Passed:Your object in myMusic should have at least 4 properties
//  Passed:Your object in myMusic should contain the property artist which is a string
//  Passed:Your object in myMusic should contain the property title which is a string
//  Passed:Your object in myMusic should contain the property release_year which is a number
//  Passed:Your object in myMusic should contain a formats property which is an array
//  Passed:formats should be an array of strings with at least two elements

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

myMusic.push({
    "artist": "Mayur Pothuri",
    "title": "Coder",
    "release_year": 1997,
    "formats": [
        "Linux",
        "ReactJS",
        "Javascript"
    ],
});

console.log(myMusic);