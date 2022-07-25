import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import './styles.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
			/>
			<Script id='gtag' strategy='lazyOnload'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
					page_path: window.location.pathname,
					});
					`}
			</Script>
			<Head>
				<title>Chateá</title>
				<meta
					name='description'
					content='Iniciá chats de Whatsapp sin agregar nuevos contactos'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
