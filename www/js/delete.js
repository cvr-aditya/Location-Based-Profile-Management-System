var names=[];
function deleteSelected(db,names)
{
	this.names=names;
	console.log("in deletesecerere");
	console.log(db);
	console.log(names.length);
	db.transaction(deletefun,errorDelete,successDelete);
	
}    

// Populate the database 
function deletefun(tx) 
{
	console.log("inside function");
	for(var i=0;i<names.length;i++)
	{
		var retname=document.getElementById(names[i].toString()+'[0]').value;
		console.log(retname+"in loop");
		var sqlstmt="DELETE FROM LOCATIONS_LIST WHERE name=\""+retname+"\"";
		console.log(sqlstmt);
		tx.executeSql(sqlstmt);
	}
	console.log("done");
}

function errorDelete(tx, err) {
	alert("Error processing SQL: "+err);
}

function successDelete(tx,results) {
	console.log("suceess dele");
	document.location.href="viewlocations.html";
       // alert("success! "+results.rows.length);
}