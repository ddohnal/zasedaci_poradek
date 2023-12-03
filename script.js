document.addEventListener("DOMContentLoaded", function () {
    const students = ["Bouzkova Klara", "Březíková Diana", "Dostal Radim", "Dulanská Petra", "Gajdušek Adam", "Galanda Milan", "Hanáková Barbora", "Hausnerová Zuzana", "Hrazdirová Anna", "Hronková Hana", "Jaroš David", "Kadláček Jan", "Ledvinová Barbora", "Markovičová Laura", "Martinec Filip", "Mihola Lukáš", "Palčík Tibor", "Podstrelený František", "Příkopová Veronika", "Skařupa David", "Slezáková Alžběta", "Škrabal Marek", "Štěpaníková Laura", "Theiberová Eliška", "Tomišková Ester", "Zborek Michael", "Zemanová Natalie", "Žydel Daniel", "Volno", "Volno"];

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
        shuffleArray(students);

        // Zkontrolujte, zda je počet prvků v poli students roven počtu prvků v tdElements
        if (students.length === tdElements.length) {
            for (let i = 0; i < tdElements.length; i++) {
                tdElements[i].textContent = students[i];
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
