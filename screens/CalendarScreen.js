import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { LocaleConfig, Agenda } from 'react-native-calendars';

LocaleConfig.locales['ja'] = {
  monthNames:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  dayNames:['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日','日曜日'],
  dayNamesShort:['日 曜',' 月 曜',' 火 曜',' 水 曜',' 木 曜',' 金 曜',' 土 曜',' 日 曜'],
  today: '今日'
};

//LocaleConfig.defaultLocale = 'ja';

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this._default = {};
    this._default.items = {
      '2019-11-03': [{text: '11月3日の予定1です'}],
      '2019-11-04': [{text: '11月4日の予定です'}],
      '2019-11-06': [{text: '11月6日の予定です'}]
    };

    this.state = {
      items: { }
    };
  }
  renderItem(item, firstItemInDay){
    return <View style={[styles.item, {height: styles.height}]}><Text>{item.text}</Text></View>;
  }
  renderEmptyDate(){
    return <View style={styles.emptyDate}><Text>&nbsp;</Text></View>;
  } 
  loadItems(day) {
    let _items = JSON.parse(JSON.stringify(this.state.items));
    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = this.timeToString(time);
      if(!this.state.items[strTime]){
        if(this._default.items[strTime]) {
          _items[strTime] = this._default.items[strTime];
        } else {
          _items[strTime] = [];
        }
      }
    }

    this.setState({
      items: _items
    });

  }
  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={(day) => this.loadItems(day)}
        renderItem={(item, firstItemInDay) => this.renderItem(item, firstItemInDay)}
        renderEmptyDate={() => this.renderEmptyDate()}
        rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
        style={{}}
        refreshing={false}
      />
    );
  }
};

CalendarScreen.navigationOptions = () => {
  return {
    headerTitle: "アルバムカレンダー",
  };
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height: 50
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

//export default CalendarScreen;

