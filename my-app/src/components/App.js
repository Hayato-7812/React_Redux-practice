import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'  //actionCreaterのインポート


export const App = (props) => {
  return (
    <>
      <div>count: {props.value}</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </>
  )
}


const mapStateToProps = state => {
  return {
    value: state.count.value
  }
}

//**書き方1
// const mapDispatchToProps = dispach => ({
//   increment:()=>dispach(increment()),
//   decrement:()=>dispach(decrement())
// })

//**書き方2
const mapDispatchToProps = ({ increment,decrement}) 

export default connect(mapStateToProps,mapDispatchToProps)(App)

//mapStateToProps ... stateの情報から各コンポーネントに必要なstateを取り出してコンポーネント内のpropsとしてマッピングする
//mapDispatchToProps ... あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させる


