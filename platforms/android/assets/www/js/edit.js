var oldname,newname,profile,type;
function editSelected(db,oldname,newname,profile,type)
{
	this.oldname=oldname;
	this.newname=newname;
	this.profile=profile;
	this.type=type;
	db.transaction(editfun,errorEdit,successEdit);
	
}    

// Populate the database 
function editfun(tx) 
{
	console.log(oldname+"   "+newname+"   "+profile+"  "+type);
	var sqlstmt="UPDATE LOCATIONS_LIST SET name=\""+newname+"\",profile=\""+profile+"\",type=\""+type+"\" WHERE name=\""+oldname+"\"";
	console.log(sqlstmt);
	tx.executeSql(sqlstmt);
}

function errorEdit(tx, err) {
	alert("A record already exists by this name\nPlease enter another name");
}

function successEdit(tx,results) {
	document.location.href="viewlocations.html";
}