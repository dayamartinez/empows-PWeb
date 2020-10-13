import React from 'react'

export default function widget(){
    return (
      <div >        
        <div key="widget-container" className="tradingview-widget-container" style={{marginBottom: '15px'}}>
          <div key="widget-container" className="tradingview-widget-container__widget"></div>
          <iframe title="tradingview-widget" scrolling="no" allowtransparency="true" border="0"
            src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=es#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22S%26P%20500%22%2C%22proName%22%3A%22OANDA%3ASPX500USD%22%7D%2C%7B%22title%22%3A%22Shangai%20Composite%22%2C%22proName%22%3A%22INDEX%3AXLY0%22%7D%2C%7B%22title%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX_IDC%3AEURUSD%22%7D%2C%7B%22title%22%3A%22BTC%2FUSD%22%2C%22proName%22%3A%22BITFINEX%3ABTCUSD%22%7D%2C%7B%22title%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22BITFINEX%3AETHUSD%22%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22www.feniktrading.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D" 
            style={{boxSizing: "border-box", height:"46px", width: "100%"}} data-gtm-yt-inspected-1_25="true">
          </iframe>
        </div>            
      </div>  
    )
}