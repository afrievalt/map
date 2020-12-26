import {TextField} from '@material-ui/core';
import React from 'react';
import firebase from 'firebase/app'

import { useFirebaseConnect } from 'react-redux-firebase';

const FirebaseListener = () => {
  useFirebaseConnect([
    {
      path: 'cms'
    }
  ])
  return null;
}

export default FirebaseListener;