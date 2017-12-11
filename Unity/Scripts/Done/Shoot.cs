using UnityEngine;

namespace DigitaleVirkeligheder {
public class Shoot : MonoBehaviour
{
	public GameObject bulletPrefab;
	public float speed = 40.0f;
	public float timeToLive = 4.0f;
	public float shootHeight = 0.4f;
	private AudioSource m_AudioSource;
	public AudioClip bangSound;

	private void Start()
	{
		m_AudioSource = GetComponent<AudioSource> ();
	}

	void Update()
	{

		//if some key is pressed, the "fire" function is called
		if (Input.GetKeyDown("k"))
		{
			Fire();
			Debug.Log ("Nu bliver der skudt");
		}

	}

	void Fire()
	{

		// Create the Bullet from the Bullet Prefab
		var bullet = (GameObject)Instantiate(
			bulletPrefab,
			new Vector3(transform.position.x, transform.position.y + shootHeight, transform.position.z),
			transform.rotation
		);
		PlayBangSound ();

		// Add velocity to the bullet
		bullet.GetComponent<Rigidbody>().velocity = bullet.transform.forward * speed;
		Destroy (bullet, timeToLive);
	}

	private void PlayBangSound()
	{
		m_AudioSource.clip = bangSound;
		m_AudioSource.Play();
	}
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