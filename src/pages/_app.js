import '@/styles/globals.css'
import Script from 'next/script'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({Component, pageProps}) {

	return (
		<>
			<Script strategy={"afterInteractive"} src={"https://www.googletagmanager.com/gtag/js?id=G-G3Z7777F74"}/>
			<Script id={"google-analytics"} strategy={"afterInteractive"}>
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-G3Z7777F74');
            `}
			</Script>
			<Component {...pageProps} />
		</>
	)
}
