import { Container, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { selectBsddDataLoaded } from '../../../common/src/BsddApi/bsddSlice';
import { BsddSettings } from '../../../common/src/IfcData/bsddBridgeData';
import { setValidatedIfcData } from '../../../common/src/IfcData/ifcDataSlice';
import { mockData } from '../../../common/src/IfcData/mockData';
import { setSettingsWithValidation } from '../../../common/src/settings/settingsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Selection from '../features/Selection/Selection';
import Settings from '../features/Settings/Settings';

function HomePage() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const bsddDataLoaded = useAppSelector(selectBsddDataLoaded);
  const [pendingSettings, setPendingSettings] = useState<BsddSettings | null>(null);

  const dispatchSettingsWhenLoaded = (settings: BsddSettings) => {
    setPendingSettings(settings);
  };

  useEffect(() => {
    if (bsddDataLoaded && pendingSettings) {
      dispatch(setSettingsWithValidation(pendingSettings));
      setPendingSettings(null);
    }
  }, [bsddDataLoaded, pendingSettings, dispatch]);

  useEffect(() => {
    const { settings, ifcData } = mockData;
    dispatch(setValidatedIfcData(ifcData));
    dispatchSettingsWhenLoaded(settings);
  }, [dispatch]);

  // useEffect(() => {
  //   if (!bsddDataLoaded) {
  //     return;
  //   }
  //   console.log('bsddDataLoaded', bsddDataLoaded);
  //   const { ifcData } = mockData;
  //   dispatch(setValidatedIfcData(ifcData));
  // }, [dispatch, bsddDataLoaded]);

  // Initial settings load
  useEffect(() => {
    const loadSettings = async () => {
      // @ts-ignore
      if (window?.bsddBridge) {
        // @ts-ignore
        const settings = await window.bsddBridge.loadSettings();
        console.log('settings', settings);
        dispatchSettingsWhenLoaded(JSON.parse(settings));
      }
    };

    loadSettings();
  }, []);

  // @ts-ignore
  window.updateSelection = (ifcEntities: IfcEntity[]) => {
    dispatch(setValidatedIfcData(ifcEntities));
  };

  // @ts-ignore
  window.updateSettings = (settings: BsddSettings) => {
    console.log('updateSettings', settings);
    setSettingsWithValidation(settings);
  };

  // useEffect(() => {
  //   const dictionary = bsddBridgeData.mainDictionary;
  //   if (!dictionary) return;
  //   const mainDictionaryUri = dictionary?.dictionaryUri;
  //   const mainDictionaryName = dictionary?.dictionaryName;
  //   if (!mainDictionaryUri) {
  //     setMainDictionary(undefined);
  //     return;
  //   }
  //   const mainDictionaryResult = bsddDictionaries.find((item) => item.uri === mainDictionaryUri);
  //   if (!mainDictionaryResult) {
  //     setMainDictionary(undefined);
  //     return;
  //   }
  //   if (mainDictionaryResult.name !== mainDictionaryName) {
  //     setMainDictionary({
  //       dictionaryUri: mainDictionaryResult.uri,
  //       dictionaryName: mainDictionaryResult.name,
  //       parameterName: dictionary.parameterName,
  //       parameterId: dictionary.parameterId,
  //       parameterMapping: dictionary.parameterMapping,
  //     });
  //   }
  // }, [bsddBridgeData, bsddDictionaries]);

  // useEffect(() => {
  //   const filterDictionariesData = bsddBridgeData.filterDictionaries;
  //   if (!filterDictionariesData) {
  //     setFilterDictionaries([]);
  //     return;
  //   }
  //   if (filterDictionariesData.length === 0) {
  //     return;
  //   }

  //   let changed = false;
  //   const updatedFilterDictionaries: BsddDictionary[] = filterDictionariesData.reduce((acc: BsddDictionary[], dictionary) => {
  //     const dictionaryUri = dictionary.dictionaryUri;
  //     const dictionaryName = dictionary.dictionaryName;
  //     const dictionaryResult = bsddDictionaries.find((item) => item.uri === dictionaryUri);

  //     if (!dictionaryResult) {
  //       return acc;
  //     }

  //     if (dictionaryResult.name !== dictionaryName) {
  //       changed = true;
  //       acc.push({
  //         dictionaryUri: dictionaryResult.uri,
  //         dictionaryName: dictionaryResult.name,
  //         parameterName: dictionary.parameterName,
  //         parameterId: dictionary.parameterId,
  //         parameterMapping: dictionary.parameterMapping,
  //       });
  //     } else {
  //       acc.push(dictionary);
  //     }

  //     return acc;
  //   }, []);

  //   if (changed) {
  //     setFilterDictionaries(updatedFilterDictionaries);
  //   }
  // }, [bsddBridgeData, bsddDictionaries]);

  // useEffect(() => {
  //   const filterDictionaryUris = bsddBridgeData.filterDictionaries.map((item) => item.dictionaryUri);
  //   if (!filterDictionaryUris && filterDictionaries.length == 0) return;
  //   const filterDictionariesResult = bsddDictionaries.filter((item) => filterDictionaryUris.includes(item.uri));
  //   if (!filterDictionariesResult || filterDictionariesResult.length === 0) return;
  //   setFilterDictionaries(
  //     bsddDictionaries
  //       .filter((item) => filterDictionaryUris.includes(item.uri))
  //       .map((item) => ({
  //         dictionaryUri: item.uri,
  //         dictionaryName: item.name,
  //         parameterName: '',
  //         parameterId: '',
  //         parameterMapping: '',
  //       })),
  //   );
  // }, [bsddBridgeData, bsddDictionaries]);

  return (
    <Container size="40rem">
      <Tabs defaultValue="koppelen">
        <Tabs.List grow>
          <Tabs.Tab value="koppelen">{t('Link')}</Tabs.Tab>
          <Tabs.Tab value="settings">{t('Settings')}</Tabs.Tab>
        </Tabs.List>

        <Selection />
        <Settings />
      </Tabs>
    </Container>
  );
}

export default HomePage;
