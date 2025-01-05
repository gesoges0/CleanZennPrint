// 不要な要素を非表示
const hideUnnecessaryElements = () => {
  const selectors = [
    "header", // ヘッダー
    "footer", // フッター
    "aside", // サイドバー
    ".CommentSection", // コメントセクション
    ".Ad" // 広告セクション
  ];
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => el.style.display = "none");
  });
};

// 印刷用のスタイルを適用
const applyPrintStyles = () => {
  document.body.style.margin = "0 auto";
  document.body.style.maxWidth = "800px";
  document.body.style.fontSize = "16px";
};

// `.View_content__OZ_Dc` の幅を変更
const adjustContentWidth = () => {
  const contentElement = document.querySelector("section.View_content__OZ_Dc");
  if (contentElement) {
    contentElement.style.width = "calc(100%)";
    console.log("幅を変更しました: .View_content__OZ_Dc -> calc(100%)");
  } else {
    console.warn(".View_content__OZ_Dc が見つかりませんでした。");
  }
};

// 実行
hideUnnecessaryElements();
applyPrintStyles();
adjustContentWidth();

alert("印刷用にページが最適化されました！Ctrl+P で印刷してください。");

