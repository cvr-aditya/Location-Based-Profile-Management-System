package com.phonegap.helloworld;

import android.content.Context;
import android.media.AudioManager;
import android.os.Bundle;
import org.apache.cordova.*;


public class HelloWorld extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
		ProfileManager cna=new ProfileManager(this);
        super.onCreate(savedInstanceState);
        super.init();
        appView.addJavascriptInterface(cna, "ProfileManager");
        super.loadUrl("file:///android_asset/www/index.html");
    }
    
    
}

