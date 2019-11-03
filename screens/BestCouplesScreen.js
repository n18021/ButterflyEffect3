import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';
import request from 'superagent';
import YouTube from 'react-youtube';

const BestCouplesScreen = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);
  const [maxResult, setMaxResult] = useState(1);

  const loadedJSON = (err, res) => setData(res.body)

  const getData = (newValue, newMaxResult) => {
    const URI = 'https://www.googleapis.com/youtube/v3/search'
    const KEY = 'YOUR_YoutubeDataAPIkey'
    let params = {
      'key': KEY,
      'part': 'snippet',
      'q': newValue,
      'type': 'video',
      'order': 'relevance',
      'maxResults': newMaxResult
    }
    request.get(URI)
      .query(params)
      .end(loadedJSON)
  }
  useEffect((prevProps) => {
    if (inputValue !== prevProps.value) {
      getData(inputValue, prevProps.maxResult);
    }
  });

  const valueChange = (e) => {
    const newValue = e.value;
    setInputValue(newValue);
  }

  const plusResult = () => {
    setMaxResult(maxResult + 1);
  }

  return (
    <View>
      <VideoView
        data={data}
        maxResult={maxResult}
      />

      <Button
        title="+"
        onPress={plusResult}
      />
      <Text>{maxResult}</Text>

      <SearchBox
        onChange={e => { valueChange(e) }}
      />
    </View>
  )
}

const VideoView = (props) => {
  const [data, setData] = useState(props.data);
  const [maxResult, setMaxResult] = useState(props.maxResult);

  useEffect((nextProps) => {
    if (nextProps.data !== data) {
      setData(nextProps.data)
    }
    if (nextProps.maxResult !== maxResult) {
      setMaxResult(nextProps.maxResult)
    }
  });

  const onReady = (event) => {
    event.target.pauseVideo();
  }

  const opts = {
    height: 300,
    width: 300,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  let Videos = []
  if (data != null) {
    for (let i = 0; i < maxResult; i++) {
      Videos.push(
        <YouTube
          videoId={data.items[i].id.videoId}
          opts={opts}
          onReady={onReady}
        />
      )
    }
  }
  return (
    <View>
      {Videos}
    </View>
  );
}

const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState(props.inputValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (props.onChange) {
      props.onChange.bind({
        target: this,
        value: newValue,
      })
    }
  }

  useEffect((nextProps) => {
    setInputValue(nextProps.value);
  })

  return (
    <View>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      value={inputValue}
      onChangeText={text => setInputValue(text)}
    />
    </View>
  );
}

const styles = StyleSheet.create({});

export default BestCouplesScreen;
