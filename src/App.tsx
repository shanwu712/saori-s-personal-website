import { useTranslation } from 'react-i18next';
import './App.css';
import { LanguagesToggle } from '@/LanguagesToggle';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

function App() {
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		AOS.init({ once: false, mirror: true });
		AOS.refresh();
	}, []);
	return (
		<div className="h-screen overflow-y-auto snap-y snap-mandatory bg-gray-100">
			<div className="bg-[url('./bg.JPG')] bg-cover h-[100vh] flex flex-col snap-start">
				<header className="text-4xl justify-between font-black flex py-3 px-8 bg-white">
					<p>{t('whoAmI')}</p>
					<LanguagesToggle />
				</header>
				<div className="flex-1 flex items-center pl-36" data-aos="fade-right">
					<div className="text-slate-50 flex gap-6 flex-col text-shadow-lg">
						<p className="text-6xl font-bold ">{t('TSW')}</p>
						<span className="w-3/4 flex text-lg font-bold">
							{t('quickIntro')}
						</span>
						<Button className="w-fit">
							<a href="https://github.com/shanwu712" target="_blank">
								{t('githubBtn')}
							</a>
						</Button>
					</div>
				</div>
			</div>
			<div className="bg-amber-50 snap-start h-[100vh] gap-10 flex flex-col items-center justify-center lg:gap-16">
				<div
					className={`flex flex-col gap-10 justify-center transition-all duration-500  ${
						isSheetOpen
							? 'items-start transform translate-x-[-40%] w-1/2 px-14'
							: 'items-center transform translate-x-0 lg:gap-16'
					}`}
				>
					<p className="text-4xl font-bold">{t('whyFrontend')}</p>
					<span
						className={`text-lg ${
							isSheetOpen ? 'text-left' : 'text-center w-2/3'
						}`}
					>
						{t('whyFrontendDescription')}
					</span>
				</div>
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger
						asChild
						className={`${isSheetOpen ? 'hidden' : 'flex items-center'}`}
					>
						<Button className="text-lg">{t('howFrontend')}</Button>
					</SheetTrigger>
					<SheetContent className="overflow-y-auto max-w-[40vw] w-full pb-2">
						<SheetHeader>
							<SheetTitle className="font-black text-xl">
								{t('frontendRoadmap')}
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col px-8 text-lg whitespace-pre-line gap-5 [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:underline-offset-4">
							<span>
								<p className="font-bold">{t('howFrontendTitle1')}</p>
								<p
									className={`${i18n.language === 'ja' ? 'text-base' : ''}`}
									dangerouslySetInnerHTML={{
										__html: t('howFrontendDetails1'),
									}}
								/>
							</span>
							<span>
								<p className="font-bold">{t('howFrontendTitle2')}</p>
								<p
									className={`${i18n.language === 'ja' ? 'text-base' : ''}`}
									dangerouslySetInnerHTML={{
										__html: t('howFrontendDetails2'),
									}}
								/>
							</span>
							<span>
								<p className="font-bold">{t('howFrontendTitle3')}</p>
								<p
									className={`${i18n.language === 'ja' ? 'text-base' : ''}`}
									dangerouslySetInnerHTML={{
										__html: t('howFrontendDetails3'),
									}}
								/>
							</span>
							<span>
								<p className="font-bold">{t('howFrontendTitle4')}</p>
								<p className={`${i18n.language === 'ja' ? 'text-base' : ''}`}>
									{t('howFrontendDetails4')}
								</p>
							</span>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}

export default App;
