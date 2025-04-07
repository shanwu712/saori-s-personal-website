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
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { t } from 'i18next';

function App() {
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const { t, i18n } = useTranslation();

	const portfolioCardItems = [
		{
			title: 'Nihongo Reciter',
			description: t('nihongoDescription'),
			image: `${import.meta.env.BASE_URL}nihongo.png`,
			details: t('nihongoDetails'),
			webURL: 'https://shanwu712.github.io/nihongo-reciter/',
			repoURL: 'https://github.com/shanwu712/nihongo-reciter',
		},
		{
			title: 'HandDripper',
			description: t('handDripperDescription'),
			image: `${import.meta.env.BASE_URL}handDripper.png`,
			details: t('handDripperDetails'),
			webURL: 'https://hand-dripper.vercel.app/',
			repoURL: 'https://github.com/shanwu712/HandDripper',
		},
	];

	useEffect(() => {
		AOS.init({ once: false, mirror: true });
		AOS.refresh();
	}, []);
	return (
		<div className="h-screen overflow-y-auto snap-y snap-mandatory bg-gray-100">
			<div
				// style={{
				// 	backgroundImage: `url(${import.meta.env.BASE_URL}bg.JPG)`,
				// }}
				className="bg-cover bg-stone-900 h-[100vh] flex flex-col snap-start"
			>
				<header className="text-4xl justify-between font-black flex py-3 px-8 bg-stone-100">
					<p>{t('whoAmI')}</p>
					<LanguagesToggle />
				</header>
				<div
					className="flex items-center h-full justify-between gap-14 px-36"
					data-aos="fade-right"
				>
					<div className="text-slate-50 flex-1 flex gap-6 flex-col text-shadow-lg">
						<p className="text-6xl font-bold ">{t('TSW')}</p>
						<span className="flex text-lg font-bold">{t('quickIntro')}</span>
						<Button className="w-fit bg-stone-100 text-stone-800 hover:bg-stone-300 font-semibold">
							<a href="https://github.com/shanwu712" target="_blank">
								{t('githubBtn')}
							</a>
						</Button>
					</div>
					<img
						src={`${import.meta.env.BASE_URL}myPhoto.png`}
						alt="myPhoto"
						className="w-72"
					/>
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
			<div className="snap-start h-[100vh] w-full relative bg-stone-50 flex flex-col items-center justify-center ">
				<div className="flex-1 flex flex-col mt-4 gap-4 xl:mt-12 xl:gap-14">
					<div className="flex flex-col items-center gap-2 z-10">
						<p className="text-5xl font-bold">{t('mySideProjects')}</p>
						<p>{t('hoverToSee')}</p>
					</div>

					<NavigationMenu>
						<NavigationMenuList>
							{portfolioCardItems.map(
								({ title, description, image, details, webURL, repoURL }) => (
									<NavigationPortfolioCard
										key={title}
										title={title}
										description={description}
										image={image}
										details={details}
										webURL={webURL}
										repoURL={repoURL}
									/>
								)
							)}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<footer className="bg-stone-700 text-stone-100 text-lg bottom-0 w-full py-4 text-center">
					<p>My Email address: shanwu712@icloud.com</p>
				</footer>
			</div>
		</div>
	);
}

export default App;

interface PortfolioCardProps {
	title: string;
	description: string;
	image: string;
	details?: string;
}

function PortfolioCard({
	title,
	description,
	image,
	details,
}: PortfolioCardProps) {
	return (
		<Card className="min-w-96 w-[30vw] min-h-[32rem] overflow-hidden transition-all duration-300 hover:shadow-lg">
			<div className="relative aspect-video overflow-hidden bg-amber-100">
				<img src={image} alt="HandDripper Logo" />
			</div>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="text-stone-700">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div>{details}</div>
			</CardContent>
			<CardFooter className="text-xs text-stone-500">
				{t('furtherInfo')}
			</CardFooter>
		</Card>
	);
}

function NavigationPortfolioCard(item: {
	title: string;
	description: string;
	image: string;
	details: string;
	webURL: string;
	repoURL: string;
}) {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>
				<PortfolioCard
					title={item.title}
					description={item.description}
					image={item.image}
					details={item.details}
				/>
			</NavigationMenuTrigger>
			<NavigationMenuContent className="w-fit">
				<ul className="flex flex-col gap-2 p-1">
					<li>
						<NavigationMenuLink asChild>
							<a
								className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
								href={item.webURL}
							>
								<div className="mb-0.5 mt-1 font-semibold">{item.title}</div>
								<p className="text-sm leading-tight text-muted-foreground">
									{t('checkApp', { title: item.title })}
								</p>
							</a>
						</NavigationMenuLink>
					</li>
					<li>
						<NavigationMenuLink asChild>
							<a
								className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
								href={item.repoURL}
							>
								<div className="mb-0.5 mt-1 font-semibold">
									{t('repoOfApp', { title: item.title })}
								</div>
								<p className="text-sm leading-tight text-muted-foreground text-nowrap">
									{t('checkRepo', { title: item.title })}
								</p>
							</a>
						</NavigationMenuLink>
					</li>
				</ul>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
}
