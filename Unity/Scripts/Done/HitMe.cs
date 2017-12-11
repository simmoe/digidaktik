using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace DigitaleVirkeligheder {
	public class HitMe : MonoBehaviour {

		public GameObject explosionprefab;
		public int Points = 0;
		public int Health = 0;
		public bool Explosion = false;
		public bool Respawn = false;
		public bool DestroyOnHit = false;

		private GameControl script;
		private Vector3 pos;
		private Quaternion rot;
		private Renderer rend;
		private GameObject exp;

		//Gem objektets position så det kan indsættes samme sted
		void Start(){
			pos = transform.position;
			rot = transform.rotation;
			rend = GetComponent<Renderer>();
			script = GameObject.Find ("GameControl").GetComponent<GameControl> ();	
		}

		//Hvis bullet rammer objektet
		void OnCollisionEnter(Collision other){
			//Hvis objektet blev ramt af en bullet
			if (other.gameObject.CompareTag ("bullet")) {
				if (Points != 0)
					script.AddScore (Points);
				if (Health != 0) 
					script.AddHealth (Health);
				if (Explosion) 
					Explode ();
				if (Respawn)
					StartCoroutine (recreate());
				if(DestroyOnHit)
					Destroy (gameObject);
				
			}
		}


	//Instantierer en eksplosion og fjerner objektet x antal sekunder
	void Explode(){
		print ("Eksploderer");
		exp = Instantiate(
			explosionprefab,
			transform.position,
			transform.rotation
		);
	}


	//Venter x antal sekunder og sætter objektet tilbage til udgangspunktet 
	IEnumerator recreate(){
		print ("Starting respawn");
		rend.enabled = false;
		//Flyt objektet langt væk, indtil det spawner
		transform.position = new Vector3(
				transform.position.x,
				transform.position.y - 100,
				transform.position.z
		);
		yield return new WaitForSeconds (2);
		transform.position = pos;
		transform.rotation = rot;
		GetComponent<Rigidbody> ().velocity = new Vector3 (0,0,0);
		rend.enabled = true;
	}
}
}



