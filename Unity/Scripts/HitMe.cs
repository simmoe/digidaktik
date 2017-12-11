using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Target {
	public class HitMe : MonoBehaviour {

	public GameObject explosionprefab;

	void Start(){

	}


	void OnCollisionEnter(Collision other){
		if (other.gameObject.CompareTag ("bullet")) {
			Explode ();
		}
	}

	void Explode(){
		print ("I'm hit");
	}

}
}


/*
OPGAVER 

OPRET EN PREFAB DU KAN RAMME 
- - - - - - - -
Vi har nu en bane vi kan skyde på - men ingenting at skyde ned! I disse opgaver gennemgår vi hvordan man laver et target 
- giver det et script som kan forstå det bliver skudt på, affyrer en eksplosion og gør andre fornuftige ting for ting der bliver plaffet ned.

Opret først en ny Sphere: gameobject/3dobject/sphere
Giv den en Rigidbody 
Tilføj dette script (HitMe.cs) til den. 
Giv den evt et andet udseende
Gem den som en prefab og kald den Target eller lignende

INDSÆT EN EKSPLOSION PÅ DIN PREFAB OG INITIALISÉR DEN 
- - - - - - - -
Der er allerede en public variabel tilknyttet scriptet, så du kan indsætte en explosion. 
Du finder en eksplosion under standard assets/particle systems/explosion 
Brug metoden Instantiate til at starte animationen, når objektet bliver ramt 
Hint: se i Shoot scriptet hvis du er i tvivl om hvordan
Eller se i referencen: https://docs.unity3d.com/ScriptReference/Object.Instantiate.html

FJERN DIN PREFAB NÅR DEN ER BLEVET SKUDT NED - OG SÆT DEN EVT IND PÅ BANEN IGEN VED LEJLIGHED
- - - - - - - -
Kan du fjerne objektet når det er blevet skudt?
https://docs.unity3d.com/Manual/CreateDestroyObjects.html

Kan du i stedet for at fjerne det gøre så det bliver flyttet til en ny position tæt ved spilleren? 
Se om du kan bruge metoden StartCoroutine til at vente 4-5 sekunder og derefter indsætte objektet på en ny position
https://docs.unity3d.com/ScriptReference/WaitForSeconds.html

Læg mærke til at du nu ikke længere kan kalde Destroy - så fjerner du objektet helt og kan ikke genoplive det.
Brug i stedet objektets renderer, som kan disables:
GetComponent<Renderer>().enabled = ;

OPRET EN ELLER FLERE ANDRE PREFABS SOM OGSÅ KAN SKYDES
- - - - - - - -
Opret et andet 3d objekt end target - fx en firkant. Giv den en rigidbody og en anden måde at gå i stykker på end den første 
Lav på den måde en lille skydebane med forskellige objekter der kan skydes ned - behøver du oprette nye scripts?


*/

