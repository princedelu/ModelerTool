(function(exports){
	
    var config = {		
		"models" : {
			"typeElements" : [
				{ "name" : "param",
				  "texte" : "Liste des entités"
				},
				{ "name" : "config",
				  "texte" : "Liste des configurations"
				}
			],
			"index" : [
				{ "name" : "Entite" , "path": "entite", "type" : "param" },
				{ "name" : "Zone" , "path": "zone", "type" : "param" },
				{ "name" : "Quartier", "path": "quartier" , "type" : "param" },
				{ "name" : "Ilot" , "path": "ilot", "type" : "param" },
				{ "name" : "Application" , "path": "application", "type" : "param" },
				{ "name" : "Composant" , "path": "composant", "type" : "param" },
				{ "name" : "Canal" , "path": "canal", "type" : "config" },
				{ "name" : "TypeComposant" , "path": "typecomposant", "type" : "config" },
				{ "name" : "Editeur" , "path": "editeur", "type" : "config" },
				{ "name" : "Logiciel" , "path": "logiciel", "type" : "config" },
				{ "name" : "TypeCluster" , "path": "typecluster", "type" : "config" },
				{ "name" : "Site" , "path": "site", "type" : "config" },
				{ "name" : "TypeInfra" , "path": "typeinfra", "type" : "config" },
				{ "name" : "Constructeur" , "path": "constructeur", "type" : "config" },
				{ "name" : "Os" , "path": "os", "type" : "config" }
			 ]
		}
	};

    exports.routeConfig = config;

})(typeof exports === 'undefined' ? this.routeConfig = {} : exports);
