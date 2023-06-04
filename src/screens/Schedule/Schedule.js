import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {SegmentedControl} from 'segmented-control-rn';
import styles from './styles';
import ScheduleData from '../../assets/ScheduleData.json';

import NavBar from '../../components/NavBar';
import ScheduleTable from '../../components/ScheduleTable';

export default function Schedule() {
  const segments = [
    {
      active: <Text style={styles.ACTIVE}>Mon-Fri</Text>,
      inactive: <Text style={styles.INACTIVE}>Mon-Fri</Text>,
    },
    {
      active: <Text style={styles.ACTIVE}>Sat-Sun</Text>,
      inactive: <Text style={styles.INACTIVE}>Sat-Sun</Text>,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.scrollView}>
      <ScrollView>
        <View style={styles.segmentView}>
          <SegmentedControl
            style={styles.segment}
            onChange={index => setActiveIndex(index)}
            segments={segments}
            selectedIndex={activeIndex}
            tintColor={'#6C61AF'}
          />
        </View>
        {activeIndex === 0 ? (
          <>
            <Text style={styles.heading}>Bus - 1 (MP20PA7297)</Text>
            <ScheduleTable
              tableHead={ScheduleData.mon_fri.bus1.tableHead}
              tableData={ScheduleData.mon_fri.bus1.tableData}
            />
            <Text style={styles.heading}>Bus - 2 (MP20PA6297)</Text>
            <ScheduleTable
              tableHead={ScheduleData.mon_fri.bus2.tableHead}
              tableData={ScheduleData.mon_fri.bus2.tableData}
            />
          </>
        ) : (
          <>
            <Text style={styles.heading}>Bus - 1 (MP20PA7297)</Text>
            <ScheduleTable
              tableHead={ScheduleData.sat_sun.bus1.tableHead}
              tableData={ScheduleData.sat_sun.bus1.tableData}
            />
            <Text style={styles.heading}>Bus - 2 (MP20PA6297)</Text>
            <ScheduleTable
              tableHead={ScheduleData.sat_sun.bus2.tableHead}
              tableData={ScheduleData.sat_sun.bus2.tableData}
            />
          </>
        )}
      </ScrollView>
      <NavBar currentScreen={'Schedule'} />
    </View>
  );
}
