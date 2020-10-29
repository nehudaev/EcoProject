import React from 'react'
import {View, Button, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';

export const News = props => {
    return(
        <SafeAreaView style={styles.MainContainer}>
      <ScrollView
      >
        <Text style={styles.textTitle}>Статьи:</Text>
       </ScrollView>
  </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    textTitle :{fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700', padding:10}
});