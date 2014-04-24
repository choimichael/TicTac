var gameApp = angular.module('gameApp', []);
gameApp.controller('TicTacController', function($scope){

	$scope.countX = 0;
	$scope.countO = 0;

	var gameSt = true;
	var turn = true;

	$scope.playerTurn = function(r, c)
	{
		//if ($scope.gameSt == 0){
			//console.log($scope.gameSt == 0)
		
		if($scope.rows[r][c] != 0)
		{
			return;
		}
		else if(turn === true)
		{
			$scope.rows[r][c] = 1;	// X
			turn = false;
			//turnCount++;
		}
		else
		{
			$scope.rows[r][c] = -1;	// O
			turn = true;
		}

		// Test various win conditions
		if(Math.abs($scope.rows[0][0] + $scope.rows[0][1] + $scope.rows[0][2]) == 3){
			$scope.playerWon("top row", $scope.rows[0][0])
				
				if($scope.rows[0][0] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
			};
		
		if(Math.abs($scope.rows[1][0] + $scope.rows[1][1] + $scope.rows[1][2]) == 3){
			$scope.playerWon("middle row", $scope.rows[1][2]);

				if($scope.rows[1][2] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
			};
		
		if(Math.abs($scope.rows[2][0] + $scope.rows[2][1] + $scope.rows[2][2]) == 3){
			$scope.playerWon("bottom row", $scope.rows[2][0]);

				if($scope.rows[2][0] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
			};
		
		if(Math.abs($scope.rows[0][0] + $scope.rows[1][1] + $scope.rows[2][2]) == 3){
			$scope.playerWon("\\", $scope.rows[1][1]);

				if($scope.rows[1][1] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
			};
		
		if(Math.abs($scope.rows[0][2] + $scope.rows[1][1] + $scope.rows[2][0]) == 3){
			$scope.playerWon("/", $scope.rows[2][0]);

				if($scope.rows[2][0] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
			};
		
		if(Math.abs($scope.rows[0][0] + $scope.rows[1][0] + $scope.rows[2][0]) == 3){
			$scope.playerWon("right |", $scope.rows[1][0]);

				if($scope.rows[1][0] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
			};

		if(Math.abs($scope.rows[0][2] + $scope.rows[1][2] + $scope.rows[2][2]) == 3){
			$scope.playerWon("left |", $scope.rows[2][2]);
		
				if($scope.rows[0][0] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 

			};
		
		if(Math.abs($scope.rows[0][1] + $scope.rows[1][1] + $scope.rows[2][1]) == 3){
			$scope.playerWon("middle |", $scope.rows[2][1]);
			
			if($scope.rows[0][0] == 1) {
					$scope.countX++;
				}else{
					$scope.countO++;
				} 
		};
		

		//if (turnCount == 9)
	
};
	// Show an alert if one of the tested directions is a win
	$scope.playerWon = function(descrip, player)
	{
		// Some example text that could be shown: "X won by diagonal"
		alert( ((player == 1)?"X" : "O") + " won by " + descrip);

	}

	$scope.playAg = function(){
		$scope.rows = [ [0,0,0],[0,0,0],[0,0,0] ];
		
	};

	$scope.reset = function(){
		$scope.rows = [ [0,0,0],[0,0,0],[0,0,0] ];
		$scope.countX = 0;
		$scope.countO = 0;
	};

});
