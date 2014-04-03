var name,profile,alerttype,latitude,longitude,db;
function saveLocation(db,name,profile,alerttype)
{
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);
	this.name=name;
	this.profile=profile;
	this.alerttype=alerttype;
	this.db=db;
    showlocation();
	//db.transaction(populateDB, errorCB, successCB);
	
}   
function showlocation() {
  // alert("in savelocation");
   navigator.geolocation.getCurrentPosition(callback,errfun);
}
 
function errfun(error){
	console.log("Code :"+error.code);
	alert("Error :"+error.message);
}
function callback(position) {
   alert("in success");
   var lati = position.coords.latitude;
   var longi= position.coords.longitude;
    latitude=lati;
    longitude=longi;
    console.log(latitude);
    console.log(longitude);
    console.log(alerttype+"  "+name+"  "+profile);
    db.transaction(populateDB, errorCB, successCB);
//    db.transaction(populateDB, errorCB, successCB);
}

// Populate the database 
function populateDB(tx) {
	//tx.executeSql('DROP TABLE IF EXISTS LOCATIONS_LIST');
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOCATIONS_LIST (name,latitude,longitude,profile,type,PRIMARY KEY (name))');
	tx.executeSql('INSERT INTO LOCATIONS_LIST (name,latitude,longitude,profile,type) VALUES (?,?,?,?,?)',[name,latitude,longitude,profile,alerttype],null,function(tx,err)
	  {
		alert("A record already exists by this name\nPlease enter another name");
		document.location.href="../html/savelocation.html";
	  }
	);
	tx.executeSql('SELECT * FROM LOCATIONS_LIST',[],function(tx,results){
	var len=results.rows.length;
	alert(len);
	for(var i=0;i<len;i++)
	{
	//	alert(results.rows.item(i).name);
		alert(results.rows.item(i).latitude);
		alert(results.rows.item(i).longitude);
	//	alert(results.rows.item(i).profile);
	//	alert(results.rows.item(i).type);
	}
	},null);
}

function errorCB(tx, err) {
	alert("Error processing SQL: "+err);
}

function successCB(tx,results) {
	document.location.href="../html/viewlocations.html";
    //   alert("success! "+results.rows.length);
}


