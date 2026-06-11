export interface Category {
  id: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'ekonomi-finans', title: 'Ekonomi & finans', description: 'Ekonomer, controllers, revisorer och finansanalytiker. Budget, rapportering, analys och revision.' },
  { id: 'ledarskap-strategi', title: 'Ledarskap & strategi', description: 'Chefer, projektledare och beslutsfattare. Mötesledning, strategiarbete och beslutsunderlag.' },
  { id: 'juridik-compliance', title: 'Juridik & compliance', description: 'Jurister, bolagsjurister och complianceansvariga. Avtalsgranskning, regelefterlevnad och riskbedömning.' },
  { id: 'administration-ea', title: 'Administration & EA', description: 'Assistenter, koordinatorer och kontorsadministration. Schemaläggning, dokumenthantering och kommunikation.' },
  { id: 'utbildning-pedagogik', title: 'Utbildning & pedagogik', description: 'Lärare, utbildare, rektorer och studiehandledare. Lektionsplanering, bedömning och kursdesign.' },
  { id: 'marknadsforing-kommunikation', title: 'Marknadsföring & kommunikation', description: 'Marknadschefer, copywriters, PR och sociala medier. Kampanjer, texter och innehållsstrategi.' },
  { id: 'vard-omsorg', title: 'Vård & omsorg', description: 'Sjuksköterskor, läkare, undersköterskor och vårdadministratörer. Dokumentation och patientkommunikation.' },
  { id: 'hr-rekrytering', title: 'HR & rekrytering', description: 'HR-chefer, rekryterare och personalutvecklare. Jobbannonsering, intervjufrågor och onboarding.' },
  { id: 'sme-entreprenorer', title: 'SME & entreprenörer', description: 'Småföretagare, verksamhetsledare och enmansföretag. Affärsplanering och effektivisering.' },
  { id: 'forsaljning', title: 'Försäljning & kundrelationer', description: 'Säljare, account managers och kundansvariga. Mötesförberedelse, kvalificering, förhandling och kundvård.' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
