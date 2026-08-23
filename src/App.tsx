import { useTranslation } from 'react-i18next';
import './App.css';
import { LanguagesToggle } from '@/LanguagesToggle';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
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
			tags: ['Vanilla JS', 'localStorage'],
			webURL: 'https://shanwu712.github.io/nihongo-reciter/',
			repoURL: 'https://github.com/shanwu712/nihongo-reciter',
		},
		{
			title: 'HandDripper',
			description: t('handDripperDescription'),
			image: `${import.meta.env.BASE_URL}handDripper.png`,
			details: t('handDripperDetails'),
			tags: ['React', 'TypeScript', 'Supabase', 'TanStack Query', 'Tailwind CSS'],
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

	const experienceEntries = [
		{
			duration: t('workExperienceDuration'),
			role: t('workExperienceRole'),
			achievements: [
				t('workAchievement1'),
				t('workAchievement2'),
				t('workAchievement4'),
				t('workAchievement3'),
				t('workAchievement5'),
			],
			tags: [
				'React Native',
				'Expo',
				'Next.js',
				'Redux-Saga',
				'SWR',
				'Sentry',
				'Firebase Analytics',
				'Jenkins',
			],
			current: true,
		},
		{
			duration: t('internDuration'),
			role: t('internRole'),
			achievements: [
				t('internAchievement2'),
				t('internAchievement3'),
				t('internAchievement4'),
			],
			tags: ['React', 'TypeScript', 'Recharts', 'Git'],
			current: false,
		},
	];

	const skillGroups = [
		{ label: t('skillsLanguages'), items: ['TypeScript', 'JavaScript'] },
		{
			label: t('skillsFrameworks'),
			items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Recharts'],
		},
		{
			label: t('skillsStateData'),
			items: ['Redux-Saga', 'SWR', 'TanStack Query'],
		},
		{
			label: t('skillsTools'),
			items: [
				'Git / GitHub',
				'JIRA',
				'Jenkins',
				'Sentry',
				'Firebase Analytics',
				'Supabase',
				'Vite',
				'i18next',
			],
		},
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
					className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 sm:px-12 lg:px-24 lg:pl-28"
					data-aos="fade-up"
				>
					<div className="flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-16 xl:max-w-7xl xl:gap-20">
						<div className="flex max-w-xl flex-col items-center gap-6 text-center lg:max-w-2xl lg:items-start lg:text-left xl:max-w-3xl">
							<p className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
								{t('TSW')}
							</p>
							<span className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-xl lg:text-xl">
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
								className="relative w-56 rounded-xl object-cover shadow-2xl shadow-black/50 sm:w-72 lg:w-80 xl:w-96"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ---------- Work Experience ---------- */}
			<div className="grain relative flex min-h-[100dvh] w-full snap-start flex-col items-center justify-center gap-10 border-t border-border bg-background px-6 py-16">
				<p className="font-display text-3xl sm:text-4xl">{t('workExperience')}</p>
				<div className="grid w-full max-w-4xl gap-8 sm:grid-cols-2">
					{experienceEntries.map((entry) => (
						<ExperienceCard key={entry.role} {...entry} />
					))}
				</div>
			</div>

			{/* ---------- Skills ---------- */}
			<div className="grain relative flex min-h-[100dvh] w-full snap-start flex-col items-center justify-center gap-10 border-t border-border bg-card px-6 py-16">
				<div className="flex flex-col items-center gap-2 text-center">
					<p className="font-display text-4xl sm:text-5xl">{t('skillsTitle')}</p>
					<p className="text-sm text-muted-foreground sm:text-base">
						{t('skillsSubtitle')}
					</p>
				</div>
				<div className="flex w-full max-w-3xl flex-col gap-8">
					{skillGroups.map((group) => (
						<div
							key={group.label}
							className="flex flex-col items-center gap-3 sm:items-start"
						>
							<p className="text-xs uppercase tracking-widest text-primary">
								{group.label}
							</p>
							<div className="flex flex-wrap justify-center gap-2 sm:justify-start">
								{group.items.map((item) => (
									<span
										key={item}
										className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
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
			</div>

			{/* ---------- Why Frontend (closing note) + Footer ---------- */}
			<div className="grain relative flex h-[100dvh] snap-start flex-col overflow-hidden bg-card">
				<div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 py-8 sm:gap-8">
					<div className="flex w-full max-w-2xl shrink-0 flex-col items-center gap-3 text-center">
						<p className="font-display text-xl leading-snug sm:text-2xl lg:text-3xl">
							{t('whyFrontend')}
						</p>
						<span className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
							{t('whyFrontendDescription')}
						</span>
					</div>

					<div className="flex w-full max-w-5xl shrink-0 flex-col gap-3">
						<p className="text-center font-display text-base text-muted-foreground sm:text-lg">
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
										className="mt-1.5 text-xs leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4"
										dangerouslySetInnerHTML={{ __html: details }}
									/>
								</div>
							))}
						</div>
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
							href="https://www.linkedin.com/in/ting-hsuan-wu-2134b9306/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 transition-colors hover:text-foreground"
						>
							<Linkedin className="size-4" />
							LinkedIn
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

interface ExperienceCardProps {
	duration: string;
	role: string;
	description?: string;
	achievements?: string[];
	tags: string[];
	current?: boolean;
}

function ExperienceCard({
	duration,
	role,
	description,
	achievements,
	tags,
	current,
}: ExperienceCardProps) {
	return (
		<Card className="border-0 bg-card shadow-none">
			<CardHeader>
				<div className="flex items-center gap-2">
					{current ? (
						<span className="relative flex size-2">
							<span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
							<span className="relative inline-flex size-2 rounded-full bg-primary" />
						</span>
					) : (
						<span className="inline-flex size-2 rounded-full bg-muted-foreground/50" />
					)}
					<span className="text-xs uppercase tracking-widest text-primary">
						{duration}
					</span>
				</div>
				<CardTitle className="font-display text-lg font-normal sm:text-xl">
					{role}
				</CardTitle>
			</CardHeader>
			<CardContent>
				{description ? (
					<p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
						{description}
					</p>
				) : null}
				{achievements ? (
					<ul
						className={`list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-primary sm:text-base ${description ? 'mt-4' : ''}`}
					>
						{achievements.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				) : null}
				<div className="mt-5 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
						>
							{tag}
						</span>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

interface PortfolioCardProps {
	title: string;
	description: string;
	image: string;
	details?: string;
	tags?: string[];
	webURL: string;
	repoURL: string;
}

function PortfolioCard({
	title,
	description,
	image,
	details,
	tags,
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
				{tags ? (
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
							>
								{tag}
							</span>
						))}
					</div>
				) : null}
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
