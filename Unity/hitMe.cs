using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class hitMe : MonoBehaviour {

	private gameControl gameController;

	void Start ()
	{
		GameObject gameControllerObject = GameObject.FindWithTag ("GameController");
		if (gameControllerObject != null)
		{
			gameController = gameControllerObject.GetComponent <gameControl>();
		}
		if (gameController == null)
		{
			Debug.Log ("Cannot find 'GameController' script");
		}
	}

	void OnCollisionEnter(Collision other){
		if (other.gameObject.CompareTag ("projectile")) {
			gameController.AddScore (1000);

			transform.GetComponent<Rigidbody>().velocity = transform.up * 6;

			// Destroy the object after 20 seconds
			Destroy(transform.gameObject, 20.0f);        

		}
	}

}
