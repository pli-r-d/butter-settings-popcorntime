'use strict;'

const path = require('path')
const os = require('os')

/** Default settings **/
var Settings = new Object({
    set: function (key, value) {this[key] = value},
    get: function (key) {return this[key]},
    projectName: 'Popcorn Time',
        projectUrl: 'https://popcorntime.sh',
        projectTwitter: 'popcorntimetv',
        projectFacebook: 'PopcornTimedotSh',
        projectGooglePlus: 'popcorntimeshplus',
        projectBlog: 'https://blog.popcorntime.sh/',
        projectForum: 'https://www.reddit.com/r/PopcornTime',

        statusUrl: 'http://status.popcorntime.sh',
        changelogUrl: 'https://github.com/popcorn-official/popcorn-desktop/commits/master',
        issuesUrl: 'https://github.com/popcorn-official/popcorn-desktop/issues',
        sourceUrl: 'https://github.com/popcorn-official/popcorn-desktop/',
        commitUrl: 'https://github.com/popcorn-official/popcorn-desktop/commit',
        updateKey: '-----BEGIN PUBLIC KEY-----\n' +
            'MIIBtjCCASsGByqGSM44BAEwggEeAoGBAPNM5SX+yR8MJNrX9uCQIiy0t3IsyNHs\n' +
            'HWA180wDDd3S+DzQgIzDXBqlYVmcovclX+1wafshVDw3xFTJGuKuva7JS3yKnjds\n' +
            'NXbvM9CrJ2Jngfd0yQPmSh41qmJXHHSwZfPZBxQnspKjbcC5qypM5DqX9oDSJm2l\n' +
            'fM/weiUGnIf7AhUAgokTdF7G0USfpkUUOaBOmzx2RRkCgYAyy5WJDESLoU8vHbQc\n' +
            'rAMnPZrImUwjFD6Pa3CxhkZrulsAOUb/gmc7B0K9I6p+UlJoAvVPXOBMVG/MYeBJ\n' +
            '19/BH5UNeI1sGT5/Kg2k2rHVpuqzcvlS/qctIENgCNMo49l3LrkHbJPXKJ6bf+T2\n' +
            '8lFWRP2kVlrx/cHdqSi6aHoGTAOBhAACgYBTNeXBHbWDOxzSJcD6q4UDGTnHaHHP\n' +
            'JgeCrPkH6GBa9azUsZ+3MA98b46yhWO2QuRwmFQwPiME+Brim3tHlSuXbL1e5qKf\n' +
            'GOm3OxA3zKXG4cjy6TyEKajYlT45Q+tgt1L1HuGAJjWFRSA0PP9ctC6nH+2N3HmW\n' +
            'RTcms0CPio56gg==\n' +
            '-----END PUBLIC KEY-----\n',
    opensubtitles: {
        useragent: 'Popcorn Time NodeJS'
    },
    trakttv: {
        client_id: '647c69e4ed1ad13393bf6edd9d8f9fb6fe9faf405b44320a6b71ab960b4540a2',
        client_secret: 'f55b0a53c63af683588b47f6de94226b7572a6f83f40bd44c58a7c83fe1f2cb1'
    },
    tvshowtime: {
        client_id: 'iM2Vxlwr93imH7nwrTEZ',
        client_secret: 'ghmK6ueMJjQLHBwsaao1tw3HUF7JVp_GQTwDwhCn'
    },
    fanart: {
        api_key: '8104b601679c3ec23e7d3e4d93ddb46f'
    },
    tvdb: {
        api_key: '9845B685B799009C'
    },
    tmdb: {
        api_key: '1a83b1ecd56e3ac0e509b553b68c77a9'
    }
});

Settings.tabs = {
    movie: {
        order: 1,
        name: 'Movies',
        uri: ['MovieApi?'
      +'&apiURL='
        + 'https://movies-v2.api-fetch.website/,'
        + 'cloudflare+https://movies-v2.api-fetch.website,'
//                     + 'cloudflare+http://xor.image.yt'
     ]
    },
    tvshow: {
        order: 2,
        name: 'Series',
        uri: ['TVShowApi?'
      +'&apiURL='
        + 'https://tv-v2.api-fetch.website/,'
        + 'cloudflare+https://tv-v2.api-fetch.website,'
//                     + 'http://tv.ytspt.re/'
     ]
    },
    anime: {
             order: 3,
             name: 'Anime',
             uri: ['AnimeApi?'
                   +'&apiURL='
                     + 'https://anime.api-fetch.website/,'
                     + 'cloudflare+https://anime.api-fetch.website,'
//                     + 'http://tv.ytspt.re/'
                  ]
         },
         indie: {
             order: 4,
             name: 'Indie',
             uri: ['vodo']
         }
};

