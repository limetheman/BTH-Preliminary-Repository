import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
  } from 'react-native';
  import {ExpoWebGLRenderingContext, GLView} from 'expo-gl';
  import {TextureLoader, Renderer, loadAsync} from 'expo-three';
  import { Asset } from 'expo-asset';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  import React, {useState} from 'react';
  import {
    AmbientLight,
    Fog,
    HemisphereLight,
    OrthographicCamera,
    PerspectiveCamera,
    PointLight,
    SpotLight,
    Scene,
  } from 'three';
  import { Interaction } from 'three.interaction';
  import { useNavigation } from "@react-navigation/native";
  

  onContextCreate = async (gl) => {
    // const {setRenderer, setCamera, setScene} = data;
    const {drawingBufferWidth: width, drawingBufferHeight: height} = gl;
    const sceneColor = 0x000000;
    // Create a WebGLRenderer without a DOM element
    const renderer = new Renderer({gl});
    renderer.setSize(width, height);
    renderer.setClearColor(sceneColor);
  
    const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(4, 4, 4);
  
    const scene = new Scene();
    scene.fog = new Fog(sceneColor, 1, 10000);
  
    // HemisphereLight - color feels nicer
    const hemisphereLight = new HemisphereLight(0xffffff, 0x080820, 1);
    scene.add(hemisphereLight);
  
    const hemisphereLight2 = new HemisphereLight(0x080820, 0xffffff, 1);
    scene.add(hemisphereLight2);
    // AmbientLight - add more brightness?
    // const ambientLight = new AmbientLight(0x404040); // soft white light
    // scene.add(ambientLight);
  
    const texture = new TextureLoader().load(require("../../../assets/earth.jpg"));
    const asset = Asset.fromModule(require("../../../assets/earth.obj"));
    await asset.downloadAsync();
    const mtl = Asset.fromModule(require("../../../assets/earth.mtl"));
    await mtl.downloadAsync();
    // const texture = Asset.fromModule(require("./assets/earth.jpg"));
    // await texture.downloadAsync();
    const interaction = new Interaction(renderer, scene, camera);
  
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      mtl.localUri,
      function( object2 ){
        const loader = new OBJLoader();
        loader.load(
          // resource URL
          asset.localUri,
          // called when resource is loaded
          function ( object ) {
            object.children[0].material.map = texture;
            object.scale.set(2, 2, 2)
            scene.add( object );
            // object.cursor = 'pointer';
            // object.on('tap', object.scale.set(3, 3, 3));
            camera.lookAt(object.position)
            //animate rotation
            function update() {
                // object.rotation.z += 0.015
            }
            const render = () => {
                timeout = requestAnimationFrame(render);
                update();
                renderer.render(scene, camera);
                gl.endFrameEXP();
              };
            render();
          },);
    },);
  
    // const pointLight = new PointLight(0xff0000, 10, 1000, 160);
    // pointLight.position.set(10, 25, 25);
    // scene.add(pointLight);
    const spotLight = new SpotLight(0x00ff00, 10, 1);
    spotLight.position.set(1.125, 1.125, 1.125);
    // spotLight.position.set(1.5, 1.5, 1.5);
    scene.add(spotLight);
  };
  
  export default function Globe() {
    const gl = ExpoWebGLRenderingContext;
    return (
      <View style={styles.container}>
        <SafeAreaView />
            <GLView
              style={{flex: 1}}
              onContextCreate={async gl => {
                onContextCreate(gl);
              }}
            />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  });