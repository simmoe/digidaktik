using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace DigitaleVirkeligheder {
public class GameControl : MonoBehaviour {
	private int score;

	// Use this for initialization
	void Start () {
		score = 0;
		UpdateScore ();			

		//Coroutines er metoder som kan håndtere tid - som du ser nedenfor i metoden showStart venter metoden et par sekunder med WaitForSeconds()
		StartCoroutine (showStart());
	}

	public void AddScore (int newScoreValue)
	{
		score += newScoreValue;
		UpdateScore ();
	}

	void UpdateScore ()
	{
	}

	IEnumerator showStart(){
		print ("Scenen begynder");
		yield return new WaitForSeconds (2);
	}
}
}

/**
 * 
 * OPGAVER
 * - - - - - - - -
 * 
 * I disse opgaver skal vi se på hvordan der kommer noget spilmekanik ind i vores spil: point, baner, start og slut.
 * 
 * OPRET POINT TAVLE
 * - - - - - - - -
 * Først vil vi gerne have en pointtavle på vores spil, så vi kan vise spillets fremgang. 
 * Opret et nyt tekstobjekt: gameobject/ui/text - OBS: du kan ikke se teksten endnu, men du kan se et nyt gameobject i hierarkiet.
 * Som du ser i hierarkiet får du både et Canvas og et tekstobjekt, som er bundet til det. Det er sådan GUI i Unity fungerer. 
 * Klik på tekstobjektet - ret teksten til noget du kan genkende i Inspectoren, og sæt farven til hvid i stedet for grå. 
 * Du kan stadig ikke se teksten og det er FORDI du ikke ser på selve spillet - klik på Game vinduet i stedet for Scene vinduet 
 * Nu skal du kunne se teksten. Ret den til ved at klikke rundt i den lille firkant i inspectoren - hold alt+shift inde mens du trykker
 * 
 * OPRET ET GAMEOBJEKT SOM KAN HOLDE DETTE SCRIPT
 * - - - - - - - -
 * Opret et tomt GameObjekt/Create Empty
 * 
 * LAV EN REFERENCE TIL POINTTAVLEN I DETTE SCRIPT 
 * - - - - - - - -
 * Opret et public GameObject point_tekst øverst her og klik gem
 * Nu ser du dette felt i inspectoren og du kan trække pointteksten direkte over på det
 * Når du starter spillet kan du se, at teksten skifter til Score: 0 som der står øverst i dette script
 * 
 * GIV POINT
 * - - - - - - - - 
 * Det næste vi skal have på plads, er at der skal gives point når målene rammes. 
 * 
 * Ovenfor ser du en public metode: AddScore()
 * Metoden tager en integer og skal lægge den til spillets pointtavle. 
 * Brug referencen til tekstobjektet til at give points   
 * 
 * Nu skal du kalde AddScore fra hitMe.cs (som sidder på target), hver gang target bliver ramt 
 * 
 * Hint: for at få fat i et andet scripts metoder fra hitMe.cs, skal du først have fat i det Gameobject scriptet ligger på 
 * (se i inspectoren hvad du præcis har kaldt det tomme Gameobject som du har lagt scriptet her på) - og bagefter getComponent 
 * til at få fat i dette script (GameControl)
 * https://docs.unity3d.com/ScriptReference/GameObject.Find.html
 * https://docs.unity3d.com/ScriptReference/GameObject.GetComponent.html
 * 
 * Når du først har lavet et link til scriptet er det nemt at kalde metoden AddScore;
 * 
 * Check at dine point virker 
 * 
 * LAV FORSKELLIGE POINT TIL FORSKELLIGE TARGETS
 * - - - - - - - -
 * Lav en public integer variabel i scriptet, så du kan sætte forskellige point på forskellige targets
 * 
 * INTRO TEKST DER VISER SCENENS NAVN
 * - - - - - - - -
 *  * Lad os vise når en scene starter med en tekst som kun står på skærmen et par sekunder. 
 * Opret et nyt ui/text objekt og placer det midt på skærmen. 
 * Der kan for eksempel stå Bane 1 eller lignende.. 
 * 
 * Brug metoden showStart() ovenfor til at fjerne objektet efter noget tid. 
 * I tvivl om hvordan? Kig i referencen (se text properties): 
 * https://docs.unity3d.com/ScriptReference/UI.Text.html
 * 
 * LINK TIL NÆSTE SCENE NÅR ET BESTEMT ANTAL POINT ER NÅET 
 * - - - - - - - -
 * Nu vil vi gerne skifte scene når spilleren har fået point nok. Lav først en ny scene i projektet, fx ved at gemme den aktuelle scene med et nyt navn
 * Se om du kan skifte til scene to i gameControl scriptet, når spilleren får et vist antal point:
 * https://docs.unity3d.com/ScriptReference/SceneManagement.SceneManager.html
 * 
 * -husk at du skal importere sceneManageren i starten: 
 * using UnityEngine.SceneManagement;
 * 
 * 
 * - - - - - - - -
 * 
 * Lidt flere opgaver
 * 
 * Prøv at lave en ny target type - for eksempel en gameobject/cube. 
 * Husk at for at lave et target skal det som minimum have:
 *   En rigidbody
 *   Et hitMe script
 * 
 * Se om du kan få firkanterne til at svæve (don't use gravity on rigidbody) og være lidt mindre, altså sværere at få ram på. 
 * Nu ville det jo være rart hvis det gav nogle flere point at ramme firkanterne. Hvordan løser vi det?
 * 
 * - - - - - - - -
 * 
 * Finpudsning. Det er ikke særlig pænt med de hvide tekster. Se om du kan finde nogle mere interessante fonte i assetstore og brug dem i stedet. 
 * 
 * Se om du kan få dine targets til at rotere eller bevæge sig lidt - det er nu engang sjovere
**/