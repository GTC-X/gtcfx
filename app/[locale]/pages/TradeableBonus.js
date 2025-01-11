import React from 'react'
import TradeBanner from '../components/15-deposit-bonus/Banner'
import ClaimYourBonus from '../components/15-deposit-bonus/ClaimYourBonus'
import TradeInvest from '../components/MoneyExpo/TradeInvest'
import TradeInvestStep from '../components/15-deposit-bonus/Steps'
import TermsAndConditions from '../components/15-deposit-bonus/Terms'
import BonusPromoTable from '../components/15-deposit-bonus/BonusPromoTable'

const TradeableBonusPage = () => {
  return (
    <>
    <TradeBanner />
    <ClaimYourBonus />
    <TradeInvestStep />
    <TermsAndConditions />
    </>
  )
}

export default TradeableBonusPage