<?php

use Nette\Application\Routers\RouteList,
	 Nette\Application\Routers\Route;

/**
 * Router factory.
 */
class RouterFactory {

	/**
	 * @return Nette\Application\IRouter
	 */
	public function createRouter() {
		$router = new RouteList();
		$router[] = new Route('index.php', 'Betaax:reklamniAgentura', Route::ONE_WAY);
		$router[] = new Route('index2.html', 'Betaax:reklamniAgentura', Route::ONE_WAY);
		$router[] = new Route('potisk', 'Betaax:potiskPredmetu', Route::ONE_WAY);
		$router[] = new Route('potisk.htm', 'Betaax:potiskPredmetu', Route::ONE_WAY);
		$router[] = new Route('3d.htm', 'Betaax:prostorovaReklama', Route::ONE_WAY);
		$router[] = new Route('foto.htm', 'Betaax:fotoTisk', Route::ONE_WAY);
		$router[] = new Route('galerie', 'Betaax:fotoTisk', Route::ONE_WAY);
		$router[] = new Route('kontaktni-formular', 'Betaax:kontaktyDotazy', Route::ONE_WAY);
		$router[] = new Route('reference/potisk', 'Betaax:potiskPredmetu', Route::ONE_WAY);
		$router[] = new Route('reference/3d-reklama', 'Betaax:prostorovaReklama', Route::ONE_WAY);
		$router[] = new Route('reference/foliova-reklama', 'Betaax:foliovaReklama', Route::ONE_WAY);
		$router[] = new Route('reference/svetelna-reklama', 'Betaax:svetelnaReklama', Route::ONE_WAY);
		$router[] = new Route('reference/velkoplosny-tisk', 'Betaax:velkoplosnyTisk', Route::ONE_WAY);
		$router[] = new Route('<action>', 'Betaax:reklamniAgentura');
		return $router;
	}

}
