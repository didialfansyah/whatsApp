import React, {Component, useEffect} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Content,
  Text,
  Container,
  Fab,
  Icon,
  Button,
} from 'native-base';
import { connect } from 'react-redux';

import appStyles from '../appStyles';
import getNewStatusAction from '../actions/getNewStatusAction';
import getViewStatusAction from '../actions/getViewStatusAction';
import getProfileAction from '../actions/getProfileAction';

const StatusScreen = (props) => {
  useEffect(() => {
    props.getNewStatus();
    props.getViewStatus();
    props.getProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
      <Container>
        <Content>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                  props.profile.avatar,
                }}
              />
              <Icon
                type="MaterialIcons"
                name="add-circle"
                style={appStyles.addStatusIcon}
              />
            </Left>
            <Body>
              <Text>{props.profile.name}</Text>
              <Text note>{props.profile.time}</Text>
            </Body>
          </ListItem>
          
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Recent Updates
            </Text>
          </ListItem>

          {
            props.status.map((show) => (
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
                  <Text note>{show.time}</Text>
                </Body>
              </ListItem>
            ))
          }

          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Viewed Updates
            </Text>
          </ListItem>
          
          {
            props.viewed.map((show) => (
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
                  <Text note>{show.time}</Text>
                </Body>
              </ListItem>
            ))
          }

        </Content>
        <Fab
          style={appStyles.fabColor}
          active={true}
          direction="up"
          position="bottomRight">
          <Icon type="MaterialIcons" name="photo-camera" />
          <Button style={{backgroundColor: '#F5F5F5'}}>
            <Icon type="MaterialIcons" name="edit" style={{color: '#40739e'}} />
          </Button>
        </Fab>
      </Container>
    );
}

const toState = (state) => {
  return {
      status : state.status,
      viewed : state.viewed,
      profile : state.profile
  }
}

const toDispatch = (dispatch) => {
  return {
      getNewStatus : () => dispatch(getNewStatusAction()),
      getViewStatus : () => dispatch(getViewStatusAction()),
      getProfile : () => dispatch(getProfileAction())
  }
}

export default connect(toState, toDispatch)(StatusScreen);