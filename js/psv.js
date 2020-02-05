let viewer = new PhotoSphereViewer({
  container: 'viewer',
  panorama: '/img/' + getImageFileName()
});

/**
 * 各HTMLファイルに対応する画像ファイル名を取得して返す
 * /img/ディレクトリには、HTML名と1対1対応する画像を配置する。
 * 例えば、/pages/dog.html <-> /img/dog.jpgなど
 * 
 * ※ 現状は.jpgのみ対応
 */
function getImageFileName() {
  var current_html_file_name = window.location.href.split('/').pop();
  return current_html_file_name.replace('html', 'jpg')
}