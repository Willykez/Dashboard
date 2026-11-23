import React,{useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
export default function LogicLab(){
 const [a,setA]=useState(0),[b,setB]=useState(0),[gate,setGate]=useState('AND');
 const out=gate==='AND'?a&b:gate==='OR'?a|b:a^1;
 const Toggle=({v,set,label})=><TouchableOpacity onPress={()=>set(v?0:1)} style={s.bit}><Text style={{color:v?'#52D5FF':'#899EB9',fontSize:17,fontWeight:'800'}}>{label} = {v}</Text></TouchableOpacity>;
 return <View style={s.card}>
  <Text style={s.title}>Logic gate playground</Text><Text style={s.sub}>Toggle inputs and choose a gate to see the Boolean result.</Text>
  <View style={s.row}><Toggle v={a} set={setA} label="A"/><Toggle v={b} set={setB} label="B"/></View>
  <View style={s.row}>{['AND','OR','XOR'].map(g=><TouchableOpacity key={g} onPress={()=>setGate(g)} style={[s.gate,gate===g&&s.selected]}><Text style={s.gateText}>{g}</Text></TouchableOpacity>)}</View>
  <View style={s.output}><Text style={s.outputLabel}>{gate} OUTPUT</Text><Text style={s.outputValue}>{out}</Text></View>
  <Text style={s.truth}>A {a}  •  B {b}  •  {gate} → {out}</Text>
 </View>
}
const s=StyleSheet.create({card:{padding:15,backgroundColor:'#0C1420',borderWidth:1,borderColor:'#24374C',borderRadius:16,marginTop:15},title:{color:'#EDF6FF',fontSize:15,fontWeight:'800'},sub:{color:'#8297B0',fontSize:11,marginTop:5},row:{flexDirection:'row',gap:9,marginTop:15,justifyContent:'center'},bit:{padding:12,borderWidth:1,borderColor:'#28425C',borderRadius:12,flex:1,alignItems:'center'},gate:{padding:10,borderWidth:1,borderColor:'#26394F',borderRadius:10,flex:1,alignItems:'center'},selected:{backgroundColor:'#15304A',borderColor:'#4AC7FF'},gateText:{color:'#B9CEE6',fontWeight:'800'},output:{marginTop:18,alignItems:'center',padding:15,backgroundColor:'#101D2B',borderRadius:14,borderWidth:1,borderColor:'#2A4A68'},outputLabel:{color:'#8AA8C5',fontSize:10,letterSpacing:1},outputValue:{fontSize:44,fontWeight:'900',color:'#50CBFF'},truth:{color:'#8198B1',textAlign:'center',marginTop:10,fontSize:11}});
