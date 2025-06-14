# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 開発コマンド

### Angular開発
- `npm start` - 開発サーバー起動（レガシーOpenSSLプロバイダー付き）
- `npm run start:local` - ローカルビルド後、Node.jsサーバーで実行
- `ng serve` - 標準のAngular開発サーバー
- `ng build --prod` - 本番用ビルド
- `ng test` - Karmaでユニットテスト実行
- `ng lint` - TSLint実行
- `ng e2e` - Protractorでe2eテスト実行

### コード品質
- `npm run format:check` - Prettierでコードフォーマットチェック
- `npm run format:write` - Prettierでコード自動フォーマット

### サーバー
- `node server.js` - Expressサーバー起動（ビルド済みAngularアプリを提供）

## アーキテクチャ概要

### フルスタック構成
AngularフロントエンドとNode.js/Expressバックエンドを持つポケモンクイズアプリケーション：

- **フロントエンド**: 遅延読み込み機能モジュール付きAngular 9 SPA
- **バックエンド**: MongoDB (Mongoose) 付きExpress.js APIサーバー
- **データ**: JSONファイルに格納された静的ポケモンデータ（806体）
- **デプロイ**: フロントエンド/バックエンド統合型Heroku設定

### Angularアーキテクチャ

#### モジュール構成
- **遅延読み込み**: 全ページモジュールがルーティング経由で遅延読み込み
- **共有モジュール**: 共通コンポーネント、サービス、パイプ、モーダル
- **機能モジュール**: 各ページ（quiz, result, setting等）が独立モジュール

#### 主要サービス
- `DataService` - JSONアセットからポケモンデータを読み込み
- `SettingService` - クイズ設定管理（範囲、難易度、問題数）
- `AnswerService` - クイズ回答の追跡と採点
- `RankingService` - リーダーボード機能処理

#### クイズシステム
クイズエンジンは5種類の問題タイプをサポート：
1. 名前当て（画像 → 名前）
2. タイプ当て（画像 → ポケモンタイプ）
3. 進化予測（画像 → 進化先）
4. 特性当て（画像 → ポケモン特性）
5. 弱点当て（タイプ → 弱点タイプ）

#### 状態管理
- `SettingService`でリアクティブサブジェクト使用の設定保存
- `AnswerService`でクイズ回答蓄積
- コンポーネント間でアドベンチャーモード進行状況追跡

### バックエンドAPI構造

#### Expressサーバー設定
- `/dist/pokemon-quiz`からAngularビルドを提供
- `/api`プレフィックス下のAPIルート
- Mongoose経由のMongoDB接続
- Log4jsによるシステムログ

#### データベーススキーマ
- `users` - 認証付きユーザーアカウント
- `answers` - クイズ試行記録
- `ranking` - 完了したアドベンチャーのリーダーボードエントリ

#### APIエンドポイント
- `POST/PUT/GET /api/users` - ユーザー管理
- `POST/GET /api/answers` - クイズ試行保存
- `POST/GET /api/ranking` - リーダーボード操作

### データ構造

#### ポケモンデータスキーマ
各ポケモンエントリの内容：
- 基本情報（no, name, form, evolutions）
- タイプ情報と特性
- バトルステータス（hp, attack, defense等）
- クイズ生成と回答検証に使用

#### クイズ設定
- **範囲**: ポケモン世代選択（カントーからカロスまで）
- **レベル**: 難易度（初級、中級、上級、弱点のみ）
- **アドベンチャーモード**: アンロックシステム付き段階的難易度

### 環境設定
- 開発環境: `environment.ts`
- 本番環境: `environment.prod.ts` + `environment.prod.js`
- 本番環境でMongoDB URI設定
- Herokuデプロイ URL: https://frysk-pokemon-quiz.herokuapp.com/

### 主要定数
- `WEAKNESS_LIST` - 弱点問題用タイプ相性表
- `ADVENTURE_LIST` - 段階的チャレンジ設定
- `QUIZ_TYPES` および `QUESTIONS` - 問題タイプ定義