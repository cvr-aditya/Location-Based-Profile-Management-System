var from;
function check(db,from)
{
       this.from=from;
       db.transaction(getrecords,errget,sucget);
}

function getrecords(tx) {
    
	tx.executeSql('SELECT * FROM LOCATIONS_LIST',[],
		function(tx,results){
			if(from.localeCompare("edit")==0)
                window.location.href="../html/edit.html";
            else if(from.localeCompare("delete")==0)
                window.location.href="../html/delete.html";
		},
		function(tx,err)
	  	{
		 	alert("No Locations Saved\nYou can save locations in the below form"); 
            if(from.localeCompare("edit")==0)
               window.location.href="../html/savelocation.html";
		}
	);
}

function errget(tx, err) {
//	alert("Error processing SQL: "+err);
}

function sucget(tx,results) {
	   // alert("success! "+results.rows.length);
}
