
'use client'
import React from 'react'
import Hero from '../components/CreditBonus/Hero'
import PaymentOption from '../components/account/PaymentOption'

import TradeInvestStep from '../components/15-deposit-bonus/Steps'
import TermsAndConditions from '../components/15-deposit-bonus/Terms'

const HundredCreditBonus = () => {
  return (
    <>
         <Hero />
         <PaymentOption />
    <TradeInvestStep />
    <TermsAndConditions />
    </>
  )
}

export default HundredCreditBonus