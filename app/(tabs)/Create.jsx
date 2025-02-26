import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Create = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Create Page</Text>
      <Button mode="contained" onPress={() => navigation.navigate('SurveyScreen')}>
        설문조사 시작
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Create;