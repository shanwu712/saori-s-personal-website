import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col h-screen bg-gray-100">
			<header className="text-4xl font-bold flex py-3 px-8 bg-white">
				{t('whoAmI')}
			</header>

			<div className="bg-[url('/bg.JPG')] bg-cover bg-center h-full flex items-center pl-36 ">
				<p className="text-white text-6xl font-black ">{t('TSW')}</p>
			</div>
		</div>
	);
}

export default App;
