export function generateEmailAddresses(count: number): string {
	const emails = Array.from({ length: count }, () => {
		const random = Math.random().toString(36).substring(2, 8); // Génère une chaîne aléatoire
		return `rd_${random}@demoustier.com`;
	});

	return emails.join(', ');
}