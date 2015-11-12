var subjects = [
    'Science',
    'Technology',
    'Engineering',
    'Math'
];

var curriculum = function() {
   subjects.forEach(function(subject) {
       console.log(`I am taking ${subject}.`);
   });
};

module.exports = curriculum;