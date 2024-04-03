import { createAction, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bsddEnvironments } from '../../../../common/src/BsddApi/BsddApiEnvironments';
import { defaultEnvironment } from '../../../../common/src/env';
import i18n from '../../../../common/src/i18n';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import type { RootState } from '../../app/store';

const initialState: BsddSettings = {
  bsddApiEnvironment: defaultEnvironment,
  mainDictionary: null,
  filterDictionaries: [],
  language: 'en-GB',
  includeTestDictionaries: false,
};

const handleSetLanguage = (state: BsddSettings, action: PayloadAction<string>) => {
  state.language = action.payload;
  i18n.changeLanguage(action.payload);
};

export const setSettings = createAction<BsddSettings>('settings/setSettings');

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setBsddApiEnvironment: (state, { payload }: PayloadAction<string>) => {
      state.bsddApiEnvironment = payload;
    },
    setMainDictionary: (state, { payload }: PayloadAction<BsddDictionary>) => {
      state.mainDictionary = payload;
    },
    setFilterDictionaries: (state, { payload }: PayloadAction<BsddDictionary[]>) => {
      state.filterDictionaries = payload;
    },
    setLanguage: handleSetLanguage,
    setIncludeTestDictionaries: (state, action: PayloadAction<boolean>) => {
      state.includeTestDictionaries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setSettings,
      (
        state,
        {
          payload: { bsddApiEnvironment, mainDictionary, filterDictionaries, language, includeTestDictionaries },
        }: PayloadAction<BsddSettings>,
      ) => {
        if (JSON.stringify(state.bsddApiEnvironment) !== JSON.stringify(bsddApiEnvironment)) {
          state.bsddApiEnvironment = bsddApiEnvironment;
        }
        if (JSON.stringify(state.mainDictionary) !== JSON.stringify(mainDictionary)) {
          state.mainDictionary = mainDictionary;
        }
        if (JSON.stringify(state.filterDictionaries) !== JSON.stringify(filterDictionaries)) {
          state.filterDictionaries = filterDictionaries;
        }
        if (JSON.stringify(state.language) !== JSON.stringify(language)) {
          handleSetLanguage(state, { payload: language, type: 'setLanguage' });
        }
        if (JSON.stringify(state.includeTestDictionaries) !== JSON.stringify(includeTestDictionaries)) {
          state.includeTestDictionaries = includeTestDictionaries;
        }
      },
    );
  },
});

/**
 * Selects the URI for the bSDD API environment from the Redux state.
 *
 * @param state - The Redux state.
 * @returns The URI for the selected bSDD API environment, or null if no environment is selected.
 */
export const selectBsddApiEnvironmentUri = (state: RootState) => {
  const environment = state.settings.bsddApiEnvironment;
  return environment !== null ? bsddEnvironments[environment] : null;
};

/**
 * Selects the active dictionaries from the Redux state.
 *
 * @param state - The root state object.
 * @returns An array of active dictionaries.
 */
export const selectActiveDictionaries = createSelector(
  (state: RootState) => state.settings.mainDictionary,
  (state: RootState) => state.settings.filterDictionaries,
  (mainDictionary, filterDictionaries) =>
    mainDictionary ? [mainDictionary, ...filterDictionaries] : filterDictionaries,
);

export const selectActiveDictionaryLocations = createSelector(selectActiveDictionaries, (activeDictionaries) =>
  activeDictionaries.map((dictionary) => dictionary.ifcClassification.location),
);

export const selectBsddApiEnvironment = (state: RootState) => state.settings.bsddApiEnvironment;
export const selectMainDictionary = (state: RootState) => state.settings.mainDictionary;
export const selectFilterDictionaries = (state: RootState) => state.settings.filterDictionaries;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectIncludeTestDictionaries = (state: RootState) => state.settings.includeTestDictionaries;
export const selectSettings = (state: RootState) => state.settings;

export const {
  setBsddApiEnvironment,
  setMainDictionary,
  setFilterDictionaries,
  setLanguage,
  setIncludeTestDictionaries,
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
