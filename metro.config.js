const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  const { assetExts } = defaultConfig.resolver;
  return {
    resolver: {
      // Add bin to assetExts
      assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg', 'glb', 'mtl', 'xjpg', 'xpng'],
    }
  };
})();
