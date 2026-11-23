import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {GLView} from 'expo-gl';
import {Renderer} from 'expo-three';
import * as THREE from 'three';

const cyan = 0x35bfff;
export default function ThreeDLab({courseId='internet',accent='#56C8FF'}) {
 const [explode,setExplode]=useState(false);
 const [rotate,setRotate]=useState(true);
 const onContextCreate=async(gl)=>{
   const scene=new THREE.Scene(); scene.background=new THREE.Color('#080D15');
   const camera=new THREE.PerspectiveCamera(42,gl.drawingBufferWidth/gl.drawingBufferHeight,0.1,100);
   camera.position.set(0,0,7);
   const renderer=new Renderer({gl}); renderer.setSize(gl.drawingBufferWidth,gl.drawingBufferHeight);
   scene.add(new THREE.AmbientLight(0xffffff,1.3));
   const light=new THREE.PointLight(cyan,3); light.position.set(4,4,6); scene.add(light);
   const group=new THREE.Group(); scene.add(group);
   const box=(w,h,d,color,x,y,z)=>{
     const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color,metalness:.5,roughness:.35}));
     mesh.position.set(x,y,z); group.add(mesh); return mesh;
   };
   const core=box(1.6,1.6,.4,0x193a5c,0,0,0);
   const top=box(1.35,.18,1.35,0x4fc5ff,0,0.98,0);
   const inner=box(.72,.72,.22,0x86ddff,0,0,.32);
   const side1=box(.18,1.35,1.25,0x285d8a,-.98,0,0);
   const side2=box(.18,1.35,1.25,0x285d8a,.98,0,0);
   const pins=[];
   for(let i=0;i<6;i++){
     pins.push(box(.1,.3,.1,0x6dd7ff,-.65+i*.26,-1.05,0));
     pins.push(box(.1,.3,.1,0x6dd7ff,-.65+i*.26,1.05,0));
   }
   const parts=[core,top,inner,side1,side2,...pins];
   let frame;
   const animate=()=>{
     frame=requestAnimationFrame(animate);
     group.rotation.y+=rotate?.008:0; group.rotation.x=.18;
     const spread=explode?1.6:0;
     top.position.y=.98+spread;
     inner.position.z=.32+spread;
     side1.position.x=-.98-spread;
     side2.position.x=.98+spread;
     pins.forEach((p,i)=>{p.position.y=(i%2===0?-1.05:1.05)+(i%2===0?-spread:spread)*.4;});
     renderer.render(scene,camera); gl.endFrameEXP();
   };
   animate();
   gl.__dispose=()=>cancelAnimationFrame(frame);
 };
 return <View style={styles.wrap}>
  <GLView style={styles.canvas} onContextCreate={onContextCreate}/>
  <View style={styles.controls}>
   <TouchableOpacity style={[styles.button,{borderColor:accent}]} onPress={()=>setExplode(v=>!v)}><Text style={{color:'#DCEEFF',fontWeight:'700'}}>{explode?'Collapse 3D layers':'Explode 3D layers'}</Text></TouchableOpacity>
   <TouchableOpacity style={styles.button} onPress={()=>setRotate(v=>!v)}><Text style={{color:'#9FB2C9'}}>{rotate?'Pause rotation':'Resume rotation'}</Text></TouchableOpacity>
  </View>
  <Text style={styles.note}>Interactive 3D assembly • drag/rotate support can be extended</Text>
 </View>;
}
const styles=StyleSheet.create({wrap:{borderWidth:1,borderColor:'#1E3046',borderRadius:18,overflow:'hidden',backgroundColor:'#080D15'},canvas:{height:270,width:'100%'},controls:{flexDirection:'row',gap:9,justifyContent:'center',padding:12,flexWrap:'wrap'},button:{borderWidth:1,borderColor:'#27374C',padding:10,borderRadius:24,backgroundColor:'#101927'},note:{textAlign:'center',color:'#758AA4',fontSize:10,paddingBottom:12}});
