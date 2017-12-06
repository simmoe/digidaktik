/* Her har du en næsten færdig skabelon til et spil. I dette script kan du se hvordan der tælles point, tages tid, 
 * og skrives forskellige beskeder på skærmen så spilleren kan orientere sig i spillet. 
 * Men der mangler noget.. ja, faktisk en hel del. Spillet er så godt som ufuldstændigt - og det er nu din opgave at tage det 
 * videre i en eller anden interessant retning. Men der er et par ting der skal gøres først:
 * 
 * OPGAVER
 * 
 * Sørg for at funktionen lose() bliver kaldt når tiden er gået
 * 
 * Gør sådan så variablen tid kan sættes direkte i unity editoren
 * 
 * 
 * Nu vil vi gerne have et objekt på scenen, som kan give nogle ekstra sekunder - lad os fx prøve at finde en 3d model af et 
 * hjerte som man kan gå ind i og vinde lidt ekstra tid
 * Der er mange sider derude, fx https://free3d.com/ eller https://www.turbosquid.com 
 * hvor man kan finde gratis modeller - se om du kan finde en (du leder efter filer af formatet .3ds, .obj eller .dae)
 * -læs evt mere her: https://docs.unity3d.com/Manual/3D-formats.html
 * 
 * Når man går ind i hjertet skulle det gerne give nogle ekstra sekunder. Se om du kan oprette et script på hjertet 
 * - måske inspireret af det script der er på Target - så det giver spilleren noget mere tid hvis hjertet samles op. 
 * 
 * I standard assets ligger der et script - automoveandrotate - der får alle objekter til at bevæge sig. 
 * Se om du kan få hjertet til at dreje rundt 
 * 
 * Begynd nu at bygge en bane med forskellige objekter man enten kan skyde for at få point - eller samle op for at få point..
 * 
 * Allerede færdig?
 * 
 * I standard assets/chracters finder du en 3d person ai character - se om du kan få ham til at bevæge sig mod din player og dermed tage point
 * Her skal der laves et net: https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html
 * 
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

namespace Damage {
	public class GameControl : MonoBehaviour {
		public Text point;
		public Text scene;
		public Text time;
		private int Tid = 10;

		private int score;


		// Use this for initialization
		void Start () {
			score = 0;
			UpdateScore ();			

			//Coroutines er metoder som kan håndtere tid - som du ser nedenfor i metoden showStart venter metoden et par sekunder med WaitForSeconds()
			StartCoroutine (showStart("Scene 1"));
			StartCoroutine (showTime());

		}
	
		//Sætter en ny score, hvis score er større end [..] starter bane 2, hvis score er større end [..] har man vundet 
		public void AddScore (int addScoreValue){
			score += addScoreValue;
			UpdateScore ();
			if(score > 2000){				
				scene.text = "Du vinder";
				scene.enabled = true;
			}
		}

		//Sætter en ny score, hvis score er større end [..] starter bane 2, hvis score er større end [..] har man vundet 
		public void AddHealth (int howMuch){
			print ("Giving health: " + howMuch);
		}

		void UpdateScore (){
			point.text = "Score: " + score.ToString();
		}
			

		void Lose(){
			scene.text = "Du taber";
			scene.enabled = true;		
		}

		//Viser introtekst i et antal sekunder
		IEnumerator showStart(string t){
			scene.text = t;
			scene.enabled = true;
			yield return new WaitForSeconds (2);
			scene.enabled = false;
		}

		//Viser introtekst i et antal sekunder
		IEnumerator showTime(){
			while (Tid >= 0) {
				time.text = Tid.ToString() + " Sek";
				yield return new WaitForSeconds (1);
				Tid--;
			}
		}
	}
}

