import { Globe } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTranslation } from 'react-i18next';

export function LanguagesToggle() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className="flex items-center gap-2 font-sans">
			<Globe className="h-4 w-4 text-muted-foreground " />
			<ToggleGroup
				type="single"
				value={i18n.language}
				onValueChange={(value: string) => {
					if (value) changeLanguage(value);
				}}
				className="border rounded-md overflow-hidden"
			>
				<ToggleGroupItem
					value="en"
					aria-label="English"
					className={`px-3 py-2 ${
						i18n.language === 'en'
							? 'bg-slate-200  dark:bg-slate-700 font-medium '
							: 'text-muted-foreground'
					}`}
				>
					EN
				</ToggleGroupItem>
				<ToggleGroupItem
					value="ja"
					aria-label="Japanese"
					className={`px-3 py-2 ${
						i18n.language === 'ja'
							? 'bg-slate-200 dark:bg-slate-700 font-medium'
							: 'text-muted-foreground'
					}`}
				>
					JA
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	);
}
