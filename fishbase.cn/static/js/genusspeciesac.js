$(document).ready(function() {	/* Auto complete Genus */	$("input#acGenus").autocomplete({		source: "/libs/jquery/autocomplete/ac_genus.php",		minLength: 2,		autoFocus: false,		close: function(event, ui) {			$("input#acGenus").focusout();		}	});		/* Auto complete Species */	$("input#acSpecies").autocomplete({		source: "/libs/jquery/autocomplete/ac_species.php",		minLength: 2,		autoFocus: false,		close: function(event, ui) {			$("input#acGenus").focusout();		}	});});