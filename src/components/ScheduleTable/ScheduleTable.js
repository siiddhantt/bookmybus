import React from 'react';
import {View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import styles from './styles';

const ScheduleTable = ({tableHead, tableData}) => {
  return (
    <View style={styles.container}>
      <Table
        borderStyle={{borderWidth: 2, borderColor: 'rgba(108, 97, 175, 0.5)'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

export default ScheduleTable;
