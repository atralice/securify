import React from 'react';
import { StyleSheet, View , Text, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';

import Icon from 'react-native-vector-icons/FontAwesome';

import MenuStakeHolders from '../components/MenuStakeHolders'

class ContactosContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      text: e,
    })
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Contactos</Text>
        </View>
        <View style={styles.barra}>
          <TextInput
            onChangeText={this.handleChange}
            value={this.state.text}
            style={styles.input}
            placeholder="A quien buscas?"
          />
          <Icon
            style={styles.logo}
            name='search'
            color='white'
            size={25}
          />
      </View>
      { (this.props.contactos.length) ?
        <MenuStakeHolders
          contactos= {this.props.contactos}
          filtrar= {this.state.text}
        />
        :
        null
      }
     </View>
    );
  }
};

function mapStateToProps(state){  
  return {contactos: state.contactosCelular}
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}


var styles = StyleSheet.create({
  content:{
    flex:1,
  },
  header:{
    paddingTop: 30,    
    width: '100%',    
    backgroundColor: 'black',
  },
  headerText:{
    justifyContent: 'center',        
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 35,
    width: '80%',
    backgroundColor: 'white',
    marginLeft: 20,
    color: 'black'
  },
  logo: {
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 12,
    position: 'relative'
  },
  barra: {
    width: '100%',
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactosContainer);
