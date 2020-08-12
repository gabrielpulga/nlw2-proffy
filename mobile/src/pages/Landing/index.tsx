import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import landingImg from '../../assets/images/landing.png';

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} />
        </View>
    );
}

export default Landing;