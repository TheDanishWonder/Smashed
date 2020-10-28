import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
} from "react-native";

import activeDeck from "../../containers/active-deck";
import players from "../../containers/players";
import { LinearGradient } from "expo-linear-gradient";

const height = Dimensions.get("window").height; //for full screen
const width = Dimensions.get("window").width; //for full screen

class GameDeck extends Component {
  state = {
    text: "",
    isGameDone: false,
    bgColor: "#ffb677",
    currentIndex: 0,
    color: new Animated.Value(0),
    btnColor: new Animated.Value(0),
    animating: false,
    card: false,
    bgColor: false,
  };

  async componentDidMount() {
    await this.handleNextCard();

    var CustomAnimation = {
      duration: 1500,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 1.3,
      },
    };

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ card: true });
    }, 1500);
    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ bgColor: true });
    }, 300);
  }

  handleNextCard = async () => {
    try {
      const card = await activeDeck.getCard();
      this.setState(
        {
          isGameDone: !card,
        },
        () => {
          this.changeLabel(card ? card(players.state.players) : "");
          this.doTransition();
        }
      );
    } catch (error) {
      console.log(error);
      this.handleBack();
    }
  };

  doTransition = () => {
    Animated.sequence([Animated.delay()]).start();
  };

  changeLabel = (text) => {
    setTimeout(() => {
      this.setState({
        text,
        animating: true,
        currentIndex: this.state.currentIndex + 1,
      });
    });
  };

  componentWillUnmount() {
    this.handleNextCard();
  }

  handleBack = () => this.props.navigation.goBack();

  render() {
    const {
      text,
      isGameDone,
      animating,
      currentIndex,
      card,
      bgColor,
    } = this.state;
    const btnHandler = isGameDone ? this.handleBack : this.handleNextCard;

    return (
      <Animated.View style={styles.container}>
        {bgColor && (
          <View style={styles.gameBoard}>
            <LinearGradient
              // Background Linear Gradient
              colors={[randomRB(), randomRG()]}
              style={styles.imageBackground}
              start={{ x: -1, y: 0 }}
              end={{ x: -1, y: 1.3 }}
            >
              {card && (
                <View style={styles.textContainer}>
                  <TouchableOpacity
                    mode="outlined"
                    color="#fff"
                    onPress={btnHandler}
                    hitSlop={{ top: 500, bottom: 700, left: 100, right: 100 }}
                    style={[styles.btn]}
                    type="contained"
                    dark
                  >
                    {currentIndex === 0 ? null : (
                      <Animated.Text
                        style={[
                          styles.text,
                          { color: animating ? randomRGB() : randomRGB() },
                        ]}
                      >
                        {text}
                      </Animated.Text>
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </LinearGradient>
          </View>
        )}
      </Animated.View>
    );
  }
}

let randomRGB = () => {
  let red = Math.floor(Math.random() * 255);
  if (red < 30) {
    red + 50;
  }
  let green = Math.floor(Math.random() * 255);
  if (green < 30) {
    green + 50;
  }
  let blue = Math.floor(Math.random() * 255);
  if (blue < 30) {
    blue + 50;
  }
  let color =
    "'" + "rgba(" + red + "," + green + "," + blue + "," + "1.0" + ")" + "'";
    
  return color;
};

let randomRB = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color =
    "'" + "rgba(" + red + "," + green + "," + blue + "," + "1.0" + ")" + "'";

  return color;
};

let randomRG = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color =
    "'" + "rgba(" + red + "," + green + "," + blue + "," + "1.0" + ")" + "'";

  return color;
};
const styles = StyleSheet.create({
  container: { flex: 1, overflow: "hidden" },
  textContainer: {
    height: "65%",
    width: "75%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
  text: {
    fontFamily: "GloriaHallelujah",
    color: "#f5c144",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,1.0)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 2,
  },
  btn: {
    margin: 10,
  },
  imageBackground: {
    transform: [{ rotate: "90deg" }],
    width: height,
    height: width,
    alignItems: "center",
    justifyContent: "center",
  },
  gameBoard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameDeck;
