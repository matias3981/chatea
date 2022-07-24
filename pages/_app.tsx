import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import './styles.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
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
