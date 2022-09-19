const INDICE_INTERVALOS = [
	'1', '2m', '2M', '2A', '3m', '3M', '4J', '4A', '5-', '5J', '5A', '6m', '6M', '7-', '7m', '7M'
];


const INTERVALOS = [
	['Cb', 'Dbb', 'Db', 'D', 'Ebb', 'Eb', 'Fb', 'F', 'Gbb', 'Gb', 'G', 'Abb', 'Ab', 'Bbbb', 'Bb', 'Bb'],
	['C', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'Bbb', 'Bb', 'B'],
	['C#', 'D', 'D#', 'Dx', 'E', 'E#', 'F#', 'Fx', 'G', 'G#', 'Gx', 'A', 'A#', 'Bb', 'B', 'B#'],

	['Db', 'Ebb', 'Eb', 'E', 'Fb', 'F', 'Gb', 'G', 'Abb', 'Ab', 'A', 'Bbb', 'Bb', 'Cbb', 'Cb', 'C'],
	['D', 'Eb', 'E', 'E#', 'F', 'F#', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'Cb', 'C', 'C#'],
	['D#', 'E', 'E#', 'Ex', 'F#', 'Fx', 'G#', 'Gx', 'A', 'A#', 'Ax', 'B', 'B#', 'C', 'C#', 'Cx'],

	['Eb', 'Fb', 'F', 'F#', 'Gb', 'G', 'Ab', 'A', 'Bbb', 'Bb', 'B', 'Cb', 'C', 'Dbb', 'Db', 'D'],
	['E', 'F', 'F#', 'Fx', 'G', 'G#', 'A', 'A#', 'Bb', 'B', 'B#', 'C', 'C#', 'Db', 'D', 'D#'],

	['Fb', 'Gbb', 'Gb', 'G', 'Abb', 'Ab', 'Bbb', 'Bb', 'Cbb', 'Cb', 'C', 'Dbb', 'Db', 'Ebbb', 'Ebb', 'Eb'],
	['F', 'Gb', 'G', 'G#', 'Ab', 'A', 'Bb', 'B', 'Cb', 'C', 'C#', 'Db', 'D', 'Ebb', 'Eb', 'E'],
	['F#', 'G', 'G#', 'Gx', 'A', 'A#', 'B', 'B#', 'C', 'C#', 'Cx', 'D', 'D#', 'Eb', 'E', 'E#'],

	['Gb', 'Abb', 'Ab', 'A', 'Bbb', 'Bb', 'Cb', 'C', 'Dbb', 'Db', 'D', 'Ebb', 'Eb', 'Fbb', 'Fb', 'F'],
	['G', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'Fb', 'F', 'F#'],
	['G#', 'A', 'A#', 'Ax', 'B', 'B#', 'C#', 'Cx', 'D', 'D#', 'Dx', 'E', 'E#', 'F', 'F#', 'Fx'],

	['Ab', 'Bbb', 'Bb', 'B', 'Cb', 'C', 'Db', 'D', 'Ebb', 'Eb', 'E', 'Fb', 'F', 'Gbb', 'Gb', 'G'],
	['A', 'Bb', 'B', 'B#', 'C', 'C#', 'D', 'D#', 'Eb', 'E', 'E#', 'F', 'F#', 'Gb', 'G', 'G#'],
	['A#', 'B', 'B#', 'Bx', 'C#', 'Cx', 'D#', 'Dx', 'E', 'E#', 'Ex', 'F#', 'G', 'G#', 'Gx'],

	['Bb', 'Cb', 'C', 'C#', 'Db', 'D', 'Eb', 'E', 'Fb', 'F', 'F#', 'Gb', 'G', 'Abb', 'Ab', 'A'],
	['B', 'C', 'C#', 'Cx', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'Fx', 'G', 'G#', 'Ab', 'A', 'A#']
];

const BRACO_VIOLAO = [
	[
		'F',
		'C',
		'G#/Ab',
		'D#/Eb',
		'A#/Bb',
		'F'
	],
	[
		'F#/Gb',
		'C#/Db',
		'A',
		'E',
		'B',
		'F#/Gb'
	],
	[
		'G',
		'D',
		'A#/Bb',
		'F',
		'C',
		'G'
	],
	[
		'G#/Ab',
		'D#/Eb',
		'B',
		'F#/Gb',
		'C#/Db',
		'G#/Ab'
	],
	[
		'A',
		'E',
		'C',
		'G',
		'D',
		'A'
	],
	[
		'A#/Bb',
		'F',
		'C#/Db',
		'G#/Ab',
		'D#/Eb',
		'A#/Bb'
	],
	[
		'B',
		'F#/Gb',
		'D',
		'A',
		'E',
		'B'
	],
	[
		'C',
		'G',
		'D#/Eb',
		'A#/Bb',
		'F',
		'C'
	],
	[
		'C#/Db',
		'G#/Ab',
		'E',
		'B',
		'F#/Gb',
		'C#/Db'
	],
	[
		'D',
		'A',
		'F',
		'C',
		'G',
		'D'
	],
	[
		'D#/Eb',
		'A#/Bb',
		'F#/Gb',
		'C#/Db',
		'G#/Ab',
		'D#/Eb'
	],
	[
		'E',
		'B',
		'G',
		'D',
		'A',
		'E'
	],
];

const TECLAS_BRANCAS = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
const TECLAS_PRETAS = ['C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb', 'C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb'];