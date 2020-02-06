let PSV = new PhotoSphereViewer({
  container: 'viewer',
  panorama: '/img/' + getBasename() + String(1) + '.jpg',
  navbar: 'autorotate zoom download fullscreen',
  time_anim: false
});

function getBasename() {
  let p = window.location.href.split('/').pop();
  return p.split('/').pop().split('.').shift();
}

/**
 * PSVで描画するファイルを選択する
 * @param {int} image_index 
 */
function selectPsvMedia(image_index) {
  let p = '/img/' + getBasename() + String(image_index) + '.jpg'
  PSV.setPanorama(p)
}