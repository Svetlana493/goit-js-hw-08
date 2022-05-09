import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time"

const onPlay = function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

const savedCurrentTime = localStorage.getItem(STORAGE_KEY) ? localStorage.getItem(STORAGE_KEY) : 0;

player.setCurrentTime(savedCurrentTime);

player.on('timeupdate', throttle(onPlay, 1000));