import { pinyin } from 'pinyin-pro';

const result = pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none', separator: ''  }); // 'z q s l e'
console.log(result)