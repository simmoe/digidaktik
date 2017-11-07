using UnityEngine;

public class shoot : MonoBehaviour
{

	public GameObject bulletPrefab;

	void Update()
	{

		//if some key is pressed, the "fire" function is called
		if (Input.GetKeyDown("k"))
		{
			Fire();
		}
	}


	void Fire()
	{
		// Create the Bullet from the Bullet Prefab
		var bullet = (GameObject)Instantiate(
			bulletPrefab,
			transform.position,
			transform.rotation);

		// Add velocity to the bullet
		bullet.GetComponent<Rigidbody>().velocity = bullet.transform.forward * 6.0f;
	}
}

/*OPGAVER

Prøv at tilføje en debug besked hver gang spilleren skyder 

Prøv at brug metoden Destroy til at fjerne affyrede kugler efter et par sekunder 

Kuglerne skyder lidt langsomt - kan du lave en public variabel, så man kan sætte kuglens affyringshastighed direkte i editoren?
https://docs.unity3d.com/Manual/VariablesAndTheInspector.html

Lige nu ligger kuglerne lidt underligt langs jorden. Se om du kan finde ud af at ændre kuglens y position i udgangspunktet så man skyder højere på banen. 
https://docs.unity3d.com/ScriptReference/Transform-position.html
- lav også en public variabel til affyringshøjden 

Lav en prefab med nogle objekter man kan skyde på - husk de skal have en rigidbody for at blive påvirkede af skud

Prøv at få noget lyd på kuglerne - kig i det script der allerede ligger på FPScontrolleren - du skal bruge det som har med audio at gøre. 
Du kan finde lyder her: http://soundbible.com/

Allerede færdig? Prøv at lave et pistolobjekt som vises i first person, og som kuglerne affyres fra. 

*/