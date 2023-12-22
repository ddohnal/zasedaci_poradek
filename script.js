document.addEventListener("DOMContentLoaded", function () {
    const students1 = ["Bouzková Klára", "Březíková Diana", "Dulanská Petra", "Hanáková Barbora", "Hausnerová Zuzana", "Hrazdírová Anna", "Hronková Hana", "Ledvinová Barbora", "Markovičová Laura", "Příkopová Veronika", "Slezáková Alžběta", "Štěpaníková Laura", "Theiberová Eliška", "Tomišková Ester", "Zemanová Natalie"];
    const students2 = ["Dostal Radim", "Gajdušek Adam", "Galanda Milan", "Jaroš David", "Kadláček Jan", "Martinec Filip", "Mihola Lukáš", "Palčík Tibor", "Podstrelený František", "Skařupa David", "Škrabal Marek", "Zborek Michael", "Žydel Daniel", "Nikdo", "Nikdo"];
    const tdElements = document.querySelectorAll("td");
    const fillTableButton = document.getElementById("fillTableButton");
    const downloadTableButton = document.getElementById("downloadTableButton");

    // Funkce pro náhodné promíchání pole
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Funkce pro naplnění tabulky
    function fillTable() {
        shuffleArray(students1);
        shuffleArray(students2);
    
        // Zkontrolujte, zda je počet prvků v polích students1 a students2 roven počtu prvků v tdElements a pak je doplní
        let soucet = students1.length + students2.length;    
        if (soucet === tdElements.length) {
            for (let i = 0; i < soucet; i++) {
                if (i % 2 === 0) {
                    tdElements[i].textContent = students1[i / 2]
                } else {
                    tdElements[i].textContent = students2[(i - 1) / 2]
                }
            }
        } else {
            console.error("Chyba: Počet studentů se neshoduje s počtem prvků v tabulce.");
        }
}
    // Funkce pro stáhnutí obsahu tabulky do souboru
    function downloadTable() {
        const tableContent = Array.from(tdElements).map(td => td.textContent).join("\t");
        const blob = new Blob([tableContent], { type: "text/plain" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "tabulka.txt";
        link.click();
    }

    // Přiřazení funkcí k tlačítkům
    fillTableButton.addEventListener("click", fillTable);
    downloadTableButton.addEventListener("click", downloadTable);
});
