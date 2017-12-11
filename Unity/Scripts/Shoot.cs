using UnityEngine;

namespace DigitaleVirkeligheder {
public class Shoot : MonoBehaviour
{

	public GameObject bulletPrefab;

	private void Start(){
	
	}

	void Update(){

		//if some key is pressed, the "fire" function is called
		if (Input.GetKeyDown("k")){
			Fire();
		}
	}

	private void PlayBangSound(){

	}


	void Fire()
	{
		// Create the Bullet from the Bullet Prefab
		var bullet = (GameObject)Instantiate(
			bulletPrefab,
			transform.position,
			transform.rotation
		);
		PlayBangSound ();

		// Add velocity to the bullet
		bullet.GetComponent<Rigidbody>().velocity = bullet.transform.forward * 10.0f;
	}
}
}

/**
 * OPGAVER
 * FÆLLES:
 * Gennemgang 
 *
 *
 * Prøv at tilføje en debug besked hver gang spilleren skyder
 * https://docs.unity3d.com/ScriptReference/MonoBehaviour-print.html
 * 
 * Prøv at brug metoden Destroy til at fjerne affyrede kugler efter et par sekunder
 * https://docs.unity3d.com/ScriptReference/Object.Destroy.html
 * 
 * Kuglerne skyder lidt langsomt - sæt farten op
 * - kan du lave en public variabel, så man kan sætte kuglens affyringshastighed direkte i editoren?
 * https://docs.unity3d.com/Manual/VariablesAndTheInspector.html
 * 
 * Lige nu ligger kuglerne lidt underligt langs jorden. Se om du kan finde ud af at ændre kuglens y position i udgangspunktet så man skyder højere på banen. 
 * https://docs.unity3d.com/ScriptReference/Transform-position.html
 * - lav også en public variabel til affyringshøjden 
 * 
 * Lav en prefab med nogle objekter man kan skyde på - husk de skal have en rigidbody for at blive påvirkede af skud
 * 
 * 
 * - - - - - - - -
 * 
 * Lidt sværere opgave 
 * 
 * Prøv at få noget lyd på kuglerne - kig i det script der allerede ligger på FPScontrolleren - du skal bruge det som har med audio at gøre. 
 * Der ligger allerede en skydelyd i dine assets - men du kan finde flere lyde her: http://soundbible.com/
 * 
 * Allerede færdig? Prøv at lave et pistolobjekt som vises i first person, og som kuglerne affyres fra. 
**/