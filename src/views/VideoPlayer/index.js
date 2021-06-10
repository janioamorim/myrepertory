import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import {Container, Title, TitleText, Contant} from './styled';

// COMPONENTES
import Header from '../../components/Header';

export default function VideoPlayer({navigation}) {
  function idUrl(url) {
    // Remove everything to the last slash in URL
    url = url.substr(1 + url.lastIndexOf('/'));
    // Break URL at / and take first part (file name, extension)
    url = url.split('/')[0];
    // Sometimes URL doesn't have ? but #, so we should aslo do the same for #
    url = url.split('#')[0];
    return url;
  }

  return (
    <Container>
      <Header showNotification={true} showBack={true} navigation={navigation} />

      <Title>
        <TitleText>Video Player</TitleText>
      </Title>

      <Contant>
        <YoutubePlayer
          height={300}
          width={380}
          play={true}
          videoId={idUrl(navigation.state.params.videoURL)}
        />
      </Contant>

      {/* <Footer icon={'add'} onPress={() => {}} /> */}
    </Container>
  );
}
