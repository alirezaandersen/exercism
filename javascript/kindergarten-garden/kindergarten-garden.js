var DEFAULT_STUDENTS = [ 'Alice', 'Bob', 'Charlie', 'David', 'Eve',
		'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

var Garden = function(garden, students){
  /* A Kindergarden plant garden */
  students ? students.sort(): (students = DEFAULT_STUDENTS);
	garden = garden.split('\n').map(MakeRow);
};

function MakeRow(row) {
	/* Converts a row of plant letters to an array of plants */
  plant_map = {'C': 'clover', 'G': 'grass', 'R': 'radishes', 'V': 'violets'};
return row.split('').map( function(plant) { return plant_map[plant]; });
}

function StudentsGarden(garden, position) {
	/* The plants owned by an individual student */

}

module.exports = Garden;
