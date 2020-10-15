<!--
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-31 17:33:19
 * @LastEditors: yangliang
 * @LastEditTime: 2020-09-04 17:23:47
-->

<template>
  <div id="container" ref="scroller"></div>
</template>

<script>
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { OBJLoader } from "three-obj-mtl-loader";
import Stats from "stats-js";
export default {
  name: "Home",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      //获取dom元素
      let container = document.getElementById("container");
      //创建一个场景，其中将包含我们所有的元素，例如对象，相机和灯光。
      this.scene = new THREE.Scene();
      //创建一个摄像头，它定义了我们要看的地方。
      this.camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 0.6;
      //创建网格模型
      
      //创建一个立方体几何对象Geometry
      // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      // //材质对象
      // let material = new Three.MeshNormalMaterial();
      // //网格模型对象Mesh
      // this.mesh = new Three.Mesh(geometry, material);
      // //网格模型添加到场景中
      // this.scene.add(this.mesh);

      new OBJLoader().load("/static/models/亚托克斯.obj", (obj) => {
        this.scene.add(obj);
      });
      //创建渲染并设置尺寸
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)//再次调用animate方法实现刷新
    },
  },
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 400px;
}
</style>
