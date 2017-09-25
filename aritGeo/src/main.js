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


		for( let k = 1; k<arr.length; k++){
			if (arr[k] - arr[k-1] != arr[k-1] -arr[k-2] &&
			 arr[k]/arr[k-1]!=arr[k-1]/arr[k-2]){
				return -1;
			}

		}
	}
}