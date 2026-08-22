import { useTranslation } from 'react-i18next';
import './App.css';
import { LanguagesToggle } from '@/LanguagesToggle';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ExternalLink, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { t } from 'i18next';

function App() {
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

	const timelineEntries = [
		{ title: t('howFrontendTitle1'), details: t('howFrontendDetails1') },
		{ title: t('howFrontendTitle2'), details: t('howFrontendDetails2') },
		{ title: t('howFrontendTitle3'), details: t('howFrontendDetails3') },
		{ title: t('howFrontendTitle4'), details: t('howFrontendDetails4') },
	];

	useEffect(() => {
		AOS.init({ once: false, mirror: true });
		AOS.refresh();
	}, []);

	return (
		<div className="h-screen overflow-y-auto snap-y snap-mandatory bg-background">
			{/* ---------- Hero ---------- */}
			<div className="grain relative flex min-h-[100dvh] flex-col snap-start overflow-hidden bg-background">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
					style={{
						backgroundImage: `url(${import.meta.env.BASE_URL}bg.JPG)`,
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/70" />

				<header className="relative z-10 flex items-center justify-between border-b border-border px-6 py-4 sm:px-10">
					<p className="font-display text-xl tracking-wide sm:text-2xl">
						{t('brandName')}
					</p>
					<LanguagesToggle />
				</header>

				<span
					aria-hidden
					className="writing-vertical pointer-events-none absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 text-xs tracking-[0.3em] text-muted-foreground sm:block sm:left-6 lg:left-10"
				>
					{i18n.language === 'ja' ? 'フロントエンド エンジニア' : 'FRONTEND ENGINEER'}
				</span>

				<div
					className="relative z-10 flex flex-1 flex-col items-center justify-center gap-12 px-6 py-16 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-24 lg:pl-28"
					data-aos="fade-up"
				>
					<div className="flex max-w-xl flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
						<p className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
							{t('TSW')}
						</p>
						<span className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
							{t('quickIntro')}
						</span>
						<Button asChild size="lg" className="w-fit">
							<a href="https://github.com/shanwu712" target="_blank" rel="noreferrer">
								{t('githubBtn')}
							</a>
						</Button>
					</div>
					<div className="relative shrink-0">
						<div className="absolute -inset-3 rounded-2xl border border-primary/30" />
						<img
							src={`${import.meta.env.BASE_URL}myPhoto.png`}
							alt="Portrait of TingHsuan Wu"
							className="relative w-56 rounded-xl object-cover shadow-2xl shadow-black/50 sm:w-72"
						/>
					</div>
				</div>
			</div>

			{/* ---------- Why Frontend ---------- */}
			<div className="grain relative flex h-[100dvh] snap-start flex-col items-center justify-center gap-8 overflow-hidden bg-card px-6 py-8 sm:gap-10 sm:py-10">
				<div className="flex w-full max-w-2xl shrink-0 flex-col items-center gap-3 text-center">
					<p className="font-display text-2xl leading-snug sm:text-3xl lg:text-4xl">
						{t('whyFrontend')}
					</p>
					<span className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
						{t('whyFrontendDescription')}
					</span>
				</div>

				<div className="flex w-full max-w-5xl shrink-0 flex-col gap-4">
					<p className="text-center font-display text-lg sm:text-xl">
						{t('howFrontend')}
					</p>
					<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
						{timelineEntries.map(({ title, details }) => (
							<div
								key={title}
								className="relative min-w-[70%] shrink-0 snap-start border-t-2 border-primary/50 pt-4 sm:min-w-0"
							>
								<span className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-primary" />
								<p className="font-display text-sm leading-snug sm:text-base">
									{title}
								</p>
								<p
									className="mt-1.5 line-clamp-5 text-xs leading-relaxed text-muted-foreground sm:line-clamp-6 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4"
									dangerouslySetInnerHTML={{ __html: details }}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ---------- Side Projects ---------- */}
			<div className="grain relative flex min-h-[100dvh] w-full snap-start flex-col items-center justify-center bg-background">
				<div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16 xl:gap-14">
					<div className="flex flex-col items-center gap-2 text-center">
						<p className="font-display text-4xl sm:text-5xl">
							{t('mySideProjects')}
						</p>
						<p className="text-sm text-muted-foreground sm:text-base">
							{t('sideProjectsSubtitle')}
						</p>
					</div>

					<div className="grid w-full max-w-4xl gap-8 sm:grid-cols-2">
						{portfolioCardItems.map((item) => (
							<PortfolioCard key={item.title} {...item} />
						))}
					</div>
				</div>
				<footer className="relative z-10 flex w-full flex-col items-center gap-3 border-t border-border bg-card px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-12">
					<p>&copy; {new Date().getFullYear()} TingHsuan Wu</p>
					<div className="flex items-center gap-5">
						<a
							href="mailto:shanwu712@icloud.com"
							className="flex items-center gap-1.5 transition-colors hover:text-foreground"
						>
							<Mail className="size-4" />
							shanwu712@icloud.com
						</a>
						<a
							href="https://github.com/shanwu712"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 transition-colors hover:text-foreground"
						>
							<Github className="size-4" />
							GitHub
						</a>
					</div>
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
	webURL: string;
	repoURL: string;
}

function PortfolioCard({
	title,
	description,
	image,
	details,
	webURL,
	repoURL,
}: PortfolioCardProps) {
	return (
		<Card className="overflow-hidden border-0 bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
			<div className="relative aspect-video overflow-hidden bg-secondary">
				<img src={image} alt={`${title} preview`} className="size-full object-cover" />
			</div>
			<CardHeader>
				<CardTitle className="font-display font-normal">{title}</CardTitle>
				<CardDescription className="text-muted-foreground">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div>{details}</div>
			</CardContent>
			<CardFooter className="justify-start gap-3 border-t border-border">
				<Button asChild size="sm">
					<a href={webURL} target="_blank" rel="noreferrer">
						<ExternalLink className="size-4" />
						{t('visitSite')}
					</a>
				</Button>
				<Button asChild size="sm" variant="outline">
					<a href={repoURL} target="_blank" rel="noreferrer">
						<Github className="size-4" />
						{t('viewCode')}
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
