{
    // ブロックスコープの変数の宣言
    const name = 'Bob';
    console.log(name);
}

// ブロックスコープの変数はブロック外では利用不可
console.log(name); // これはエラー
