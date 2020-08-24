import React from 'react'
import './Donate.css'

//Components
import YellowBox from '../../components/YellowBox/YellowBox.js'
import DonateExampleBanner from '../../components/DonateExampleBanner/DonateExampleBanner'
import WhiteSpace from "../../components/WhiteSpace/WhiteSpace.js"

function Donate() {
  return (
    <div className="donate">
      <WhiteSpace />
      <WhiteSpace />
      <DonateExampleBanner />
      <WhiteSpace />
      <YellowBox />
    </div>
  )
}

export default Donate
