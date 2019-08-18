import {observer} from 'mobx-react';
import {Header} from 'native-base';
import React, {PureComponent} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import screens from '../../libs/screens';
import styles from './styles';
import ThemeStore from '../../stores/theme';
import getAssets from '../../libs/image';

@observer
class Intro extends PureComponent {
  onDone() {
    const {navigation} = this.props;
    navigation.replace(screens.RequestOtp);
  }

  onSkip() {
    const {navigation} = this.props;
    navigation.replace(screens.RequestOtp);
  }

  renderItem = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          androidStatusBarColor={item.backgroundColor}
          iosBarStyle="light-content"
          style={{backgroundColor: item.backgroundColor}}
        />
        <View style={styles.mainContent(item.backgroundColor)}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={{uri: getAssets(item.image)}} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </SafeAreaView>
    );
  };

  getTags = tags => {
    return tags.map(tag => {
      return {
        key: tag.index.value,
        title: tag.title.value,
        text: tag.text.value,
        image: tag.image.value,
        backgroundColor: tag.backgroundColor.value,
      };
    });
  };

  render() {
    const getScreens = ThemeStore.getScreen;

    return (
      <AppIntroSlider
        slides={this.getTags([
          getScreens.intro_slider_1.tags,
          getScreens.intro_slider_2.tags,
          getScreens.intro_slider_3.tags,
          getScreens.intro_slider_4.tags,
        ])}
        renderItem={data => this.renderItem(data)}
        onDone={() => this.onDone()}
        onSkip={() => this.onSkip()}
        showSkipButton
        showDoneButton
        showNextButton
        showPrevButton
        activeDotStyle={{backgroundColor: 'skyblue'}}
        dotStyle={{backgroundColor: 'white'}}
      />
    );
  }
}

export default Intro;
