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
	public String getMessage(){
	   Log.d("message","wooowwww");
	   return setm();
	}
   
    public String setm(){
    	Log.d("message","in setm");
    	AudioManager audioManager= (AudioManager)cont.getSystemService(Context.AUDIO_SERVICE);
		audioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
		Toast.makeText(cont, "Silent Mode Activated", Toast.LENGTH_LONG).show();
		return "in set";
    }
}

