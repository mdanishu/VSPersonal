import Script from 'next/script';

const HubspotScript: React.FC = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="//js.hs-scripts.com/43649249.js"
      id="hs-script-loader"
      async
      defer
    />
  </>
);

export default HubspotScript;
