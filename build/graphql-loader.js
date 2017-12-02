const loader = require('graphql-tag/loader');

module.exports = function graphQLLoader(source) {
  this.cacheable();

  return loader.call(
    this,

    // コメント部分 (# から行末まで) を取り除き、サイズ圧縮のため連続する空白文字を削除。
    // ただし #import は必要なので残す。
    source.replace(/\s*#(?!import).*?(\r?\n|$)/g, '').replace(/(\s)\s+/g, '$1'),
  );
};
