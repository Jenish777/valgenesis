const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    // resolver: {
    //     assetExts: [
    //       'js',
    //       'css',
    //       // Add other extensions you need here
    //       'png',
    //       'jpg',
    //       'ttf',
    //       'woff',
    //       'woff2',
    //     ],
    //   },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
