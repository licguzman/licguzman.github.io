import React, { Component } from 'react';
import WebView from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://degrapack.com/radical' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
