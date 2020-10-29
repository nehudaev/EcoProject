import React  from 'react'
import {View, Button, SafeAreaView, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class News extends React.Component {
render () {     
    return(        
        <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <Text style={styles.textTitle}>Статьи:</Text>

        <View style={styles.postContainer}>
           <Image
                source = {{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcmggallia.com%2Fru%2Fp%2Feco-friendly-ru&psig=AOvVaw0c3utZqQQD_iVaXxILznMf&ust=1604061182163000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCGldnn2ewCFQAAAAAdAAAAABAD" }}
                style={{resizeMode:'cover',width:null,height:null, flex:1,  borderRadius:4,
                borderWidth:1,
                borderColor:'#dddddd'}}
           />

           <Text
                style={styles.textOfArticle}
           >
                Hi eco project 
           </Text>

           <View style={{marginTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color:'#727272',fontSize:13}}>Saw</Text>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="ios-eye" size={18} style={{color:'#727272', marginRight:3}} />
                <Text style={{color:'#727272',fontSize:13}}>1</Text>
                </View>
           </View>
        </View>
       </ScrollView>
        </SafeAreaView>

    

    )
}
}

const styles = StyleSheet.create({
    MainContainer :{
 
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex:1
   },
   textTitle :{fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700', padding:10},
   
 
   textOfArticle:{
        marginTop:7,
        fontSize:16,
        fontFamily: 'Roboto-M'
   },
 
   postContainer :{
        width: Dimensions.get('window').width,
        height:300,
        paddingBottom:10,
        padding:10
   },
});