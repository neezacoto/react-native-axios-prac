import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import pracApi from '../api/pracApi';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import appStyles from '../config/appStyles';
import requestList from '../data/requestList';
import routes from '../Navigator/routes';

function LandingPage({ navigation }) {

    const renderButtons = ({ item }) => (
    <AppButton 
        style={styles.buttons} 
        title={item.title} 
        color={item.color} 
        onPress={() => { pracApi[item.title](navigation, routes.RESP_SCREEN, item)}}
      />)

        return (
            <View style={[appStyles.statusBar,styles.container]}>
                  <AppText style={styles.header}> Axios Demo</AppText>
                  <View style={styles.buttonContainer}>
                    <FlatList 
                    data={requestList} 
                    renderItem={renderButtons} 
                    keyExtractor={button => button.id}/>
                  </View>
            </View>
        );
}

const styles = StyleSheet.create({
  buttons: {
    marginBottom: 15
  },
  buttonContainer: {
    width: "100%",
    flex: 1,
    padding: 18,
    borderRadius: 12,
    backgroundColor: appStyles.themes.light,

  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    paddingBottom: "10%"
    
  },
  header: {
    fontSize: 40,
    fontWeight: "600",
    marginBottom: 24
  },

})

export default LandingPage;