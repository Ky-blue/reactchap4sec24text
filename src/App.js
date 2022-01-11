import "./styles.css";
import React, { useState } from "react";

const InputText = () => {
  //入力中のテキストの状態とそれを更新する関数のフック
  const [inputTextValue, setInputTextValue] = useState("");

  //入力ボタンをクリックしたときのテキストの状態とそれを更新する関数
  const [text, setText] = useState("JavaScript");

  //入力中の時(onChange)に走ってinputTextValueを実際に変更する関数
  const handleChange = (e) => setInputTextValue(e.target.value);

  //ボタンクリック(onClick)でinputTextValueをtextに格納
  //入力フォームを空の文字列に更新
  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };

  return (
    <div className="App">
      {/*ボタンクリックで更新される*/}
      <h1>I love {text}!!!</h1>

      {/*テキストが入力されるとonChangeで値が更新される*/}
      <input type="text" value={inputTextValue} onChange={handleChange} />

      {/*クリックでフォームの値を空の文字にしてh1要素へ引き渡す*/}
      <input type="button" value="入力" onClick={handleClick} />
    </div>
  );
};

export default function App() {
  return <InputText />;
}
