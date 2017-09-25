'use strict'



module.exports= {

	//Arithmetic and Geometric progression


	aritGeo: (arr)=>{

		if ( arr.length == 0){
			return 0;
		}

		if (arr.length < 3){
			return -1;
		}

		for( let i = 1; i<arr.length; i++){
			if (arr[i] - arr[i-1] == arr[i-1] -arr[i-2]){
				return "Arithmetic";
			}

			 if (arr[i]/arr[i-1]==arr[i-1]/arr[i-2]){
				return "Geometric";
			}

		}

		for(let iteration =0; iteration<=arr.length; iteration++){
			if(typeof(arr[iteration])==='string')
				return -1;
		}


		for( let j = 1; j<arr.length; j++){
			if (arr[j] - arr[j-1] != arr[j-1] -arr[j-2] &&
			 arr[j]/arr[j-1]!=arr[j-1]/arr[j-2]){
				return -1;
			}

		}
	}
}