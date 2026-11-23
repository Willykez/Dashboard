import React,{useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
const initial=[8,3,6,2,7,4];
export default function AlgorithmLab(){
 const [arr,setArr]=useState(initial); const [step,setStep]=useState(0);
 const reset=()=>{setArr(initial);setStep(0)};
 const next=()=>{
   const a=[...arr]; let i=step% (a.length-1);
   if(a[i]>a[i+1]){const t=a[i];a[i]=a[i+1];a[i+1]=t;}
   setArr(a);setStep(step+1);
 };
 return <View style={s.box}>
  <Text style={s.heading}>Bubble sort · Step-by-step</Text>
  <Text style={s.sub}>Compare adjacent bars and swap if the left value is greater.</Text>
  <View style={s.bars}>{arr.map((n,i)=><View key={i} style={s.barWrap}><View style={[s.bar,{height:n*16,backgroundColor:i===step%(arr.length-1)?'#FFB86B':'#48BFFF'}]}/><Text style={s.num}>{n}</Text></View>)}</View>
  <Text style={s.step}>Step {step} · comparisons are animated by advancing one operation</Text>
  <View style={s.controls}><TouchableOpacity onPress={next} style={s.action}><Text style={s.actionText}>Next comparison →</Text></TouchableOpacity><TouchableOpacity onPress={reset} style={s.reset}><Text style={s.resetText}>Reset</Text></TouchableOpacity></View>
 </View>
}
const s=StyleSheet.create({box:{padding:16,backgroundColor:'#0C1420',borderColor:'#213247',borderWidth:1,borderRadius:16,marginTop:15},heading:{color:'#EAF4FF',fontSize:15,fontWeight:'800'},sub:{color:'#8096AF',fontSize:11,marginTop:6,lineHeight:17},bars:{height:150,flexDirection:'row',alignItems:'flex-end',justifyContent:'center',gap:10,marginTop:15},barWrap:{alignItems:'center',justifyContent:'flex-end',height:130},bar:{width:28,borderRadius:6},num:{color:'#9EB3CC',fontSize:11,marginTop:4},step:{color:'#6E87A3',fontSize:10,marginTop:10},controls:{flexDirection:'row',gap:9,marginTop:12},action:{backgroundColor:'#44BFFF',padding:11,borderRadius:10},actionText:{color:'#07121E',fontWeight:'800',fontSize:12},reset:{borderColor:'#2A3A50',borderWidth:1,padding:11,borderRadius:10},resetText:{color:'#A5B8D1',fontSize:12}});
