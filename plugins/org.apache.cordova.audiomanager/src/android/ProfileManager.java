/**
 * 
 */
package org.apache.cordova.audiomanager;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import android.app.Activity;
import android.content.Context;
import android.media.AudioManager;
import android.util.Log;

/**
 * @author Sirna Aditya
 * @author Mounika Inukonda 
 */
public class ProfileManager extends CordovaPlugin{
	
	public AudioManager audioManager= (AudioManager)this.cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
	/**
	 * Executes the request and returns PluginResult.
	 * 
	 * @param action 		The action to execute.
	 * @param args 			JSONArry of arguments for the plugin.
	 * @param callbackId	The callback id used when calling back into JavaScript.
	 * @return 				A PluginResult object with a status and message.
	 */
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackId) {
		Log.d("mess","got into this");
		if(action.equals("changemode")){
			try {
				JSONObject obj=args.getJSONObject(0);
				String mode=obj.getString("mode");
				Log.d("mess",mode);
				if(mode.equals("normal"))
					audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
				else if(mode.equals("vibrate"))
					audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
				else if(mode.equals("silent"))
					audioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
				callbackId.success();
				return true;
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				Log.d("error","in json exception");
				callbackId.error("Invalid Arguments");
				return false;
			}
			
		}
		else{
			Log.d("error","out exception");
			callbackId.error("Invlalid Arguments");
			return false;
		}
	}
}
