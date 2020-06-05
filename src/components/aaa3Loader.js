import React from 'react'
import * as THREE from './three';
// var THREE = require('three/examples/js/loaders/OBJLoader');//
// var manager = new LoadingManager();//
// var loader = new THREE.OBJLoader( manager );
// import 'three';
// var loader = new OBJLoader( manager);
var OBJLoader = require('three-obj-loader')(THREE)
var manager = new TH.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {
    console.log( item, loaded, total );
};
// model
// var loader = new OB( manager );

in function 

export default function aaa3Loader( path ) {
    return new Promise( ( resolve, reject ) => {
        loader.load(
            path,
            resolve,
            () => null,
            error => reject
        );
    });
}
