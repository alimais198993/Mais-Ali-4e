const substances = [
    { name: "Ghb Uniform Detail.Html", category: "Unclassified" },
    { name: "Lisinopril", category: "Unclassified" },
    { name: "Morphine Uniform Detail.Html", category: "Unclassified" },
    { name: "Salbutamol", category: "Unclassified" },
    { name: "Cathinone", category: "Unclassified" },
    { name: "Verapamil", category: "Unclassified" },
    { name: "Thallium Uniform Detail.Html", category: "Unclassified" },
    { name: "╪¿┘É╪º┘È╪º ┘À┘È╪½┘È┘Ä ╪º┘Ö┘À┘È┘Å", category: "Unclassified" },
    { name: "Clobazam", category: "Unclassified" },
    { name: "Eszopiclone", category: "Unclassified" },
    { name: "Cyclobenzaprine", category: "Unclassified" },
    { name: "Chlorpromazine", category: "Unclassified" },
    { name: "Diphenhydramine", category: "Unclassified" },
    { name: "Flurazepam", category: "Unclassified" },
    { name: "Carbamazepine", category: "Unclassified" },
    { name: "Zopiclone Uniform Detail.Html", category: "Unclassified" },
    { name: "Zonisamide", category: "Unclassified" },
    { name: "Desipramine", category: "Unclassified" },
    { name: "Topiramate", category: "Unclassified" },
    { name: "Dipyridamole", category: "Unclassified" },
    { name: "╪¿╪º╪▒╪º-┘Ç┘È╪»╪▒┘Ê┘Â╪│┘È ┘À┘È╪½╪º┘Ö┘À┘Ü┘È╪¬╪º┘À┘È┘Å", category: "Unclassified" },
    { name: "Meperidine", category: "Unclassified" },
    { name: "╪¡┘À╪╢ ╪º┘Ä┘Ü┘È┘Å┘È┘Ä ╪º┘Ö╪│┘È╪¬┘È┘Â", category: "Unclassified" },
    { name: "Acetonitrile", category: "Unclassified" },
    { name: "Methylphenidate", category: "Unclassified" },
    { name: "Cetirizine", category: "Unclassified" },
    { name: "Pregabalin", category: "Unclassified" },
    { name: "Methcathinone Uniform Detail.Html", category: "Unclassified" },
    { name: "Isopropanol", category: "Unclassified" },
    { name: "Naloxone", category: "Unclassified" },
    { name: "Thiopental", category: "Unclassified" },
    { name: "Tramadol", category: "Unclassified" },
    { name: "Methadone", category: "Unclassified" },
    { name: "Ethanol", category: "Unclassified" },
    { name: "Ketamine", category: "Unclassified" },
    { name: "N-┘Ü┘Ê╪▒┘À┘È┘Ä ╪º┘Ö┘À┘Ü┘È╪¬╪º┘À┘È┘Å", category: "Unclassified" },
    { name: "Lorazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "Propylhexedrine", category: "Unclassified" },
    { name: "Famotidine", category: "Unclassified" },
    { name: "Cannabinol Uniform Detail.Html", category: "Unclassified" },
    { name: "Mdma Uniform Detail.Html", category: "Unclassified" },
    { name: "Zolpidem Uniform Detail.Html", category: "Unclassified" },
    { name: "Amobarbital", category: "Unclassified" },
    { name: "Ziprasidone", category: "Unclassified" },
    { name: "Alprazolam Uniform Detail.Html", category: "Unclassified" },
    { name: "Mescaline", category: "Unclassified" },
    { name: "Pantoprazole", category: "Unclassified" },
    { name: "Scopolamine Uniform Detail.Html", category: "Unclassified" },
    { name: "Mix Of Random Aldehydes-Ketones", category: "Unclassified" },
    { name: "Chloroform", category: "Unclassified" },
    { name: "Nitroglycerin", category: "Unclassified" },
    { name: "Tapentadol", category: "Unclassified" },
    { name: "Amitriptyline", category: "Unclassified" },
    { name: "┘À┘È╪½╪º┘Ö┘À┘Ü┘È╪¬╪º┘À┘È┘Å-╪║┘Ä┘Ê┘Â┘Ê╪▒┘Ê┘Å┘È╪»", category: "Unclassified" },
    { name: "Caffeine", category: "Unclassified" },
    { name: "Valacyclovir", category: "Unclassified" },
    { name: "Heroin", category: "Unclassified" },
    { name: "Olanzapine", category: "Unclassified" },
    { name: "Ketobemidone Uniform Detail.Html", category: "Unclassified" },
    { name: "Secobarbital", category: "Unclassified" },
    { name: "Oxycodone", category: "Unclassified" },
    { name: "1-┘Ü┘È┘Å┘È┘Ä-2-╪¿╪▒┘Ê╪¿╪º┘Å┘Ê┘Ä", category: "Unclassified" },
    { name: "Lamotrigine", category: "Unclassified" },
    { name: "Phenobarbital Uniform Detail.Html", category: "Unclassified" },
    { name: "Gabapentin", category: "Unclassified" },
    { name: "P2P ┘Ü┘È┘Å┘È┘Ä ╪º┘Ö╪│┘È╪¬┘Ê┘Å", category: "Unclassified" },
    { name: "Bupropion", category: "Unclassified" },
    { name: "Dextromethorphan", category: "Unclassified" },
    { name: "Citalopram", category: "Unclassified" },
    { name: "Cannabinol", category: "Unclassified" },
    { name: "Hydrocodone Uniform Detail.Html", category: "Unclassified" },
    { name: "Psilocybin", category: "Unclassified" },
    { name: "Chloral Hydrate Uniform Detail.Html", category: "Unclassified" },
    { name: "Buprenorphine Uniform Detail.Html", category: "Unclassified" },
    { name: "Paroxetine", category: "Unclassified" },
    { name: "Diazepam", category: "Unclassified" },
    { name: "Temazepam", category: "Unclassified" },
    { name: "Digoxin", category: "Unclassified" },
    { name: "Carbon Monoxide", category: "Unclassified" },
    { name: "Atropine Uniform Detail.Html", category: "Unclassified" },
    { name: "Risperidone", category: "Unclassified" },
    { name: "Bromazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "N-Formylmethamphetamine", category: "Unclassified" },
    { name: "Caffeine Uniform Detail.Html", category: "Unclassified" },
    { name: "Trazodone", category: "Unclassified" },
    { name: "Benzoylecgonine Uniform Detail.Html", category: "Unclassified" },
    { name: "Fluoxetine", category: "Unclassified" },
    { name: "Diazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "Strychnine", category: "Unclassified" },
    { name: "Arsenic", category: "Unclassified" },
    { name: "Oseltamivir", category: "Unclassified" },
    { name: "Zaleplon", category: "Unclassified" },
    { name: "Chloroform Uniform Detail.Html", category: "Unclassified" },
    { name: "Barbital Uniform Detail.Html", category: "Unclassified" },
    { name: "Methanol", category: "Unclassified" },
    { name: "Venlafaxine", category: "Unclassified" },
    { name: "N-Formylamphetamine", category: "Unclassified" },
    { name: "Nitrazepam", category: "Unclassified" },
    { name: "╪º┘Ö┘À┘Ü┘È╪¬╪º┘À┘È┘Å", category: "Unclassified" },
    { name: "Nortriptyline", category: "Unclassified" },
    { name: "Isosorbide Mononitrate", category: "Unclassified" },
    { name: "┘À┘È╪½╪º┘Ö┘À┘Ü┘È╪¬╪º┘À┘È┘Å", category: "Unclassified" },
    { name: "Rivaroxaban", category: "Unclassified" },
    { name: "Phenytoin", category: "Unclassified" },
    { name: "Cocaine Uniform Detail.Html", category: "Unclassified" },
    { name: "Spironolactone", category: "Unclassified" },
    { name: "Cyanide", category: "Unclassified" },
    { name: "Metformin", category: "Unclassified" },
    { name: "╪º┘Ö┘À┘Ü┘È╪¬╪º┘À┘È┘Å-╪║┘Ä┘Ê┘Â┘Ê╪▒┘Ê┘Å┘È╪»", category: "Unclassified" },
    { name: "Acyclovir", category: "Unclassified" },
    { name: "Levetiracetam", category: "Unclassified" },
    { name: "Promethazine", category: "Unclassified" },
    { name: "Lithium Carbonate", category: "Unclassified" },
    { name: "Methylamine Residue Derivatives", category: "Unclassified" },
    { name: "Ranitidine", category: "Unclassified" },
    { name: "Sertraline", category: "Unclassified" },
    { name: "Estazolam", category: "Unclassified" },
    { name: "Atropine", category: "Unclassified" },
    { name: "Phenobarbital", category: "Unclassified" },
    { name: "Loratadine", category: "Unclassified" },
    { name: "Fentanyl", category: "Unclassified" },
    { name: "Lsd Uniform Detail.Html", category: "Unclassified" },
    { name: "Pentobarbital", category: "Unclassified" },
    { name: "Ephedrine", category: "Unclassified" },
    { name: "Doxepin", category: "Unclassified" },
    { name: "Flunitrazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "Meprobamate", category: "Unclassified" },
    { name: "P2Np Uniform Detail.Html", category: "Unclassified" },
    { name: "┘Å┘Ê╪▒╪º┘Ò┘È┘Ü┘È╪»╪▒┘È┘Å", category: "Unclassified" },
    { name: "Clozapine", category: "Unclassified" },
    { name: "Buspirone", category: "Unclassified" },
    { name: "Polyaromatic Degradation Products", category: "Unclassified" },
    { name: "Ibuprofen", category: "Unclassified" },
    { name: "Ketorolac", category: "Unclassified" },
    { name: "Warfarin", category: "Unclassified" },
    { name: "Codeine Uniform Detail.Html", category: "Unclassified" },
    { name: "Clonidine", category: "Unclassified" },
    { name: "Bromazepam", category: "Unclassified" },
    { name: "P2P ╪º┘Ä┘À╪¬╪¿┘É┘È", category: "Unclassified" },
    { name: "Oxycodone Uniform Detail.Html", category: "Unclassified" },
    { name: "Carfentanil Uniform Detail.Html", category: "Unclassified" },
    { name: "Ethylene Glycol", category: "Unclassified" },
    { name: "Clonazepam", category: "Unclassified" },
    { name: "Omeprazole", category: "Unclassified" },
    { name: "Temazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "Amphetamine Uniform Detail.Html", category: "Unclassified" },
    { name: "Hydrochlorothiazide", category: "Unclassified" },
    { name: "Haloperidol", category: "Unclassified" },
    { name: "Phenylpropanolamine", category: "Unclassified" },
    { name: "Clonazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "Chlorpromazine Uniform Detail.Html", category: "Unclassified" },
    { name: "Furosemide", category: "Unclassified" },
    { name: "Chlorpheniramine", category: "Unclassified" },
    { name: "Lsd", category: "Unclassified" },
    { name: "Midazolam", category: "Unclassified" },
    { name: "Ricin Uniform Detail.Html", category: "Unclassified" },
    { name: "Acetaminophen", category: "Unclassified" },
    { name: "Risperidone Detailed Card 2.Html", category: "Unclassified" },
    { name: "Diastereomers Of Amphetamine", category: "Unclassified" },
    { name: "Nitrazepam Uniform Detail.Html", category: "Unclassified" },
    { name: "Propranolol", category: "Unclassified" },
    { name: "Cyclobenzaprine Uniform Detail.Html", category: "Unclassified" },
    { name: "Quetiapine", category: "Unclassified" },
    { name: "Phenylacetic Acid Derivative", category: "Unclassified" },
    { name: "Atenolol", category: "Unclassified" },
    { name: "Bmk Uniform Detail.Html", category: "Unclassified" },
    { name: "Theophylline", category: "Unclassified" },
    { name: "Methamphetamine Uniform Detail.Html", category: "Unclassified" }
];