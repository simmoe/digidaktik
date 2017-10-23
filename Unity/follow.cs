using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class follow : MonoBehaviour {

	public float moveSpeed = 3.0f;
	public GameObject player;

	void Start(){
		player=GameObject.Find("Player");
	} 

	void Update(){

		transform.rotation = Quaternion.Slerp(transform.rotation,
		Quaternion.LookRotation(player.transform.position - transform.position), 3 * Time.deltaTime);	

		//code for following the player
		transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
}
