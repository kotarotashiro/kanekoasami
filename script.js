// サービスデータ
const serviceData = {
  "maya-personal": {
    title: "マヤ暦個人鑑定",
    category: "鑑定",
    price: "¥15,000",
    description: "あなたの生まれ持った才能、人生の目的、使命を読み解き、最適な人生の方向性をお伝えします。生年月日から導き出されるマヤ暦のエネルギーを基に、あなたの本質や強み、使命などを紐解いていきます。",
    content: [
      "生まれ持った才能・適性の解説",
      "人生の目的・使命の解読",
      "適職・才能の活かし方のアドバイス",
      "現在のエネルギー状況と未来の流れ",
      "質問事項への回答（キャリア、恋愛、人間関係など）"
    ],
    target: "人生の方向性に迷いがある方、自分の才能や本来の使命を知りたい方、転機を前向きに活かしたい方",
    next: ["maya-basic", "shinmitsu"],
    application: "公式LINEまたはお問い合わせフォームよりお申し込みください。",
    detailUrl: "#"
  },
  "maya-120min": {
    title: "マヤ暦120分鑑定",
    price: "¥25,000",
    category: "鑑定",
    description: "個人鑑定の内容に加え、あなたと周りの方との相性や関係性についても深く読み解きます。特定の人間関係の悩みがある方や、より深い自己理解を求める方におすすめです。",
    content: [
      "個人鑑定の内容（才能・使命・人生の目的の明確化）",
      "あなたと周りの人との相性",
      "関係性の改善アドバイス",
      "具体的なアクションプラン",
      "より深い自己理解への導き",
      "詳細な質疑応答・フィードバック"
    ],
    target: [
      "人間関係を改善したい方",
      "より深い自己理解を求める方",
      "自分のこと・周りのことを知りたい方",
      "人間関係に悩む方"
    ],
    next: ["future-creation", "maya-work"],
    apply: "専用予約フォームから予約。日程調整後、ZoomまたはLINEビデオ通話で行います。"
  },
  "maya-work": {
    title: "マヤ暦お仕事コンサル",
    price: "¥44,000",
    category: "鑑定",
    description: "あなたの才能と使命を仕事に活かすための専門コンサルティング。マヤ暦の知恵から、あなたに合った職業や働き方、収入アップの方法をアドバイスします。",
    content: [
      "才能と適職の分析",
      "仕事での強み・弱みの把握",
      "理想的な働き方の提案",
      "キャリアプランの作成",
      "収入アップのための戦略",
      "具体的なアクションプラン作成"
    ],
    target: [
      "才能を活かした仕事を見つけたい方",
      "転職・起業を検討中の方",
      "才能を活かす仕事を知りたい方",
      "いきいき働く方法を知りたい方",
      "会社員・フリーランス・フリーター"
    ],
    next: ["startup-school", "future-creation"],
    apply: "専用予約フォームから予約。日程調整後、ZoomまたはLINEビデオ通話で行います。"
  },
  "shinmitsu": {
    title: "真密教鑑定",
    category: "鑑定",
    price: "¥20,000",
    description: "古来から伝わる真密教の叡智を用いた鑑定。名前と生年月日に秘められた運命のコードを解読します。過去世からの影響や魂の目的までを明らかにする深遠な鑑定です。",
    content: [
      "名前の音霊分析",
      "生年月日の数霊解読",
      "過去世からの影響と課題",
      "魂レベルでの使命と目的",
      "現在の状況に対するスピリチュアルな観点からのアドバイス"
    ],
    target: "深い自己理解を求める方、スピリチュアルな視点から人生を見つめたい方、名前の意味や変遷に興味がある方",
    next: ["maya-personal", "memory-oil"],
    application: "完全予約制。公式LINEまたはお問い合わせフォームよりご予約ください。",
    detailUrl: "#"
  },
  "tarot": {
    title: "タロットセッション",
    price: "¥10,000",
    category: "鑑定",
    description: "タロットカードを通して、あなたの現在の状況や未来の可能性、問題解決のヒントを読み解きます。具体的な質問や悩みがある方におすすめです。",
    content: [
      "現在の状況の本質の把握",
      "未来の可能性と選択肢の提示",
      "問題解決のヒントの提供",
      "具体的な行動アドバイス",
      "潜在意識からのメッセージの解読",
      "質疑応答・フィードバック"
    ],
    target: [
      "現在の迷いや悩みに具体的な答えを求める方",
      "決断を迫られている方",
      "未来の可能性を探りたい方",
      "人間関係や恋愛の悩みがある方"
    ],
    next: ["maya-120min", "future-creation", "maya-work"],
    apply: "専用予約フォームから予約。対面またはZoomでのセッションが可能です。"
  },
  "maya-parenting": {
    title: "マヤ暦ミラクル子育て講座",
    category: "講座",
    price: "¥39,800",
    description: "子どもの才能を伸ばすマヤ暦の知恵と具体的な接し方を学ぶ、子育てに悩むママのための講座です。子どものキネシオロジーとマヤ暦を組み合わせた独自メソッドで、子育ての悩みを解消します。",
    content: [
      "マヤ暦の基礎知識と子育てへの活かし方",
      "子どもの才能を読み解くワーク",
      "子どものタイプ別接し方・褒め方講座",
      "ママ自身のセルフケア実践法",
      "日常生活での具体的な活用方法"
    ],
    target: "2歳〜小学生のお子さんを持つ母親、子どもの才能を伸ばしたい方、子育てに悩みや不安を抱えている方",
    next: ["maya-basic", "synchrono-salon"],
    application: "公式LINEまたはお問い合わせフォームよりお申し込みください。3ヶ月のサポート付き。",
    detailUrl: "#"
  },
  "maya-montessori": {
    title: "マヤ・モンテッソーリ講座",
    price: "¥24,200",
    category: "講座",
    description: "マヤ暦の知恵とモンテッソーリ教育を組み合わせた応用講座です。子どもの才能や個性に合わせた教育環境の作り方や、自主性を育む関わり方を学びます。",
    content: [
      "モンテッソーリ教育の基本理念",
      "マヤ暦から見る子どもの個性と才能",
      "発達段階別の最適な環境づくり",
      "才能を引き出す実践的な活動",
      "家庭でできるモンテッソーリ活動",
      "ケーススタディと質疑応答"
    ],
    target: [
      "モンテッソーリ教育に興味のある方",
      "子どもの才能を最大限に引き出したい方",
      "マヤ暦ミラクル子育て講座を受講された方",
      "教育関係者や保育士の方"
    ],
    next: ["maya-parenting", "maya-basic"],
    apply: "公式LINEまたは専用フォームから申込み。3時間×2日間の講座です。"
  },
  "maya-basic": {
    title: "マヤ暦鑑定初級講座",
    category: "講座",
    price: "¥79,800",
    description: "マヤ暦の基礎から鑑定方法までを学べる講座。自分や家族の才能を理解し、日々の生活に活かせます。マヤ暦鑑定師としての第一歩を踏み出せる内容です。",
    content: [
      "マヤ暦の歴史と基礎知識",
      "ツォルキンの13の音と20の紋章の意味と読み方",
      "あなた自身と家族の鑑定実践",
      "日常生活への活かし方",
      "初級認定試験と修了証発行"
    ],
    target: "マヤ暦に興味がある方、自分や家族の才能を理解したい方、将来マヤ暦鑑定師として活動したい方",
    next: ["maya-advanced", "synchrono-salon"],
    application: "公式LINEまたはお問い合わせフォームよりお申し込みください。オンラインと対面から選択可能。",
    detailUrl: "#"
  },
  "kakehashi": {
    title: "かけはし講座",
    price: "¥11,000",
    category: "講座",
    description: "初級講座修了者向けの講座です。マヤ暦アドバイザーとして活動するための心構えやクライアント対応、鑑定テクニック、活動サポートなどを学びます。",
    content: [
      "アドバイザーとしての心構え",
      "クライアントとの効果的な対応方法",
      "鑑定の実践テクニック",
      "活動を始めるためのサポート",
      "事例研究と実践演習",
      "質疑応答・フィードバック"
    ],
    target: [
      "アドバイザーとして活動したい方",
      "マヤ暦初級講座を修了した方",
      "鑑定スキルを向上させたい方",
      "実践的なアドバイス方法を学びたい方"
    ],
    next: ["maya-basic"],
    apply: "公式LINEまたは専用フォームから申込み。3時間の講座で、テキスト込みです。"
  },
  "miracle-diary": {
    title: "ミラクルダイアリー講座",
    price: "¥8,800〜",
    category: "講座",
    description: "ミラクルダイアリーの効果的な使い方を学ぶ講座です。目標設定や記録、振り返りの方法を習得し、日々の生活に取り入れることで人生の充実度を高めることができます。",
    content: [
      "ミラクルダイアリーの基本的な使い方",
      "効果的な目標設定の方法",
      "日々の記録の取り方",
      "振り返りの重要性とコツ",
      "実践ワークショップ",
      "質疑応答・サポート"
    ],
    target: [
      "ミラクルダイアリーを効果的に活用したい方",
      "目標達成に向けて計画的に行動したい方",
      "日々の生活に充実感を求める方",
      "自己成長に興味がある方"
    ],
    next: ["miracle-diary-product", "future-creation"],
    apply: "公式LINEまたは専用フォームから申込み。3時間の講座で、サロン生は割引があります。"
  },
  "memory-oil-basic": {
    title: "メモリーオイル基礎講座",
    price: "¥30,800",
    category: "講座",
    description: "メモリーオイルの基礎知識から実践的なブレンド方法までを学ぶ講座です。願望達成のためのツールとして活用する方法や、日常生活での使い方を習得できます。",
    content: [
      "メモリーオイルの基礎知識",
      "各種オイルの特性と効果",
      "願望達成のための使用方法",
      "実践的なブレンドレッスン",
      "スプレーセット作成",
      "質疑応答・サポート"
    ],
    target: [
      "メモリーオイルに興味がある方",
      "願望実現のツールを探している方",
      "アロマやエッセンシャルオイルが好きな方",
      "自分だけのブレンドを作りたい方"
    ],
    next: ["memory-oil"],
    apply: "公式LINEまたは専用フォームから申込み。3時間の講座で、スプレーセット付きです。"
  },
  "future-creation": {
    title: "未来創造3ヶ月プロジェクト",
    price: "¥264,000〜",
    category: "プログラム",
    description: "3ヶ月間にわたり、あなたの才能と使命を発見し、理想の人生を設計するためのプロジェクトです。マヤ暦鑑定をベースに、具体的な行動計画を立て、継続的なサポートを受けながら理想の未来を創造していきます。",
    content: [
      "才能と使命の発見（マヤ暦鑑定）",
      "理想の人生の設計と明確化",
      "具体的な行動計画の策定",
      "定期的なセッションでの進捗確認",
      "軌道修正と継続的なサポート",
      "3ヶ月間の集中サポート"
    ],
    target: [
      "本気で人生を変えたい方",
      "自分の使命を見つけたい方",
      "理想の未来を実現したい方",
      "計画的に目標達成を目指す方"
    ],
    next: ["startup-school", "synchrono-salon"],
    apply: "個別相談後、専用フォームから申込み。早期申込割引もあります。"
  },
  "startup-school": {
    title: "起業スクール",
    price: "¥200,200〜",
    category: "プログラム",
    description: "マヤ暦の才能鑑定を活かした起業や事業拡大のためのスクールです。ビジネスモデルの構築からマーケティング、集客方法、価格設定など、実践的なビジネススキルを学びます。",
    content: [
      "マヤ暦から見る最適なビジネスモデル",
      "効果的なマーケティング戦略",
      "集客の仕組みづくり",
      "適切な価格設定の方法",
      "ブランディングとSNS活用法",
      "1年間の継続サポート"
    ],
    target: [
      "起業を考えている方",
      "ビジネスを拡大したい方",
      "マヤ暦の知識をビジネスに活かしたい方",
      "自分の才能を活かした仕事がしたい方"
    ],
    next: ["future-creation", "maya-work"],
    apply: "個別相談後、専用フォームから申込み。14枚コース（1枚1時間）から選べます。"
  },
  "yoga-instructor": {
    title: "ヨガインストラクター講座",
    price: "¥217,800",
    category: "プログラム",
    description: "ヨガの哲学や歴史、アーサナ（ポーズ）、呼吸法、解剖学、指導法など、ヨガインストラクターとして必要な知識とスキルを学ぶ講座です。",
    content: [
      "ヨガの哲学と歴史",
      "各種アーサナ（ポーズ）の習得",
      "呼吸法と瞑想の実践",
      "解剖学の基礎知識",
      "効果的な指導法とティーチング",
      "実践的なクラス構成法"
    ],
    target: [
      "ヨガインストラクターを目指す方",
      "ヨガの知識を深めたい方",
      "心身の健康に関心がある方",
      "自分の才能を活かした仕事を探している方"
    ],
    next: ["synchrono-salon"],
    apply: "公式サイトまたは公式LINEから申込み。2時間/回×3〜4回/月のペースで行います。"
  },
  "synchrono-salon": {
    title: "金子あさみとシンクロサロン",
    category: "会員制サロン",
    price: "¥2,000/月",
    description: "マヤ暦ガイダンス、オンラインヨガ、限定ライブ配信など様々なコンテンツを月額定額で利用できます。サロンメンバー限定の特典やイベントも多数ご用意しています。",
    content: [
      "月2回のマヤ暦ガイダンスライブ",
      "週1回のオンラインヨガクラス",
      "メンバー限定Q&Aセッション",
      "過去の講座アーカイブ閲覧",
      "サロン限定割引特典"
    ],
    target: "定期的にマヤ暦の知恵に触れたい方、自己成長を継続的に行いたい方、コミュニティの中で学びを深めたい方",
    next: ["maya-personal", "maya-basic"],
    application: "公式サイトの申込フォームから登録可能。初月無料トライアル実施中。",
    detailUrl: "#"
  },
  "memory-oil": {
    title: "メモリーオイル",
    category: "商品",
    price: "¥3,800〜",
    description: "才能や目標に合わせてブレンドしたアロマオイル。香りを通じて潜在意識に働きかけます。マヤ暦の紋章エネルギーと精油の特性を組み合わせた独自のブレンドです。",
    content: [
      "マヤ暦20種類の紋章別オイル",
      "目的別ブレンドオイル（豊かさ、愛情、創造性など）",
      "季節の変わり目におすすめの調整オイル",
      "天然100%オーガニック精油使用",
      "専用の使い方ガイドブック付き"
    ],
    target: "日常生活にマヤ暦の叡智を取り入れたい方、アロマの香りで意識を高めたい方、ギフトを探している方",
    next: ["maya-personal", "synchrono-salon"],
    application: "オンラインショップまたは対面セッション時にご購入いただけます。",
    detailUrl: "#"
  },
  "miracle-diary-product": {
    title: "ミラクルダイアリー",
    price: "¥2,750〜",
    category: "商品",
    description: "目標設定や日々の振り返り、願望実現をサポートする特別な手帳です。サイズやデザインも選べ、自分だけの理想の人生を創造するためのツールとして活用できます。",
    content: [
      "年間カレンダー",
      "月間スケジュール",
      "週間計画ページ",
      "目標設定シート",
      "振り返りセクション",
      "手帳サイズ（B6/B5/A5）から選択可能"
    ],
    target: [
      "目標を達成したい方",
      "日々の生活を充実させたい方",
      "願望実現に取り組みたい方",
      "自己管理能力を高めたい方"
    ],
    next: ["miracle-diary"],
    apply: "公式LINEまたは専用フォームから注文。早割や会員割引もあります。"
  }
};

