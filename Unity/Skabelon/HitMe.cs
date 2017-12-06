using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Damage {
	public class HitMe : MonoBehaviour {

		public GameObject explosionprefab;
		public int Points;

		private Vector3 pos;
		private Quaternion rot;
		private Renderer rend;
		private GameObject exp;

		//Gem objektets position så det kan indsættes samme sted
		void Start(){
			pos = transform.position;
			rot = transform.rotation;
			rend = GetComponent<Renderer>();
		}

		//Når noget rammer objektet
		void OnCollisionEnter(Collision other){
			if (other.gameObject.CompareTag ("bullet")) {
				GameObject.Find ("GameControl").GetComponent<GameControl> ().AddScore (Points);	
				Explode ();
			}
		}

	//Instantierer en eksplosionog fjerner objektet x antal sekunder
	void Explode(){
		exp = Instantiate(
			explosionprefab,
			transform.position,
			transform.rotation
		);
		rend.enabled = false;
		StartCoroutine (recreate());
	}

	//Venter x antal sekunder og sætter objektet tilbage til udgangspunktet 
	IEnumerator recreate(){
		yield return new WaitForSeconds (2);
		Destroy (exp);
		transform.position = pos;
		transform.rotation = rot;
		GetComponent<Rigidbody> ().velocity = new Vector3 (0,0,0);
		rend.enabled = true;
	}
}
}



