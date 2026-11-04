# ホームページ

Markdownで記事を書き、GitHub Pagesで公開するための最小構成です。

## 記事の追加

`_posts/` に次の形式のファイルを追加します。

`YYYY-MM-DD-記事の名前.md`

先頭にはYAML Front Matterを書きます。

```yaml
---
title: 記事タイトル
date: 2026-11-04 12:00:00 +0900
categories: [日記]
---
```

その下にMarkdown本文を書きます。記事一覧は自動で更新されます。

## GitHub Pagesで公開

1. このフォルダの中身をGitHubリポジトリのルートに配置してpushします。
2. GitHubリポジトリの **Settings → Pages** を開きます。
3. **Build and deployment** の Source を **Deploy from a branch** にします。
4. Branch を `main`、フォルダを `/(root)` にして保存します。
5. 数分待つと公開URLが表示されます。

GitHub PagesはJekyllをサポートしているため、通常はActionsやローカルでのビルド設定は不要です。

## リポジトリ名が `username.github.io` ではない場合

`_config.yml` の `baseurl` を `"/リポジトリ名"` に設定してください。
`username.github.io` の場合は空文字のままで構いません。

## デザイン変更

- 共通レイアウト: `_layouts/`
- CSS: `assets/css/style.css`
- サイト設定: `_config.yml`
- 固定ページ: `about.md` など
- 記事: `_posts/`

## ローカルで確認したい場合（任意）

Rubyをインストールしたうえで:

```sh
bundle install
bundle exec jekyll serve
```

表示されたローカルURLをブラウザで開きます。
