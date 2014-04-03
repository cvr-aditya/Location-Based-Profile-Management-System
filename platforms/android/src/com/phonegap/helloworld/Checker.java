package com.phonegap.helloworld;

import android.content.Context;
import android.media.AudioManager;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class Checker {

	Context cont;
	
	public Checker(Context cont){
		this.cont=cont;
	}
	
   @JavascriptInterface
	public String getMessage(String profile){
	   Log.d("message","wooowwww");
	   return setm(profile);
	}
   
    public String setm(String profile){
    	Log.d("message","in setm");
    	AudioManager audioManager= (AudioManager)cont.getSystemService(Context.AUDIO_SERVICE);
        if(profile.equals("silent")){
            audioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
            Toast.makeText(cont, "Silent Mode Activated", Toast.LENGTH_LONG).show();
        }
        else if(profile.equals("normal")){
            audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
            Toast.makeText(cont, "Normal Mode Activated", Toast.LENGTH_LONG).show();
        }
        else if(profile.equals("vibrate")){
            audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
            Toast.makeText(cont, "Vibrate Mode Activated", Toast.LENGTH_LONG).show();
        }
		return "Profile Set";
    }
}

