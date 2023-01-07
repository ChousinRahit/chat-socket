import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  Button,
} from 'react-native';
import Modal from './component/Modal';
import ChatComponent from './component/ChatComponent';

import socket from '../utils/socket';
import {styles} from '../utils/styles';

const Chat = () => {
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([]);

  useLayoutEffect(() => {
    function fetchGroups() {
      // fetch('http://192.168.0.106:4000/api')
      fetch('https://socser.onrender.com/api')
        .then(res => res.json())
        .then(data => {
          setRooms(data);
          console.log(data);
        })
        .catch(err => {
          console.error(err);
          console.log({err});
        });
    }
    fetchGroups();
  }, []);

  console.log(socket);
  useEffect(() => {
    console.log(socket);
    socket.on('roomsList', rooms => {
      console.log(rooms);
      setRooms(rooms);
    });
  }, [socket]);

  const handleCreateGroup = () => setVisible(true);

  return (
    <SafeAreaView style={styles.chatscreen}>
      <View style={styles.chattopContainer}>
        <View style={styles.chatheader}>
          <Text style={styles.chatheading}>Chats</Text>
          <Button
            onPress={handleCreateGroup}
            style={styles.AddButton}
            title="Add Room"
          />
        </View>
      </View>

      <View style={styles.chatlistContainer}>
        {rooms.length > 0 ? (
          <FlatList
            data={rooms}
            renderItem={({item}) => <ChatComponent item={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.chatemptyContainer}>
            <Text style={styles.chatemptyText}>No rooms created!</Text>
            <Text>Click the icon above to create a Chat room</Text>
          </View>
        )}
      </View>
      {visible ? <Modal setVisible={setVisible} /> : ''}
    </SafeAreaView>
  );
};

export default Chat;
