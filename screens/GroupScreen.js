import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Amplify, API, graphqlOperation} from 'aws-amplify';
import {listPeenars} from '../src/graphql/queries';
import {createPeenar} from '../src/graphql/mutations';
import config from '../src/aws-exports';
Amplify.configure(config);
const initialState = {name: ''};

const GroupScreen = ({navigation}) => {
  const [formState, setFormState] = useState(initialState);

  const [modalVisible, setModalVisible] = useState(false);
  const [peenars, setPeenars] = useState([]);
  useEffect(() => {
    fetchPeenars();
  }, []);
  async function fetchPeenars() {
    try {
      const peenarData = await API.graphql(graphqlOperation(listPeenars));
      console.log('peenar fetched');
      const peenarsList = peenarData.data.listPeenars.items;
      setPeenars(peenarsList);
      console.log(peenarsList);
    } catch (err) {
      console.log('error fetching peenrad', err);
    }
  }
  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }
  async function addPlant() {
    try {
      const plant = {...formState};
      console.log('plant ', plant);
      setPeenars([...peenars, plant]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPeenar, {input: plant}));
      console.log('peenar added?');
    } catch (err) {
      console.log('error adding peenar', err);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.peenarListWrapper}>
        {peenars.map((peenar, index) => (
          <View key={peenar.id ? peenar.id : index} style={styles.peenar}>
            <Text style={styles.peenarName}>{peenar.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.addButton}>
                <View>
                  <Icon name="times" size={30} color="darkgrey" />
                </View>
              </TouchableOpacity>
              <Text style={styles.modalText}>Uus grupp</Text>
              <TextInput
                onChangeText={val => setInput('name', val)}
                value={formState.name}
                style={styles.input}
                placeholder={'Sisesta nimi..'}
              />
              <TouchableOpacity onPress={addPlant} style={styles.saveButton}>
                <Text>Salvesta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addButton}>
          <View>
            <Icon name="plus-circle" size={50} color="#42BEA5" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 60,
    left: 20,
  },
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'flex-start',
    padding: 5,
  },
  peenar: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 8,
  },
  peenarListWrapper: {marginTop: 10},
  peenarName: {fontSize: 18},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  saveButton: {
    height: 50,
    width: 200,
    backgroundColor: '#42BEA5',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
