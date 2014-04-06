var opttype;
var flag=false;
//var db;
function getLocation(db,opttype)
{
	this.opttype=opttype;
	console.log(opttype);
	console.log(db);
	db.transaction(populateDB, errorCB, successCB);
}    


function applycss(textelem)
{
	textelem.setAttribute("class","input");
	textelem.setAttribute("style","width:188px;");
	textelem.setAttribute("style","padding:15px 25px;");
	textelem.setAttribute("style","font-weight:400;");
	textelem.setAttribute("style","font-size:14px;");
	textelem.setAttribute("style","color:#9d9e9e;");
	textelem.setAttribute("style","background:#fff;");
	textelem.setAttribute("style","border:1px solid #fff;");
	textelem.setAttribute("style","border-radius:5px;");
	textelem.setAttribute("style","box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);");
	textelem.setAttribute("style","-moz-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);");
	textelem.setAttribute("style","-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);");
	
}
function createResultTable(result,numrows)
{
	var chkbox;
	var flag=0;
	console.log(opttype);
	if((opttype.localeCompare("view"))==0)
		flag=1;
	else if((opttype.localeCompare("delete"))==0)
		flag=2;
	else if((opttype.localeCompare("edit"))==0)
		flag=3;
	console.log("flag"+flag);
	var restable=document.createElement('table');
	document.body.appendChild(document.createElement('center'));
	var breakelem=document.createElement('br');
	for(var i=0;i<5;i++)
		document.body.appendChild(breakelem);
	document.body.appendChild(document.createElement('center'));
    restable.setAttribute("class","table");
	restable.setAttribute("id","restable");
	restable.setAttribute("border","2");
	restable.setAttribute("width","500");
	restable.setAttribute("style","position: absolute;top:225px;left:100px;right:200px;");
	var rowelem=document.createElement('tr');
	var colelem=document.createElement('td');
	if(flag==2) {
		colelem.appendChild(document.createTextNode("Mark"));
		rowelem.appendChild(colelem);
	}
    if(flag==3) {
		colelem.appendChild(document.createTextNode("Select"));
		rowelem.appendChild(colelem);
	}
    
	var colelem=document.createElement('td');
	colelem.setAttribute("style","padding-left : 56px;");
	colelem.appendChild(document.createTextNode("Name"));
	rowelem.appendChild(colelem);
	/*var colelem=document.createElement('td');
	colelem.appendChild(document.createTextNode("Latitude"));
	rowelem.appendChild(colelem);
	var colelem=document.createElement('td');
	colelem.appendChild(document.createTextNode("Longitude"));
	rowelem.appendChild(colelem);*/
	var colelem=document.createElement('td');
	colelem.setAttribute("style","padding-left : 50px;");
	colelem.appendChild(document.createTextNode("Profile"));
	rowelem.appendChild(colelem);
	var colelem=document.createElement('td');
	colelem.setAttribute("style","padding-left : 56px;");
	colelem.appendChild(document.createTextNode("Type"));
	rowelem.appendChild(colelem);
	restable.appendChild(rowelem);
	for(var i=0;i<numrows;i++)
	{
		if(flag==2)
		{
			chkbox=document.createElement('input');
            chkbox.setAttribute('class','checkbox');
			chkbox.setAttribute('type','checkbox');
			chkbox.setAttribute('id',i.toString());
			chkbox.setAttribute("name","delete");
		}
		if(flag==3)
		{
			chkbox=document.createElement('input');
            chkbox.setAttribute('class','checkbox');
			chkbox.setAttribute('type','radio');
			chkbox.setAttribute('id',i.toString());
			chkbox.setAttribute("name","edit");
		}
		var rowelem=document.createElement('tr');
		var colelem=document.createElement('td');
		var textelem=document.createElement('input');
		applycss(textelem);
		if(flag==2 || flag==3)
			rowelem.appendChild(chkbox);
		textelem.readOnly=true;
		colelem.setAttribute("type","text");
		var temp=i.toString()+'[0]';
		textelem.setAttribute("id",temp);
		textelem.setAttribute("value",result.rows.item(i).name);
		colelem.appendChild(textelem);
		rowelem.appendChild(colelem);
		/*var colelem=document.createElement('td');
		colelem.appendChild(document.createTextNode(result.rows.item(i).latitude));
		rowelem.appendChild(colelem);
		var colelem=document.createElement('td');
		colelem.appendChild(document.createTextNode(result.rows.item(i).longitude));
		rowelem.appendChild(colelem);*/
		var colelem=document.createElement('td');
		textelem=document.createElement('input');
		applycss(textelem);
		colelem.setAttribute("type","text");
		textelem.readOnly=true;
		var temp=i.toString()+'[3]';
		textelem.setAttribute("id",temp);
		textelem.setAttribute("value",result.rows.item(i).profile);
		//document.getElementById(i.toString()+"[3]").readOnly=true;
		colelem.appendChild(textelem);
		rowelem.appendChild(colelem);
		colelem=document.createElement('td');
		textelem=document.createElement('input');
		applycss(textelem);
		textelem.readOnly=true;
		var temp=i.toString()+'[4]';
		textelem.setAttribute("id",temp);
		textelem.setAttribute("value",result.rows.item(i).type);
	//	document.getElementById(i.toString()+"[4]").readOnly=true;
		colelem.appendChild(textelem);
		rowelem.appendChild(colelem);
		restable.appendChild(rowelem);
		
	}
	document.body.appendChild(restable);
    
	
}
 
	// Populate the database 
function populateDB(tx) {
    
	tx.executeSql('SELECT * FROM LOCATIONS_LIST',[],
		function(tx,results){
			alert("here");
            flag=true;
			var len=results.rows.length;
			alert("in res"+len);
			createResultTable(results,len);
		},
		function(tx,err)
	  	{
		 	alert("No Locations Saved\nYou can save locations in the below form"); 
            flag=false;
			window.location.href="../html/savelocation.html";
		}
	);
}

function errorCB(tx, err) {
	alert("Error processing SQL: "+err);

}

function successCB(tx,results) {
	   // alert("success! "+results.rows.length);
}
