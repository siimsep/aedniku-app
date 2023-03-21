import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {Amplify, API, graphqlOperation} from 'aws-amplify';

import {createTaim} from '../src/graphql/mutations';
import Icon from 'react-native-vector-icons/FontAwesome';
// dropdown import
import {SelectList} from 'react-native-dropdown-select-list';
import config from '../src/aws-exports';
import {listTaims, listPeenars} from '../src/graphql/queries';

Amplify.configure(config);

const initialState = {
  title: '',
  additionalInfo: '',
  peenarTaimedId: '',
  date: '',
};
const PlantScreen = navigation => {
  const [formState, setFormState] = useState(initialState);
  const [modalVisible, setModalVisible] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
    fetchPeenars();
  }, []);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function fetchPlants() {
    try {
      const plantData = await API.graphql(graphqlOperation(listTaims));
      const plantList = plantData.data.listTaims.items;
      setPlants(plantList);
      console.log(plantList);
    } catch (err) {
      console.log('error fetching plants', err);
    }
  }
  async function fetchPeenars() {
    try {
      const peenarData = await API.graphql(graphqlOperation(listPeenars));
      const peenarsList = peenarData.data.listPeenars.items;
      let newArray = peenarsList.map(item => {
        return {key: item.id, value: item.name};
      });
      //Set Data Variable
      setData(newArray);
      console.log(newArray);
    } catch (err) {
      console.log('error fetching peenrad', err);
    }
  }

  async function addPlant() {
    try {
      const plant = {...formState};
      console.log(plant);
      setPlants([...plants, plants]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTaim, {input: plant}));
    } catch (err) {
      console.log('error adding plant', err);
    }
  }

  // dropdown
  const [selected, setSelected] = React.useState('');
  const [data, setData] = React.useState([]);

  // end of dropdown
  return (
    <View style={styles.container}>
      <View style={styles.peenarListWrapper}>
        {plants.map((plant, index) => (
          <View key={plant.id ? plant.id : index} style={styles.plant}>
            <Text style={styles.plantName}>{plant.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.centeredView}>
        <Modal
          style={styles.modalbox}
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.header}>
                <Text style={styles.modalText}>Uus taim</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.closeModal}>
                  <View>
                    <Icon name="times" size={30} color="darkgrey" />
                  </View>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder={'Sisesta taime nimi..'}
                onChangeText={val => setInput('title', val)}
                value={formState.title}
              />
              <SelectList
                setSelected={val => setSelected(val)}
                data={data}
                placeholder="Kasvukoht / Peenar ..."
                search={false}
                maxHeight={170}
                boxStyles={styles.selectList}
                arrowicon={
                  <Icon name="chevron-down" size={12} color={'black'} />
                }
                onSelect={() => setInput('peenarTaimedId', selected)}
              />
              <TextInput
                style={styles.input}
                placeholder={'Istutusaeg dd/MM/YYYY'}
                onChangeText={val => setInput('date', val)}
                value={formState.date}
              />
              <TextInput
                style={styles.input}
                placeholder={'Lisainfo'}
                onChangeText={val => setInput('additionalInfo', val)}
                value={formState.additionalInfo}
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

export default PlantScreen;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 60,
    left: 20,
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    width: 280,
    height: 50,
  },
  modalbox: {
    margin: 0,
  },
  modalText: {
    marginTop: 5,
    marginLeft: 10,
    width: 140,
    fontWeight: 'bold',
    fontSize: 20,
  },
  closeModal: {
    width: 130,
    alignItems: 'flex-end',
  },
  selectList: {width: 280, marginBottom: 10},
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
  },
  plant: {
    marginBottom: 15,
  },
  input: {
    width: 280,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
  },
  plantListWrapper: {marginTop: 20},
  plantName: {fontSize: 18},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
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
    width: 280,
    borderRadius: 20,
    backgroundColor: '#42BEA5',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
