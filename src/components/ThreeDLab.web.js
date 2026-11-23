import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const layerColors = ['#56C8FF', '#245C89', '#163650', '#87E2FF'];
export default function ThreeDLab({courseId = 'internet', accent = '#56C8FF'}) {
  const [explode, setExplode] = useState(false);
  const [rotate, setRotate] = useState(true);
  return (
    <View style={styles.wrap}>
      <View style={styles.stage}>
        <View style={[styles.chip, rotate && styles.rotating]}>
          <View style={[styles.core, {borderColor: layerColors[0]}]}>
            <Text style={styles.chipLabel}>CSVERSE</Text>
            <Text style={styles.chipSub}>COMPUTE CORE</Text>
          </View>
          {['top', 'left', 'right', 'bottom'].map((part, i) => (
            <View key={part} style={[styles.layer, styles[part], {backgroundColor: layerColors[i]}, explode && styles[`spread_${part}`]]} />
          ))}
          <View style={[styles.glow, explode && styles.glowWide]} />
        </View>
        <Text style={styles.caption}>Interactive layered processor model</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={[styles.button, {borderColor: accent}]} onPress={() => setExplode(v => !v)}>
          <Text style={styles.buttonText}>{explode ? 'Collapse layers' : 'Explode layers'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setRotate(v => !v)}>
          <Text style={styles.secondaryText}>{rotate ? 'Reset model tilt' : 'Tilt model'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.note}>Web preview model • interactive layer separation</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {borderWidth: 1, borderColor: '#1E3046', borderRadius: 18, overflow: 'hidden', backgroundColor: '#080D15'},
  stage: {height: 270, alignItems: 'center', justifyContent: 'center', overflow: 'hidden'},
  chip: {width: 150, height: 150, alignItems: 'center', justifyContent: 'center', position: 'relative'},
  rotating: {transform: [{rotate: '12deg'}]},
  core: {width: 110, height: 110, borderWidth: 3, borderRadius: 20, backgroundColor: '#10263A', alignItems: 'center', justifyContent: 'center', zIndex: 2, shadowColor: '#56C8FF', shadowOpacity: 0.4, shadowRadius: 18, shadowOffset: {width: 0, height: 0}},
  chipLabel: {color: '#E3F7FF', fontSize: 18, fontWeight: '900', letterSpacing: 2},
  chipSub: {color: '#67BCEB', fontSize: 8, marginTop: 4, letterSpacing: 1},
  layer: {position: 'absolute', width: 34, height: 34, borderRadius: 8, opacity: 0.95},
  top: {top: 0, left: 58}, left: {left: 0, top: 58}, right: {right: 0, top: 58}, bottom: {bottom: 0, left: 58},
  spread_top: {transform: [{translateY: -34}]}, spread_left: {transform: [{translateX: -38}]}, spread_right: {transform: [{translateX: 38}]}, spread_bottom: {transform: [{translateY: 34}]},
  glow: {position: 'absolute', width: 120, height: 120, borderRadius: 60, backgroundColor: '#153754', opacity: 0.4, zIndex: 0},
  glowWide: {width: 180, height: 180, borderRadius: 90, opacity: 0.2},
  caption: {color: '#9FB2C9', fontSize: 10, position: 'absolute', bottom: 16},
  controls: {flexDirection: 'row', gap: 9, justifyContent: 'center', padding: 12, flexWrap: 'wrap'},
  button: {borderWidth: 1, borderColor: '#27374C', padding: 10, borderRadius: 24, backgroundColor: '#101927'},
  buttonText: {color: '#DCEEFF', fontWeight: '700'}, secondaryText: {color: '#9FB2C9'},
  note: {textAlign: 'center', color: '#758AA4', fontSize: 10, paddingBottom: 12},
});
