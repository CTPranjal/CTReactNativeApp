/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
const CleverTap = require('clevertap-react-native');
CleverTap.createNotificationChannel("P01", "Clever Tap React Native Testing", "CT React Native Testing", 5, true) // The notification channel importance can have any value from 1 to 5. A higher value means a more interruptive notification.
CleverTap.initializeInbox();
CleverTap.setDebugLevel(3);
CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (data) => {
  console.log("Hey this is native testing", data);
});


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Alert,
    Text,
    useColorScheme,
    View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
//thi is the main component
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const CleverTap = require('clevertap-react-native');
  var props = {
     'Phone': '9799967000'
  }

  var chargeDetails = { 'totalValue': 20,
                        'category': 'books',
                        'purchase_date': new Date()
                      }
  var items = [
  { 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
  { 'title': 'book2', 'published_date': new Date('2020-12-12T06:35:31'), 'author': 'DEF'},
  { 'title': 'book3', 'published_date': new Date('2000-12-12T06:35:31'), 'author': 'XYZ' }]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View
        style = {{
          padding : 20
        }}
      >
        <Button
          title="On User Login"
          onPress={() => {CleverTap.onUserLogin({'Name': 'React-Test', 'Identity': '2001', 'Email': 'sk@gmail.com', 'Phone': '+14155551234', 'Gender': 'M', 'custom1': 15});}}
        />
      </View>
      <View
        style = {{
          padding : 20
        }}
      >
        <Button
          title="Push Profile"
          onPress={() => {CleverTap.profileSet(props);}}
        />
      </View>
      <View
        style = {{
          padding : 20
        }}
      >
        <Button
          title="Push Event"
          onPress={() => {CleverTap.recordEvent('Product Viewed', {'Product Name': 'Dairy Milk', 'Category': 'Chocolate', 'Amount': 20.00 });}}
        />
      </View>
      <View
        style = {{
          padding : 20
        }}
      >
        <Button
          title="Push Notification"
          onPress={() => {CleverTap.recordEvent('React PushN Event');}}
        />
      </View>
      <View
      style = {{
        padding : 20
        }}
      >
        <Button
          title="Web Inbox"
          onPress={() => {CleverTap.showInbox({
          'tabs': ['Offers', 'Promotions'],
          'navBarTitle': 'My App Inbox',
          'navBarTitleColor': '#FF0000',
          'navBarColor': '#FFFFFF',
          'inboxBackgroundColor': '#AED6F1',
          'backButtonColor': '#00FF00',
          'unselectedTabColor': '#0000FF',
          'selectedTabColor': '#FF0000',
          'selectedTabIndicatorColor': '#000000',
          'noMessageText': 'No message(s)',
          'noMessageTextColor': '#FF0000'
          });}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  a:{
  margin:20
  },
});

export default App;
