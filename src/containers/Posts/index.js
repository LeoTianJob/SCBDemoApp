import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import PostItem from '../../components/PostItem';

import styles from './styles';
class Posts extends Component {
    render() {
        const { container } = styles;

        return (
            <View>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </View>
        );
    }
}

export default Posts;
