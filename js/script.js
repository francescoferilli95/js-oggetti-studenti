/**
 * 
 *  TASKS:
 * 
 *  1. CREATE AN OBJECT WHO DESCRIBES A STUDENT, USE THREE PROPERTIES: NAME, SURNAME, AGE; LOG THE PROPERTIES OF THIS OBJECT.
 *  2. CREATE AN ARRAY OF OBJECTS ABOUT STUDENTS AND LOG NAME AND SURNAME.
 *  3. ASK THE USER TO INSERT THREE INFO, (NAME, SURNAME, AGE), CREATE A NEW OBJECT WITH THESE INFO AND ADD THIS OBJECT TO THE PREVIOUS ARRAY OF OBJECTS.
 * 
/**/


/**
 * 
 *  TASK 1
 * 
/**/

// CREATING AN OBJECT
/*/
var student = {
    "name": 'Francesco',
    surname: 'Ferilli',
    age: '25',
};
// LOG THE OBJECT
// console.log(student);


// LOOP TO LOG ALL THE OBJECT'S PROPERTIES
for( key in student) {
    console.log(student[key]);
}
*/


/**
 * 
 *  TASK 2
 * 
/**/
/*
// CREATING ARRAY OF OBJECTS
var students = [
    {
        "name": 'Francesco',
        surname: 'Ferilli',
        age: '25',
    },
    {
        "name": 'Luigi',
        surname: 'Rossi',
        age: '28',
    },
    {
        "name": 'Sara',
        surname: 'Prima',
        age: '22',
    },
    {
        "name": 'Marco',
        surname: 'Verde',
        age: '30',
    },
    {
        "name": 'Caterina',
        surname: 'Politi',
        age: '26',
    },
];
//LOG OF ALL THE ARRAY
// console.log(students);

// LOOP TO LOG ONLY TWO PROPERTIES OF THREE (NAME & SURNAME)
for(var i = 0; i < students.length; i++) {
    console.log(students[i].name + ' ' + students[i].surname);
}
*/