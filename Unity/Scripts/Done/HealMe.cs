using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace DigitaleVirkeligheder{
	public class HealMe : MonoBehaviour {

		public int Points = 0;
		public int Health = 0;

		private GameControl script;

		// Use this for initialization
		void Start () {
			script = GameObject.Find ("GameControl").GetComponent<GameControl> ();	
		}
	
		//Hvis spilleren går ind i objektet
		void OnTriggerEnter(Collider other){
			if (other.gameObject.CompareTag ("Player")) {
				if (Points != 0)
					script.AddScore (Points);
				if (Health != 0) 
					script.AddHealth (Health);

				Destroy (gameObject);
			}
		}
	}
}