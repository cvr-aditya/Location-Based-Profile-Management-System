var  ProfileManager= {
    changeMode: function(mode,successCallback,errorCallback) {
    	alert("it will work now");
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'ProfileManager', // mapped to our native Java class called "ProfileManager"
            'changemode', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "mode":mode
            }]
        ); 
    }
}


