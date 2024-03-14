// // TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "autosize": true,
//           "symbol": "COINBASE:BTCUSD",
//           "timezone": "Africa/Johannesburg",
//           "theme": "light",
//           "style": "3",
//           "locale": "en",
//           "enable_publishing": false,
//           "hide_top_toolbar": true,
//           "hide_legend": true,
//           "withdateranges": true,
//           "range": "1M",
//           "allow_symbol_change": true,
//           "save_image": false,
//           "calendar": false,
//           "hide_volume": true,
//           "support_host": "https://www.tradingview.com"
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
//       <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:BTCUSD|1M"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "90%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": true,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1w|15",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);