// DOM要素の取得
document.addEventListener('DOMContentLoaded', function() {
  // 現在の年を設定
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // モバイルメニューの処理
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }
  
  // FAQのアコーディオン機能
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
      const toggle = item.querySelector('.faq-toggle');
      
      if (question) {
        question.addEventListener('click', function() {
          item.classList.toggle('active');
          const icon = toggle.querySelector('i');
          if (icon) {
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
          }
        });
      }
    });
  }
  
  // 提案ボタンのクリックイベント
  const suggestBtn = document.getElementById('suggest-btn');
  if (suggestBtn) {
    suggestBtn.addEventListener('click', function() {
      const wishInput = document.getElementById('wish-input');
      const wish = wishInput.value.trim();
      
      if (wish) {
        // ローディング表示
        const suggestionsGrid = document.getElementById('modal-suggestions-grid');
        suggestionsGrid.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> お探しています...</div>';
        
        // モーダルを表示
        const suggestionModal = document.getElementById('suggestionModal');
        suggestionModal.classList.add('show');
        
        // AIに問い合わせ（ローカルデータから提案）
        setTimeout(() => {
          showSuggestionsInModal(wish);
        }, 1500);
      } else {
        wishInput.placeholder = "何か入力してください...";
        wishInput.focus();
      }
    });
  }

  // モーダル内の提案を表示
  function showSuggestionsInModal(wish) {
    const suggestionResults = keywordMatchSuggestions(wish);
    const suggestionsGrid = document.getElementById('modal-suggestions-grid');
    const userWishText = document.getElementById('user-wish-text');
    
    // ユーザーの望みをモーダルに表示
    if (userWishText) {
      userWishText.textContent = wish;
    }
    
    suggestionsGrid.innerHTML = '';
    
    if (suggestionResults.length === 0) {
      suggestionsGrid.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>お探しの内容に合うサービスが見つかりませんでした。お問い合わせフォームよりご相談ください。</p><a href="#contact" class="btn btn-primary">お問い合わせ</a></div>';
      return;
    }
    
    suggestionResults.forEach(suggestion => {
      const card = document.createElement('div');
      card.className = 'suggestion-card';
      
      card.innerHTML = `
        <div class="suggestion-header">
          <h3 class="suggestion-title">${suggestion.title}</h3>
          <div class="suggestion-meta">
            <span class="suggestion-category">${suggestion.category}</span>
            <span class="suggestion-price">${suggestion.price || ''}</span>
          </div>
        </div>
        <p class="suggestion-description">${suggestion.description}</p>
        <div class="suggestion-footer">
          <a href="#" class="btn btn-primary btn-sm service-link" data-service="${suggestion.id}">詳細を見る</a>
        </div>
      `;
      
      suggestionsGrid.appendChild(card);
    });
    
    // アニメーション効果を追加
    const cards = suggestionsGrid.querySelectorAll('.suggestion-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.animation = 'fadeInUp 0.5s ease-out forwards';
    });
    
    // キーフレームアニメーションを追加
    if (!document.getElementById('suggestion-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'suggestion-animations';
      styleSheet.innerHTML = `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .no-results {
          text-align: center;
          padding: 2rem;
          background: var(--primary-light);
          border-radius: 1rem;
          margin: 1rem 0;
        }
        
        .no-results i {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
          display: block;
        }
        
        .no-results p {
          margin-bottom: 1.5rem;
        }
      `;
      document.head.appendChild(styleSheet);
    }
    
    // サービスリンクのイベント登録を更新
    const serviceLinks = suggestionsGrid.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceId = this.dataset.service;
        if (serviceId) {
          // サジェスションモーダルを閉じる
          document.getElementById('suggestionModal').classList.remove('show');
          // サービスモーダルを開く
          showServiceModal(serviceId);
        }
      });
    });
  }

  // サジェスションモーダルを閉じる
  const closeSuggestionModal = document.getElementById('closeSuggestionModal');
  if (closeSuggestionModal) {
    closeSuggestionModal.addEventListener('click', function() {
      document.getElementById('suggestionModal').classList.remove('show');
    });
  }

  // モーダル外をクリックしても閉じる
  window.addEventListener('click', function(e) {
    const suggestionModal = document.getElementById('suggestionModal');
    if (e.target === suggestionModal) {
      suggestionModal.classList.remove('show');
    }
  });

  // スクロールイベントの効果
  let scrollTicking = false;

  function updateScrollEffects() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // スクロール表示要素
    const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
    
    // トップに戻るボタンの表示/非表示
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
    
    scrollTicking = false;
  }

  window.addEventListener('scroll', function() {
    if (!scrollTicking) {
      window.requestAnimationFrame(function() {
        updateScrollEffects();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });
  
  // 初期化時にも実行
  updateScrollEffects();
  
  // 浮遊要素にクラスを適用
  const floatElements = document.querySelectorAll('.feature-card, .badge, .feature-icon');
  floatElements.forEach((element, index) => {
    if (index % 3 === 0) {
      element.classList.add('floating-element-slow');
    } else if (index % 3 === 1) {
      element.classList.add('floating-element');
    } else {
      element.classList.add('floating-element-fast');
    }
  });

  // トップに戻るボタンのクリックイベント
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // サービスリンクにイベントリスナーを追加
  const serviceLinks = document.querySelectorAll('.service-link');
  serviceLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service') || this.getAttribute('data-service-id');
      if (serviceId) {
        showServiceModal(serviceId);
      }
    });
  });
  
  // モーダルを閉じるボタンにイベントリスナーを追加
  const closeButton = document.querySelector('.close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      document.getElementById('serviceModal').classList.remove('show');
    });
  }
  
  // モーダル背景のクリックでも閉じるようにする
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('show');
      }
    });
  }
  
  // サービスマップのサービスリンクにイベントリスナーを追加
  const serviceMapLinks = document.querySelectorAll('.service-category a');
  serviceMapLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service');
      if (serviceId) {
        showServiceModal(serviceId);
      }
    });
  });

  // サービスタブの切り替え
  const tabItems = document.querySelectorAll('.tab-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const tabGroup = document.querySelector('.tab-group');
  
  if (tabGroup) {
    // 初期状態でアクティブなタブを設定
    tabGroup.setAttribute('data-active-tab', 'kantei');
    
    tabItems.forEach(item => {
      item.addEventListener('click', function() {
        // アクティブなタブを更新
        tabItems.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        
        // タブペインを表示
        const tabId = this.getAttribute('data-tab');
        tabGroup.setAttribute('data-active-tab', tabId);
        
        tabPanes.forEach(pane => {
          pane.classList.remove('active');
          // アニメーション用のクラスをリセット
          pane.classList.remove('fade-in');
        });
        
        const activePane = document.getElementById(tabId);
        if (activePane) {
          // ディスプレイをブロックに設定してからアニメーション用のクラスを追加
          activePane.classList.add('active');
          
          // 少し遅延させてアニメーションを適用
          setTimeout(() => {
            activePane.classList.add('fade-in');
          }, 50);
        }
      });
    });
  }
});

