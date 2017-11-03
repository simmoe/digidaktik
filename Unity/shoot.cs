using UnityEngine;

public class shoot : MonoBehaviour
{
	public GameObject bulletPrefab;
	public Transform bulletSpawn;

	void Update()
	{

		//if some key is pressed, the "fire" function is called
		if (Input.GetKeyDown("p"))
		{
			Fire();
		}
	}


	void Fire()
	{
		// Create the Bullet from the Bullet Prefab
		var bullet = (GameObject)Instantiate(
			bulletPrefab,
			bulletSpawn.position,
			bulletSpawn.rotation);

		// Add velocity to the bullet
		bullet.GetComponent<Rigidbody>().velocity = bullet.transform.forward * 6;

		// Destroy the bullet after 2 seconds
		//Destroy(bullet, 2.0f);        
	}
}

//Øvelser