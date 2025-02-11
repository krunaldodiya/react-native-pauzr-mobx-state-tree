import React, {PureComponent, ReactFragment} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NavigationScreenProp} from 'react-navigation';
import getAssets from '../../libs/image';
import screens from '../../libs/screens';
import ThemeStore from '../../stores/theme';
import styles from './styles';

export interface IntroPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class IntroPage extends PureComponent<IntroPageProps> {
  componentDidMount() {
    StatusBar.setBackgroundColor('#0D62A2');
    StatusBar.setBarStyle('light-content');
  }

  onDone() {
    const {navigation} = this.props;
    navigation.replace(screens.RequestOtp);
  }

  onSkip() {
    const {navigation} = this.props;
    navigation.replace(screens.RequestOtp);
  }

  renderItem(data: any) {
    const {item} = data;

    return (
      <View style={styles.mainContent(item.backgroundColor)}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{uri: getAssets(item.image)}} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  getTags(tags: any[]) {
    return tags.map((tag: any) => {
      return {
        key: tag.key.value,
        title: tag.title.value,
        text: tag.text.value,
        image: tag.image.value,
        backgroundColor: tag.backgroundColor.value,
      };
    });
  }

  render(): ReactFragment {
    const getScreens = ThemeStore.getScreen;

    return (
      <SafeAreaView style={{flex: 1}}>
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
          activeDotStyle={{backgroundColor: 'lightblue'}}
          dotStyle={{backgroundColor: 'white'}}
        />
      </SafeAreaView>
    );
  }
}

export default IntroPage;
