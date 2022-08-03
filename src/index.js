import React from 'react';
import { render } from 'react-dom';
import {
  Page,
  Text,
  Document,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Font,
  Image,
  View,
} from '@react-pdf/renderer';

const MyPage = () => (
  <Page size="A4" style={styles.body}>
    <View>
      <Image
        source="http://1077-202-80-212-151.ngrok.io/upload/170/file"
        // source="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />
    </View>
  </Page>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const MyDoc = () => (
  <Document>
    <MyPage />
  </Document>
);

const App = () => (
  <>
    <PDFViewer style={{ width: '600px', height: '800px' }}>
      <MyDoc />
    </PDFViewer>
    <img src="http://1077-202-80-212-151.ngrok.io/upload/170/file" />
  </>
);

render(<App />, document.getElementById('root'));
