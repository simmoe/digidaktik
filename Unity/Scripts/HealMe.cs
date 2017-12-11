using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Damage{
	public class HealthMe : MonoBehaviour {

		public int Points = 10;
		// Use this for initialization
		void Start () {
			
		}
	
		// Update is called once per frame
		void Update () {
		
		}

		//Når noget rammer objektet
		void OnTriggerEnter(Collider other){
			if (other.gameObject.CompareTag ("Player")) {
				// Kald metoden AddHealth i scriptet GameControl (se evt hvordan i scriptet HitMe)
			}
		}
	}
}

/*Opgaver
* Du er ude på at give spilleren nogle flere sekunder at leve i, når han rammer dette objekt. 
*  Tag udgangspunkt i scriptet HitMe.cs og se om du kan få det til 
*  Sørg for at objektet slettes når det er ramt 
*  Færdig? Sørg for at der afspilles en lyd når objektet rammes
*/