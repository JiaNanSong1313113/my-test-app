'use client'
import { useState, ChangeEvent } from 'react'
import Header from '@/components/Header'
import Card from '@/components/Content/Card'
import Radio from '@/components/Content/Radio'

export default function Home() {
  const [radio1Selected, setRadio1Selected] = useState(true)
  const [radio2Selected, setRadio2Selected] = useState(false)

  const handleRadioChange = (
    event: ChangeEvent<HTMLInputElement>,
    radioNumber: number
  ) => {
    const isChecked = event.target.checked
    console.log(`Radio ${radioNumber} selected:`, isChecked)

    if (radioNumber === 1) {
      setRadio1Selected(isChecked)
    } else if (radioNumber === 2) {
      setRadio2Selected(isChecked)
    }
  }

  // progressBar 連動のため、userが各radioからチェック数によって、progress 数をけいさんして返す
  const calculateProcessing = () => {
    if (radio1Selected && radio2Selected) {
      return 100
    } else if (radio1Selected || radio2Selected) {
      return 50
    } else {
      return 0
    }
  }

  const handleButtonClick = () => {
    console.log(radio1Selected)
  }

  return (
    <div className="root">
      <Header title="クリプタクトで計算を始めてみましょう"></Header>
      <Card
        title="取引の情報を入力しましょう"
        icon=""
        info="仮想通貨の損益計算には過去すべての取引履歴が必要になります。"
        progressing={calculateProcessing()}
      >
        <Radio
          label="取引所 / ブロックチェーンを選択しましょう"
          info="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
          btnName="選択する"
          tag="13 取引所/ブロックチェーン選択済み"
          selected={radio1Selected}
          onChange={(event) => handleRadioChange(event, 1)}
          onButtonClick={handleButtonClick}
        ></Radio>
        <Radio
          label="取引所 / ブロックチェーンを選択しましょう"
          info="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
          btnName="選択する"
          tag="13 取引所/ブロックチェーン選択済み"
          selected={radio2Selected}
          onChange={(event) => handleRadioChange(event, 2)}
          onButtonClick={handleButtonClick}
        ></Radio>
      </Card>
      <Card
        title="取引の情報を入力しましょう"
        icon=""
        info="仮想通貨の損益計算には過去すべての取引履歴が必要になります。"
        progressing={calculateProcessing()}
      >
        <Radio
          label="取引所 / ブロックチェーンを選択しましょう"
          info="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
          btnName="選択する"
          tag="13 取引所/ブロックチェーン選択済み"
          selected={radio1Selected}
          onChange={(event) => handleRadioChange(event, 1)}
          onButtonClick={handleButtonClick}
        ></Radio>
        <Radio
          label="取引所 / ブロックチェーンを選択しましょう"
          info="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
          btnName="選択する"
          tag="13 取引所/ブロックチェーン選択済み"
          selected={radio2Selected}
          onChange={(event) => handleRadioChange(event, 2)}
          onButtonClick={handleButtonClick}
        ></Radio>
      </Card>
    </div>
  )
}
