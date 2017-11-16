using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class hitMe : MonoBehaviour {

	public GameObject explosionprefab;

	void Start(){
	}

	void OnCollisionEnter(Collision other){
		if (other.gameObject.CompareTag ("bullet")) {
			Explode ();
		}
	}

	void Explode(){
		Debug.Log ("I'm hit");
	}
}


/*
OPGAVER 

Der er allerede en public variabel tilknyttet scriptet, så du kan indsætte en explosion. 
Du finder en eksplosion under standard assets/particle systems/explosion 
Brug metoden Instantiate til at starte animationen, når objektet bliver ramt 
Hint: se i Shoot scriptet hvis du er i tvivl om hvordan

Sørg for at fjerne objektet et par sekunder efter det er blevet skudt
https://docs.unity3d.com/Manual/CreateDestroyObjects.html

Kan du i stedet for at fjerne det gøre så det bliver flyttet til en ny position tæt ved spilleren?
Se om du kan bruge metoden StartCoroutine til at vente 4-5 sekunder og derefter indsætte objektet på en ny position
https://docs.unity3d.com/ScriptReference/WaitForSeconds.html

Hint: Du kan evt gemme objektets startposition i en variabel, og så indsætte det samme sted..  

Opret et andet 3d objekt end target - fx en firkant. Giv den en rigidbody og en anden måde at gå i stykker på end den første her
- behøver du oprette nye scripts?

Lav på den måde en lille skydebane med forskellige objekter der kan skydes ned 

*/