// キーワードマッチングによる提案
function keywordMatchSuggestions(wish) {
  const results = [];
  
  // キーワードマッチングの簡易デモ
  const keywords = {
    '才能': ['maya-personal', 'future-creation', 'maya-work'],
    '仕事': ['maya-work', 'startup-school', 'future-creation'],
    '子育て': ['maya-parenting', 'maya-montessori'],
    '人間関係': ['maya-120min', 'synchrono-salon'],
    '使命': ['maya-personal', 'future-creation'],
    '自分': ['maya-personal', 'shinmitsu', 'future-creation'],
    '不安': ['tarot', 'maya-personal', 'synchrono-salon'],
    '将来': ['future-creation', 'maya-work', 'maya-personal'],
    '悩み': ['maya-personal', 'tarot', 'synchrono-salon'],
    'ヨガ': ['yoga-instructor', 'synchrono-salon'],
    '起業': ['startup-school', 'maya-work'],
    '方向性': ['maya-personal', 'future-creation'],
    'オイル': ['memory-oil', 'memory-oil-basic'],
    '成長': ['future-creation', 'startup-school', 'synchrono-salon'],
    '変化': ['maya-personal', 'future-creation', 'tarot'],
    '目的': ['maya-personal', 'future-creation'],
    '子供': ['maya-parenting', 'maya-montessori'],
    '幸せ': ['maya-personal', 'future-creation', 'synchrono-salon'],
    '豊か': ['future-creation', 'startup-school'],
    '本来': ['maya-personal', 'shinmitsu'],
    '転機': ['maya-personal', 'tarot', 'future-creation'],
    '転職': ['maya-work', 'future-creation'],
    '可能性': ['maya-personal', 'future-creation'],
    '願望': ['tarot', 'maya-personal'],
    '潜在': ['maya-personal', 'future-creation'],
    '直感': ['maya-personal', 'tarot'],
    '運命': ['maya-personal', 'shinmitsu'],
    '習慣': ['miracle-diary', 'synchrono-salon'],
    '健康': ['yoga-instructor', 'synchrono-salon'],
    '家族': ['maya-parenting', 'maya-montessori']
  };
  
  // 願望からキーワードを検出
  let matchedServiceIds = [];
  for (const [keyword, services] of Object.entries(keywords)) {
    if (wish.includes(keyword)) {
      matchedServiceIds = [...matchedServiceIds, ...services];
    }
  }
  
  // 重複を除去
  matchedServiceIds = [...new Set(matchedServiceIds)];
  
  // 何も見つからない場合はデフォルトのサービスを表示
  if (matchedServiceIds.length === 0) {
    matchedServiceIds = ['maya-personal', 'future-creation', 'synchrono-salon'];
  }
  
  // サービスIDからサービスデータを取得
  matchedServiceIds.forEach(id => {
    if (serviceData[id]) {
      results.push({
        id: id,
        title: serviceData[id].title,
        category: serviceData[id].category,
        description: serviceData[id].description
      });
    }
  });
  
  return results;
}

