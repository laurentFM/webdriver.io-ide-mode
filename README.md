# Webdriver.io en mode compatibilité IE

1. Nécessite: 
* Nodejs d'installé sur la machine
* java dans le path de la machine (pour Selenium)
* iedriver service pour webdriver.io (inclus dans dépendances node)

2. Modifier config `wdio.conf.js` comme suit

```json
capabilities: [{
        maxInstances: 5,
        browserName: 'internet explorer',
        "se:ieOptions": {
            "ie.edgechromium": true,
            "ie.edgepath": "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
            ignoreZoomSetting: true
        }
}]
```

3. Surcharger `node_modules/selenium-standalone/.selenium/iedriver/3.150.1-x64/IEDriverServer.exe` parcelui à la racine du projet

4. Lancer `npm i` pour installer les dépendances puis `npm run wdio`