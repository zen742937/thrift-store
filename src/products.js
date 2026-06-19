// 商品資料（先用假資料，之後 Phase 1 後段換成你真正的二手衣）
// 這個檔案只負責「提供資料」，用 export 開放給別的檔案 import。

// Day 34 TODO A：每件商品多一個 image 欄位（圖片網址，字串）
//   - 第 1 件我已示範好（用 picsum 佔位圖，之後換成你真正拍的二手衣照片）
//   - 換頁前你要做的：照第 1 件的寫法，幫第 2～6 件也各加一個 image
//   - 小提醒：物件裡每個 key: value 之間用逗號隔開；網址換 seed 後面那段（jacket1）就會換一張圖
export const PRODUCTS = [
  { id: 1, name: "黑色寬版西裝外套", price: 1200, category: "外套", size: "M", image: "https://picsum.photos/seed/jacket1/400/400" },
  { id: 2, name: "白色基本款 T 恤",   price: 250,  category: "上衣", size: "S", image: "https://picsum.photos/seed/tshirt1/400/400" },
  { id: 3, name: "復古直筒牛仔褲",   price: 680,  category: "褲子", size: "M", image: "https://picsum.photos/seed/pants1/400/400" },
  { id: 4, name: "灰色連帽外套",     price: 900,  category: "外套", size: "L", image: "https://picsum.photos/seed/jacket2/400/400" },
  { id: 5, name: "黑色條紋長袖",     price: 420,  category: "上衣", size: "M", image: "https://picsum.photos/seed/tshirt2/400/400" },
  { id: 6, name: "工裝寬褲",         price: 750,  category: "褲子", size: "L", image: "https://picsum.photos/seed/pants2/400/400" },
];

// 分類清單（給篩選按鈕用）
export const CATEGORIES = ["全部", "上衣", "外套", "褲子"];
