using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroySphere : MonoBehaviour {

	void OnCollisionEnter(Collision other){
		if (other.gameObject.CompareTag ("projectile")) {
			this.gameObject.SetActive (false);
		}
	}

}
