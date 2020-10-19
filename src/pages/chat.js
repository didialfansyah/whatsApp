import React, {Component, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';
import { connect } from 'react-redux';

import appStyles from '../appStyles';
import getChatAction from '../actions/getChatAction';

const ChatScreen = (props) => {
    useEffect(() => {
        props.getChat();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Container>
        <Content>
          {
            props.chat.map((show) => (
              <ListItem avatar key={show.id}>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        show.avatar,
                    }}
                  />
                </Left>
                <Body>
                  <Text>{show.name}</Text>
                  <Text note>{show.chat[0].Text}</Text>
                </Body>
                <Right style={{height: 67.5, maxHeight: 'auto'}}>
                  <Text note style={show.status === 1 ? styles.green : styles.gray}>
                  {show.chat[0].Time}
                  </Text>
                  <View style={show.status === 1 ? styles.show : styles.hide}>
                    <Badge style={appStyles.badgeChats}>
                      <Text style={appStyles.badgeTextChats}>1</Text>
                    </Badge>
                  </View>
                </Right>
              </ListItem>
            ))
          }
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
}

const styles = StyleSheet.create({
  hide : {
    display : 'none',
  },
  show : {
    display : 'flex',
  },
  green : {
    color: '#00a8ff'
  },
  gray : {
    color : '#888'
  }
});
const toState = (state) => {
    return {
        chat : state.chat
    }
}

const toDispatch = (dispatch) => {
    return {
        getChat : () => dispatch(getChatAction())
    }
}

export default connect(toState, toDispatch)(ChatScreen);