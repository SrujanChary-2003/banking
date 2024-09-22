import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName: 'Srujan', lastName:'Chary',
    email: 'padakantisrujanchary@gmail.com'
  }
  return (
    <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName|| 'Guest'}
            subtext="Access and manage your account and transactions efficintly"
            />
            <TotalBalanceBox account={[]}
            totalBanks={1}
            totalCurrentBalance={1250.00}
            />
          </header>
          Recent transactions
        </div>
        <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance:123.50}]}
        />
    </section>
  )
}

export default Home
