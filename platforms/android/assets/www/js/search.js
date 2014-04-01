var latLongList,lat,longi;
function runBackground(db)
{
	db.transaction(getAll,errorGetAll,successGetAll);
}

function getAll(tx)
{
	tx.executeSql('SELECT latitude,longitude FROM TEMP',[],function(tx,results){
	var len=results.rows.length;
	latLongList=new Array(len);
	for(var i=0;i<len;i++)
		latLongList[i]=new Array(2);
	for(var i=0;i<len;i++)
	{
		latLongList[i][0]=results.rows.item(i).latitude;
		latLongList[i][1]=results.rows.item(i).longitude;
	}
	findPointsInRange(len);
	},null);
	
}


function errorGetAll(tx, err) {
//	alert("Error processing SQL: "+err);
}

function successGetAll(tx,results) {
       // alert("success! "+results.rows.length);
}

function errorAdd(tx, err) {
//	alert("Error processing SQL: "+err);
}

function successAdd(tx,results) {
       // alert("success! "+results.rows.length);
}
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  console.log(d);
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}	

function findPointsInRange(len)
{
	var flag=0;
	for(var i=0;i<len;i++)
		for(var j=i+1;j<len;j++)
		{
			dist=getDistanceFromLatLonInKm(latLongList[i][0],latLongList[i][1],latLongList[j][0],latLongList[j][1]);
			if(dist<1){
				alert("Point is in range");
				flag=1;
			}
		}
	if(flag==0)
		alert("No points in range");
}

function addToDB(tx)
{
	tx.executeSql('CREATE TABLE IF NOT EXISTS TEMP (latitude,longitude)');
	tx.executeSql('INSERT INTO TEMP (latitude,longitude) VALUES (?,?)',[lat,longi],null,null);	
}
function addindb(db,lat,longi)
{
	this.lat=lat;
	this.longi=longi;
	db.transaction(addToDB,errorAdd,successAdd);	
}