var browserName=navigator.appName; 
if (browserName=="Netscape")
{ 
 document.write('');
 //document.write("Hi Netscape User!");
}
else 
{ 
 if (browserName=="Microsoft Internet Explorer")
 {
  document.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
  //alert("Hi, Explorer User!");
 }
 if (browserName=="Opera")
 {
  document.write("");
  //alert("Hi, Opera User!");
 }
if (browserName=="Chrome")
 {
  document.write("");
  //alert("Hi, Chrome User!");
 }
if (browserName=="Firefox")
 {
  document.write("");
 //alert("Hi, Firefox User!");
 }
 else
  {
	document.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
	//alert("What ARE you browsing with here?");
   }
}
	
function fbtour()
{
	var ans=confirm("Manual increment?")
	if (ans)
	{OpenFullScreen('/Tour/MainTour.php');}
	else
	{OpenFullScreen('/Tour/slideshow.html');}	
}

<!-- Begin
function OpenFullScreen(page) 
{
	var yes = 1;
	var no = 0;

	var menubar = no;      // The File, Edit, View Menus
	var scrollbars = yes;   // Horizontal and vertical scrollbars
	var locationbar = no;  // The location box with the site URL
	var directories = no;  // the "What's New", "What Cool" links
	var resizable = no;    // Can the window be resized?
	var statusbar = no;    // Status bar (with "Document: Done")
	var toolbar = no;      // Back, Forward, Home, Stop toolbar

	windowprops = "width=" + (screen.width-10) + ",height=" + (screen.height-50) + ",top=0,left=0";

	windowprops += 
	(menubar ? ",menubars" : "") +
	(scrollbars ? ",scrollbars" : "") +
	(locationbar ? ",location" : "") +
	(directories ? ",directories" : "") +
	(resizable ? ",resizable" : "") +
	(statusbar ? ",status" : "") +
	(toolbar ? ",toolbar" : "");

	window.open(page, 'eli', windowprops);
}
// END -->

<!-- //Hide code from non-js browsers
//###########################################################################################
//###########################################################################################
//###########################################################################################
function IBCI_F()
{
	if (document.fn.vbrowser.value == "I")
	{
		if (document.IBCI.Country.value == "" || document.IBCI.Country.value == null)
		{	alert("Choose a country / island to proceed.")		
			document.IBCI.Country.focus()
		}
		else{javascript:document.IBCI.submit()}
	}
	else{javascript:document.IBCI.submit()}
}

//###########################################################################################
//###########################################################################################
function IBE_F()
{
	if (document.fn.vbrowser.value == "I")
	{
		if (document.IBE.ve_code.value == "" || document.IBE.ve_code.value == null)
		{	alert("Choose Ecosystem to proceed.")		
			document.IBE.ve_code.focus()
		}
		else{javascript:document.IBE.submit()}
	}
else{javascript:document.IBE.submit()}

}
//###########################################################################################
//###########################################################################################
//end of function IBCI_F()
//###########################################################################################
//###########################################################################################
//###########################################################################################
function IBF_F()
{

//if (document.fn.vbrowser.value == "I")
//{		}
//else{javascript:document.IBF.submit()}
	if 	(
		(document.IBF.famcode1.value == ""     || document.IBF.famcode1.value == null)
		&&
	 	(document.IBF.famcode2.value == "" || document.IBF.famcode2.value == null)
		)
	
	{
		alert("Choose a Family to proceed.")		
		document.IBF.Family.focus()
		return;
	}
	
	else{javascript:document.IBF.submit()}
}//end of function IBF_F()

//###########################################################################################
//###########################################################################################
//###########################################################################################
// end hiding -->
function bef_send_comnames()
{
	if 	(
			document.forms.fn_comnames.CommonName.value == "" 
		)
		{
		alert("Common name can not be blank." )
		document.forms.fn_comnames.CommonName.focus()
		document.forms.fn_comnames.CommonName.select()	
		return;
		}	
		document.forms.fn_comnames.submit()
}

function erase_gs(x)
{
	if(x == 2)
	{
	document.forms.fn_genspec.crit1_value.value="";		
	document.forms.fn_genspec.crit2_value.value="";	
	}
	if(x == 1)
	{
	document.forms.fn_genspec.gs.value="";		
	}

}

