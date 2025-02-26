import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SurveyScreen = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (selected !== null) {
      navigation.navigate('NextQuestion2'); // 다음 질문 화면으로 이동
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>당신과 딱 맞는 동행을 위해 여행 설문을 시작할게요</Text>
      <Text style={styles.question}>Q. 01</Text>
      <Text style={styles.subText}>여행 일정 계획은 어떻게 진행하는 편인가요?</Text>
      
      <Card
        style={[styles.card, selected === 'planner' ? styles.selectedCard : null]}
        onPress={() => setSelected('planner')}
      >
        <Card.Content>
          <Text style={styles.choiceText}>📝 계획파</Text>
        </Card.Content>
      </Card>
      
      <Card
        style={[styles.card, selected === 'spontaneous' ? styles.selectedCard : null]}
        onPress={() => setSelected('spontaneous')}
      >
        <Card.Content>
          <Text style={styles.choiceText}>⚡ 즉흥파</Text>
        </Card.Content>
      </Card>
      
      <Button
        mode="contained"
        onPress={handleNext}
        style={styles.button}
        disabled={selected === null}
      >
        다음
      </Button>
    </View>
  );
};

const NextQuestion = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (selected !== null) {
      // 다음 질문이 있을 경우 여기에 추가
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>당신과 딱 맞는 동행을 위해 여행 설문을 시작할게요</Text>
      <Text style={styles.question}>Q. 02</Text>
      <Text style={styles.subText}>단체에서 나의 캐릭터는 무엇인가요?</Text>
      
      <Card
        style={[styles.card, selected === 'leader' ? styles.selectedCard : null]}
        onPress={() => setSelected('leader')}
      >
        <Card.Content>
          <Text style={styles.choiceText}>리더형</Text>
        </Card.Content>
      </Card>
      
      <Card
        style={[styles.card, selected === 'support' ? styles.selectedCard : null]}
        onPress={() => setSelected('support')}
      >
        <Card.Content>
          <Text style={styles.choiceText}>조력자형</Text>
        </Card.Content>
      </Card>
      
      <Card
        style={[styles.card, selected === 'idea' ? styles.selectedCard : null]}
        onPress={() => setSelected('idea')}
      >
        <Card.Content>
          <Text style={styles.choiceText}>메이커형</Text>
        </Card.Content>
      </Card>
      
      <Card
        style={[styles.card, selected === 'care' ? styles.selectedCard : null]}
        onPress={() => setSelected('care')}
      >
        <Card.Content>
          <Text style={styles.choiceText}>찬성형</Text>
        </Card.Content>
      </Card>
      
      <Button
        mode="contained"
        onPress={handleNext}
        style={styles.button}
        disabled={selected === null}
      >
        다음
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subText: {
    fontSize: 16,
    marginBottom: 20
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10
  },
  selectedCard: {
    borderColor: 'blue',
    backgroundColor: '#d0e8ff'
  },
  choiceText: {
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    marginTop: 20
  }
});

export { SurveyScreen, NextQuestion };