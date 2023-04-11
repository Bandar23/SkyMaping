let planetarium6;
S(document).ready(function() {

	planetarium6 = S.virtualsky({
		id: 'starmap6',
		projection: 'stereo',
		clock:new Date("July 17, 2019 18:39:00 GMT")
	});

	planetarium6.addPointer({
		'ra':83.8220792,
		'dec':-5.3911111,
		'label':'Orion Nebula',
		'img':'http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=5.58813861333333&de=-5.3911111&angle=1.25&output=PNG',
		'url':'http://simbad.u-strasbg.fr/simbad/sim-id?Ident=M42',
		'credit':'Wikisky',
		'colour':'rgb(255,220,220)'
	})

});