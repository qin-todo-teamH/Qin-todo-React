# Qin to do チーム開発

## 技術選定

- React
- TypeScript
- TailwindCSS
- Firebase
- ESLint
- Prettier

## Git ブランチルール

`main`

- マージされると本番に自動反映されます。

`develop`

- 本番反映前に確認するための環境（ステージング環境）。
- 常駐しているブランチで、feature からの変更を受け付け、main にマージする。

`feature/あなたのGitHub名-*`

- 開発にはここを用いる。
- 必ず develop から分岐し、develop にマージする。
- 「あなたの GitHub 名」にはアカウント名を入力。
- \*は開発する対象の ISSUE の番号を記入。
- 例: feature/lightsound-#1

main, develop に直接 push してはいけません。基本的に皆さんが触って良いのは feature/あなたの GitHub 名\_\* ブランチだけです。

## コミットメッセージ書き方

- feat: 新しい機能
- fix: バグの修正
- docs: ドキュメントのみの変更
- style: 空白、フォーマット、セミコロン追加など
- refactor: 仕様に影響がないコード改善(リファクタ)
- perf: パフォーマンス向上関連
- test: テスト関連
- chore: ビルド、補助ツール、ライブラリ関連

## そのほか

- [デザイン](https://www.figma.com/file/SNPCXNu0V6k6wHS4piYyS2/Qin-Todo?node-id=0%3A1)
