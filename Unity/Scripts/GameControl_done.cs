using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

namespace DigitaleVirkeligheder {
	public class GameControl : MonoBehaviour {
		public Text point;
		public Text scene;
		public Text time;
		public int Tid = 10;

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
				if (Tid < 0) {
					Lose ();
				}
			}
		}
	}
}

