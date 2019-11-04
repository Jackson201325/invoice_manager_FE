import { List, Record } from 'immutable';

export interface ISetting {
  descrip: string;
  id: string;
  index: number;
  isGAFeature: boolean;
  settingType: number;
  title: string;
  value: boolean;
}

export interface ISettingOption {
  descrip: string;
  id: string;
  index: number;
  isGAFeature: boolean;
  options: Array<string>;
  settingType: number;
  title: string;
  value: boolean;
}

export const toggleSettingRecord = Record({
  descrip: '',
  id: '',
  index: 0,
  isGAFeature: false,
  settingType: 0,
  title: '',
  value: false,
  fatLowerCaseString() {
    return `${this.descrip} ${this.title} ${this.value ? 'true' : 'false'}`.toLocaleLowerCase();
  },
});

export const textSettingRecord = Record({
  descrip: '',
  id: '',
  index: 0,
  isGAFeature: false,
  settingType: 0,
  title: '',
  value: false,
  fatLowerCaseString() {
    return `${this.descrip} ${this.title} ${this.value ? 'true' : 'false'}`.toLocaleLowerCase();
  },
});

export const optionSettingRecord = Record({
  options: [],
  descrip: '',
  id: '',
  index: 0,
  isGAFeature: false,
  settingType: 0,
  title: '',
  value: false,
  fatLowerCaseString() {
    return `${this.descrip} ${this.title} ${this.value ? 'true' : 'false'}`.toLocaleLowerCase();
  },
});

export function getSettingsArrayFromList(settings) {
  console.log(settings);
  const result: object[] = [];
  // settings.forEach(setting => {
  //   const data = {
  //     title: setting.title,
  //     descrip: setting.descrip,
  //     value: setting.value,
  //   };
  //   result.push(data);
  // });
  return result;
}