function goCtry()
{	//document.getElementById("group_information").disabled = true;
	//alert("eli")
	
	var number = document.forms.IBCI.Country.selectedIndex;
	var c_code = document.forms.IBCI.Country.options[number].value; 	
	//alert(c_code)		
		
	var c_code_onclick = document.forms.IBCI.c_code_onclick.value
	var region = document.forms.IBCI.region.value

	
	
	
	if	(	c_code == "036"		||
			c_code == "076"		||
			c_code == "124"		||
			c_code == "156"		||
			c_code == "356"		||
			c_code == "643"		||			
			c_code == "840"								
		)		
	{	
			
		if( region == 'americas' ) {
			window.location="search.php?region=americas&c_code=" + c_code + "#country" ;
		} else {
			window.location="search.php?c_code=" + c_code + "#country" ;
			
		}
		//window.location="search.php?c_code=" + c_code + "#country" ;
		document.getElementById("csub_code").style.display = "inline";
		


	}
	else
	{
		window.location="search.php?c_code=" + c_code + "#country";													 
		// alert("dito")
		//document.getElementById("csub_code").style.display = "none";
		if	(	c_code_onclick == "036"		||
				c_code_onclick == "076"		||
				c_code_onclick == "124"		||
				c_code_onclick == "156"		||
				c_code_onclick == "356"		||
				c_code_onclick == "643"		||			
				c_code_onclick == "840"								
			)		
		{
			
			//alert("eto na")
			if( region == 'americas' ) {
				window.location="search.php?&region=americas&c_code=" + c_code + "&c_code_onclick=" + c_code + "#country" ;
			} else {
				window.location="search.php?c_code=" + c_code + "&c_code_onclick=" + c_code + "#country" ;
			}
			//window.location="search.php?c_code=" + c_code + "&c_code_onclick=" + c_code + "#country" ;
		}
		
		document.forms.IBCI.c_code_onclick.value = document.forms.IBCI.Country.options[number].value; 	
		//document.getElementById("group_information").disabled = true;
		//testing if recognized
	
		
	}
		

}//function goCtry()

function goOnclick()
{
	var number = document.forms.IBCI.Country.selectedIndex;
	var c_code = document.forms.IBCI.Country.options[number].value; 	
	document.forms.IBCI.c_code_onclick.value = c_code;
}

function csubx()	//change in countrysub dropdown
{
	var number = document.forms.IBCI.csub_code.selectedIndex;
	var csub_code = document.forms.IBCI.csub_code.options[number].value; 	
	//alert(csub_code)		
	if (csub_code != ""){
		x=true;
		var CountryMiscColumn = document.getElementsByClassName("CountryMiscCol");
		for (var i = 0; i < CountryMiscColumn.length; ++i) {
    		CountryMiscColumn[i].style.color="#a8a8a8";
		}
	} else {
		x=false
		var CountryMiscColumn = document.getElementsByClassName("CountryMiscCol");
		for (var i = 0; i < CountryMiscColumn.length; ++i) {
    		CountryMiscColumn[i].style.color="black";
		}
	}
	
	document.getElementById("group_information").disabled = x;
	document.getElementById("group_FAOProfile").disabled = x;
	document.getElementById("group_reefbase").disabled = x;
	document.getElementById("group_treaties").disabled = x;
	document.getElementById("group_Collaborators").disabled = x;
	document.getElementById("group_fishstampscountry").disabled = x;
	document.getElementById("group_CommonNames").disabled = x;
	document.getElementById("group_PublicAquariums").disabled = x;
	document.getElementById("group_mpa").disabled = x;
	document.getElementById("group_scrfa").disabled = x;
	

	document.getElementById("group_invasiveness").disabled = x;
	document.getElementById("group_fao_aqua").disabled = x;
	document.getElementById("group_fao_catch").disabled = x;
	document.getElementById("group_ices_catch").disabled = x;
	document.getElementById("group_saup_catch").disabled = x;
	document.getElementById("group_fishloss").disabled = x;
	
	
	document.getElementById("group_identification").disabled = x;
	document.getElementById("group_IDKeys").disabled = x;
	document.getElementById("group_fieldguide").disabled = x;
	document.getElementById("group_SpeciesOccurrence").disabled = x;
	document.getElementById("group_TypeLocal").disabled = x;
	document.getElementById("group_references").disabled = x;
	document.getElementById("group_missingdata").disabled = x;
	document.getElementById("group_MissingPhotos").disabled = x;
	document.getElementById("group_ecoparam").disabled = x;
	document.getElementById("group_ctry_matrix").disabled = x;

	document.getElementById("group_aquaculture").disabled = x;
	document.getElementById("group_aquarium").disabled = x;							
}

function bef_send_ref()
{
	if 	(
			document.forms.Ref.Author.value == "" &&
			document.forms.Ref.Year.value 	== "" &&
			document.forms.Ref.Title.value 	== "" &&
			document.forms.Ref.Source.value == "" &&
			document.forms.Ref.RefNo.value 	== "" 
		)
		{
		alert("All fields can not be blank." )
		document.forms.Ref.Author.focus()
		document.forms.Ref.Author.select()	
		return;
		}	
		document.forms.Ref.submit()
}

/* Used in FishBase for Red Sea */
function getArabicSelection()
{
	var i = document.getElementById("arabicNames").selectedIndex;
	var val_of_index = document.getElementById("arabicNames").options;
	
	document.forms.fn_comnames.CommonName.value = val_of_index[i].value;
}