// サービス詳細モーダル表示
function showServiceModal(serviceId) {
  const service = serviceData[serviceId];
  if (!service) return;
  
  const modal = document.getElementById('serviceModal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalCategory = modal.querySelector('.modal-category');
  const modalPrice = modal.querySelector('.modal-price');
  const modalDescription = modal.querySelector('.modal-description');
  const contentList = modal.querySelector('.content-list');
  const targetAudience = modal.querySelector('.target-audience');
  const applicationMethod = modal.querySelector('.application-method');
  const relatedServices = modal.querySelector('.related-services');
  
  modalTitle.textContent = service.title;
  modalCategory.textContent = service.category;
  modalPrice.textContent = service.price;
  modalDescription.textContent = service.description;
  
  // 内容リストを生成
  contentList.innerHTML = '';
  service.content.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    contentList.appendChild(li);
  });
  
  // 対象者
  targetAudience.textContent = Array.isArray(service.target) ? service.target.join(' ') : service.target;
  
  // 申し込み方法
  applicationMethod.textContent = service.application || (service.apply || '公式LINEまたはお問い合わせフォームよりお申し込みください。');
  
  // 関連サービス
  relatedServices.innerHTML = '';
  if (service.next && service.next.length > 0) {
    service.next.forEach(nextId => {
      if (serviceData[nextId]) {
        const item = document.createElement('div');
        item.className = 'related-service-item';
        item.textContent = serviceData[nextId].title;
        item.dataset.service = nextId;
        item.addEventListener('click', function() {
          showServiceModal(nextId);
        });
        relatedServices.appendChild(item);
      }
    });
  }
  
  // モーダルを表示
  modal.classList.add('show');
  
  // 閉じるボタンイベント
  const closeBtn = modal.querySelector('.close');
  closeBtn.onclick = function() {
    modal.classList.remove('show');
  }
  
  // モーダル外クリックで閉じる
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('show');
    }
  }
}

