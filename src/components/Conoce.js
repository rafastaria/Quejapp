import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Picker,
  View,
  Alert,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import { StackNavigator } from "react-navigation";

console.disableYellowBox = true;

const respuesta = "p";

class Conoce extends React.Component {
  static navigationOptions = {
    title: "Analiza tu caso",
    buttonPrss: false
  };

  constructor(props) {
    super(props);
    this.state = {
      First: "",
      Second: "",
      Third: "",
      Fourth: "",
      Fifth: "",
      Response: ""
    };
    this.Analyze = this.Analyze.bind(this);
  }

  selectFirst = first => {
    this.setState({ First: first });
  };

  selectSecond = second => {
    this.setState({ Second: second });
  };

  selectThird = third => {
    this.setState({ Third: third });
  };

  selectFourth = fourth => {
    this.setState({ Fourth: fourth });
  };

  selectFifth = fifth => {
    this.setState({ Fifth: fifth });
  };

  SelectDependence = dependencia => {
    this.setState({ Dependencia: dependencia });
  };

  Analyze(su) {
    su = this.respuesta;

    this.setState({
      Response: su
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            paddingTop: 25,
            justifyContent: "center",
            alignSelf: "center",
            width: window.width * 0.8
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", alignSelf: "center" }}>
            En esta sección, podrás analizar que tipo de acto corruptivo estas
            presenciando/recibiendo a través de este cuestionario.
          </Text>
        </View>
        <View style={styles.pickers_container}>
          <View style={styles.picker}>
            <Text style={{ fontSize: 18 }}> ¿Es un servidor público?</Text>
            <Picker
              selectedValue={this.state.First}
              onValueChange={this.selectFirst}
            >
              <Picker.Item label="Selecciona la respuesta" value="" />
              <Picker.Item label="Si" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>

          <View style={styles.picker}>
            <Text style={{ fontSize: 18 }}>
              {" "}
              ¿Hizo uso de la fuerza pública para evitar que se cumpliera una
              ley?
            </Text>
            <Picker
              selectedValue={this.state.Second}
              onValueChange={this.selectSecond}
            >
              <Picker.Item label="Selecciona la respuesta" value="" />
              <Picker.Item label="Si" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>

          <View style={styles.picker}>
            <Text style={{ fontSize: 18 }}>
              {" "}
              ¿Te insultó, hirió o amenazó mientras hacía uso de su puesto?
            </Text>
            <Picker
              selectedValue={this.state.Third}
              onValueChange={this.selectThird}
            >
              <Picker.Item label="Selecciona la respuesta" value="" />
              <Picker.Item label="Si" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>

          <View style={styles.picker}>
            <Text style={{ fontSize: 18 }}>
              {" "}
              ¿Se te negó algún servicio injustificadamente?
            </Text>
            <Picker
              selectedValue={this.state.Fourth}
              onValueChange={this.selectFourth}
            >
              <Picker.Item label="Selecciona la respuesta" value="" />
              <Picker.Item label="si" value={true} />
              <Picker.Item label="no" value={false} />
            </Picker>
          </View>

          <View style={styles.picker}>
            <Text style={{ fontSize: 18 }}>
              {" "}
              ¿Se apropio de recursos destinados a otros?
            </Text>
            <Picker
              selectedValue={this.state.Fifth}
              onValueChange={this.selectFifth}
            >
              <Picker.Item label="Selecciona la respuesta" value="" />
              <Picker.Item label="si" value={true} />
              <Picker.Item label="no" value={false} />
            </Picker>
          </View>

          {Result}
        </View>

        <TouchableOpacity
          onPress={() =>
            this.setState({
              Response:
                "Posible abuso de autoridad: Es una situación donde la autoridad o individuo debido a su posición, utiliza el poder para su beneficio"
            })
          }
          style={styles.analyzeButton}
        >
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}>
            {" "}
            Analiza tu caso{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Resultado}>
          <Text style={styles.analyzedText}> {this.state.Response} </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  analyzeButton: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7,
    height: window.width * 0.2,
    marginTop: 15,
    borderRadius: 80,
    backgroundColor: "#425d8b"
  },

  analyzedText: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 0,
    height: window.height * 0.2,
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7,
    color: "#000"
  },
  pickers_container: {
    justifyContent: "center",
    marginTop: window.height * 0.05,
    paddingBottom: window.height * 0.1
  },
  button_text: {
    color: "#FFF",
    fontSize: 20
  },
  Result_View: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 200,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10
  },
  Result_Boldtext: {
    color: "#000",
    fontWeight: "bold"
  },

  Result_text: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    padding: 10
  },
  get_type: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7,
    height: window.width * 0.2,
    marginTop: 15,
    borderRadius: 80,
    backgroundColor: "#425d8b"
  },
  picker: {
    borderColor: "black",
    borderWidth: 1,
    width: window.width * 0.7,
    alignSelf: "center"
  },

  Resultado: {
    width: window.width * 0.75,
    height: window.width * 0.3,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 4,
    borderColor: "#425d8b"
  },

  texto: {
    alignSelf: "center",
    color: "#000",
    fontSize: 18
  }
});

export default Conoce;
