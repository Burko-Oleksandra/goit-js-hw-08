import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(videoplayerCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function videoplayerCurrentTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
