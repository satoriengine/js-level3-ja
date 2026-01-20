for (let i = 0; i < 3; i++) {
    //ブロックスコープの変数の宣言
    let message = 'Hello';
    console.log(message);
}

// ブロック外なので利用不可
console.log(message); // これはエラー
