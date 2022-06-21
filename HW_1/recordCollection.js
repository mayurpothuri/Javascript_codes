//  Your function must always return the entire record collection object.
//  If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//  If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//  If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//  If value is an empty string, delete the given prop property from the album.
//  Note: A copy of the recordCollection object is used for the tests.

//  After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
//  Passed:After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should 
//  have the string Take a Chance on Me as the last and only element.
//  Passed:After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
//  Passed:After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should 
//  have the string Addicted to Love as the last element.
//  Passed:After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 
//  1999 as the first element.
//  Passed:After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
//  Passed:After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string 
//  Riptide

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop = "", value = "") {
    if (value.length === 0) {
        if (records[id][prop] !== undefined) {
            delete records[id][prop];
        }
    }
    else {
        if (prop === "tracks" && records[id][prop] !== undefined) {
            records[id][prop].push(value);
        }
        else if (prop === "tracks" && records[id][prop] === undefined) {
            records[id][prop] = new Array(value);
        }
        else if (prop === "artist") {
            records[id][prop] = value;
        }
        else if (prop === "albumTitle") {
            records[id][prop] = value;
        }
    }
    return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection);