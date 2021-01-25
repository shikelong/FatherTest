
export default {
  esm: {
    type: 'rollup',
    //类似于umd 把所有的依赖都打进去 script标签module引入
    mjs: true,
  },
  cjs: 'rollup',
  umd: {
    name: 'foo',
    minFile: true
  }
}