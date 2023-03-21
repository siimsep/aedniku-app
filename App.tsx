import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';

import {Amplify} from 'aws-amplify';

import config from './src/aws-exports';

import {withAuthenticator} from '@aws-amplify/ui-react-native';
Amplify.configure(config);

const AedApp = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default withAuthenticator(AedApp);
