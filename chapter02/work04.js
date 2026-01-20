let color = 'red';

if (color == 'red') {
    // ブロックスコープの変数の宣言
    let message = 'This is red';
    console.log(message);
}

// ブロック外なので利用不可
console.log(message); // これはエラー