// お問い合わせフォーム処理
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // フォームのバリデーション
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const privacy = document.getElementById('privacy').checked;
      
      if (!name || !email || !subject || !message || !privacy) {
        alert('必須項目をすべて入力してください。');
        return;
      }
      
      // メール形式の簡易チェック
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('有効なメールアドレスを入力してください。');
        return;
      }
      
      // フォーム送信確認
      const formData = {
        name: name,
        email: email,
        phone: document.getElementById('phone').value,
        subject: subject,
        message: message
      };
      
      // ここに実際のフォーム送信処理を実装
      // 例: フォームデータをサーバーに送信
      
      // 送信成功時の処理（デモ）
      alert('お問い合わせありがとうございます。24時間以内にご返信いたします。');
      contactForm.reset();
    });
  }
});

// タイプライタアニメーション
document.addEventListener('DOMContentLoaded', function() {
  const wishInput = document.getElementById('wish-input');
  const typewriterText = document.querySelector('.typewriter-text');
  
  if (typewriterText && wishInput) {
    const placeholder = "例：自分の才能を見つけたい";
    
    // プレースホルダーテキストを設定
    typewriterText.textContent = "";
    
    // 左から右へのタイプライター効果（文字を1文字ずつ表示）
    let i = 0;
    function typeWriter() {
      if (i < placeholder.length) {
        typewriterText.textContent += placeholder.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // 1文字あたり100ミリ秒の速度（より遅く）
      } else {
        // タイピングが終わったら、しばらく待機して削除を開始
        setTimeout(deleteText, 3000);
      }
    }
    
    // テキストを1文字ずつ削除する関数
    function deleteText() {
      if (typewriterText.textContent.length > 0) {
        typewriterText.textContent = typewriterText.textContent.slice(0, -1);
        setTimeout(deleteText, 50);
      } else {
        // 削除が終わったら、しばらく待機して再度タイピングを開始
        i = 0;
        setTimeout(typeWriter, 1000);
      }
    }
    
    // タイプライターアニメーションを開始
    setTimeout(typeWriter, 1000);
    
    // 入力欄がフォーカスされたときにタイプライタープレースホルダーを非表示
    wishInput.addEventListener('focus', function() {
      const typewriterPlaceholder = document.querySelector('.typewriter-placeholder');
      if (typewriterPlaceholder) {
        typewriterPlaceholder.style.display = 'none';
      }
    });
    
    // 入力欄からフォーカスが外れたときに、入力値がなければタイプライタープレースホルダーを表示
    wishInput.addEventListener('blur', function() {
      const typewriterPlaceholder = document.querySelector('.typewriter-placeholder');
      if (typewriterPlaceholder && this.value === '') {
        typewriterPlaceholder.style.display = 'block';
      }
    });
    
    // 入力中はプレースホルダーを非表示
    wishInput.addEventListener('input', function() {
      const typewriterPlaceholder = document.querySelector('.typewriter-placeholder');
      if (typewriterPlaceholder) {
        if (this.value !== '') {
          typewriterPlaceholder.style.display = 'none';
        } else {
          typewriterPlaceholder.style.display = 'block';
        }
      }
    });
  }
});