Settings.providers = {
    subtitle: 'OpenSubtitles',
    metadata: 'Trakttv',
    tvst: 'TVShowTime',
    torrentCache: 'TorrentCache'
};

Settings.trackers = {
    blacklisted: [
        'demonii'
    ],
    forced: [
        'udp://tracker.coppersurfer.tk:6969/announce',
        'udp://glotorrents.pw:6969/announce',
        'udp://exodus.desync.com:6969/announce',
        'udp://tracker.opentrackr.org:1337/announce',
        'udp://9.rarbg.com:2710/announce',
        'udp://tracker.openbittorrent.com:80',
        'udp://tracker.publicbt.com:80/announce'
    ]
};

// User interface
Settings.language = '';
Settings.translateSynopsis = true;
Settings.coversShowRating = true;
Settings.watchedCovers = 'fade';
Settings.showAdvancedSettings = false;

Settings.postersMinWidth = 134;
Settings.postersMaxWidth = 294;
Settings.postersMinFontSize = 0.8;
Settings.postersMaxFontSize = 1.3;
Settings.postersSizeRatio = (196 / 134);
Settings.postersWidth = Settings.postersMinWidth;
Settings.postersJump = [134, 154, 174, 194, 214, 234, 254, 274, 294];

//Playback
Settings.alwaysFullscreen = false;
Settings.playNextEpisodeAuto = true;
Settings.chosenPlayer = 'local';

// Advanced UI
Settings.alwaysOnTop = false;
Settings.theme = 'Official_-_Dark_theme';
Settings.ratingStars = true; //trigger on click in details
Settings.hideSeasons = true;
Settings.startScreen = Object.keys(Settings.tabs)[0];
Settings.lastTab = '';
Settings.rememberFilters = false;

// Quality
Settings.shows_default_quality = '720p';
Settings.movies_default_quality = '1080p';
Settings.moviesShowQuality = false;
Settings.movies_quality = 'all';

// Subtitles
Settings.subtitle_language = 'none';
Settings.subtitle_size = '28px';
Settings.subtitle_color = '#ffffff';
Settings.subtitle_decoration = 'Outline';
Settings.subtitle_font = 'Arial';

// More options
Settings.httpApiPort = 8008;
Settings.httpApiUsername = 'popcorn';
Settings.httpApiPassword = 'popcorn';

// Trakt.tv
Settings.traktStatus = false;
Settings.traktLastSync = false;
Settings.traktLastActivities = false;
Settings.traktSyncOnStart = true;
Settings.traktPlayback = true;

// TVShow Time
Settings.tvstAccessToken = '';

// OpenSubtitles
Settings.opensubtitlesAutoUpload = true;
Settings.opensubtitlesAuthenticated = false;
Settings.opensubtitlesUsername = '';
Settings.opensubtitlesPassword = '';

// Advanced options
Settings.connectionLimit = 55;
Settings.streamPort = 0; // 0 = Random
Settings.tmpLocation = path.join(os.tmpdir(), Settings.projectName);
//Settings.databaseLocation = path.join(data_path, 'data');
Settings.deleteTmpOnClose = true;
Settings.automaticUpdating = true;
Settings.events = true;
Settings.minimizeToTray = false;
Settings.bigPicture = false;

// Features
Settings.activateTorrentCollection = true;
Settings.activateWatchlist = true;
Settings.activateRandomize = true;
Settings.onlineSearchEngine = 'KAT';

// Ratio
Settings.totalDownloaded = 0;
Settings.totalUploaded = 0;

Settings.updateEndpoint = {
        url: 'https://popcorntime.sh/',
        index: 0,
        proxies: [{
            url: 'https://popcorntime.app/'
        }]
    },

// App Settings
Settings.version = false;
Settings.dbversion = '0.1.0';
Settings.font = 'tahoma';
//Settings.defaultWidth = Math.round(window.screen.availWidth * 0.8);
//Settings.defaultHeight = Math.round(window.screen.availHeight * 0.8);

// Miscellaneous
Settings.playerSubPosition = '0px';
Settings.playerVolume = '1';
Settings.tv_detail_jump_to = 'next';

module.exports = Settings
