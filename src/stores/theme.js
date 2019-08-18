import { flow, types } from 'mobx-state-tree'; // A
import ValidationError from '../models/validation_error';
import makeRequest from '../services/make_request';
import { themeUrlProd } from '../libs/vars';

const Tag = types.model('Tag', {
  id: types.integer,
  type: types.string,
  key: types.string,
  value: types.string,
  description: types.string,
});

const Screen = types.model('Screen', {
  id: types.integer,
  key: types.string,
  name: types.string,
  tags: types.array(Tag),
});

const ThemeStore = types
  .model('ThemeStore', {
    screens: types.optional(types.array(Screen), []),
    loading: false,
    errors: types.maybeNull(ValidationError),
  })
  .views(self => ({
    get getScreen() {
      if (self.screens.length) {
        return this.arrayToMap(
          self.screens.map(screen => {
            return {
              ...screen,
              tags: this.arrayToMap(screen.tags),
            };
          })
        );
      }

      return null;
    },
  }))
  .actions(self => ({
    arrayToMap(array) {
      return array.reduce((accumulator, currentValue) => {
        accumulator[currentValue.key] = currentValue;
        return accumulator;
      }, {});
    },
    getTheme: flow(function*() {
      try {
        const { data } = yield makeRequest(`${themeUrlProd}/api/project`, {
          secret_key: 'zekFUtG3Kp4HNpVe',
        });

        const { screens } = data;

        self.screens = screens;
        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),
  }))
  .create();

export default ThemeStore;
