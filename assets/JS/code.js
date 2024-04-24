// Obtendo o elemento input
var input = document.getElementsByTagName("input");

// Adicionando um ouvinte de evento para 'keydown'
input.addEventListener("keydown", function (event) {
    // Verificando se a tecla pressionada é 'Enter'
    if (event.key === "Enter") {
        // Impedindo a ação padrão (recarregar a página)
        event.preventDefault();
    }
});

function attData() {
    const data = {
        uramakiQNT: document.getElementById("uramaki").value,
        hotrollQNT: document.getElementById("hotroll").value,
        niguriQNT: document.getElementById("niguri").value,
        hossomakiQNT: document.getElementById("hossomaki").value,
        guiozaQNT: document.getElementById("guioza").value,
        tempuraQNT: document.getElementById("tempura").value,
        gohanQNT: document.getElementById("gohan").value,
        temakiQNT: document.getElementById("temaki").value,
        sunomonoQNT: document.getElementById("sunomono").value,
        teppanQNT: document.getElementById("teppan").value,
        yakissobaQNT: document.getElementById("yakissoba").value,
        sobaQNT: document.getElementById("soba").value,
        lamenQNT: document.getElementById("lamen").value,
    };

    data.uramakiVAL = data.uramakiQNT * 23.0;
    data.hotrollVAL = data.hotrollQNT * 20.0;
    data.niguriVAL = data.niguriQNT * 10.5;
    data.hossomakiVAL = data.hossomakiQNT * 8.9;
    data.guiozaVAL = data.guiozaQNT * 15.9;
    data.tempuraVAL = data.tempuraQNT * 17.9;
    data.gohanVAL = data.gohanQNT * 4.9;
    data.temakiVAL = data.temakiQNT * 35.0;
    data.sunomonoVAL = data.sunomonoQNT * 13.99;
    data.teppanVAL = data.teppanQNT * 42.0;
    data.yakissobaVAL = data.yakissobaQNT * 30.99;
    data.sobaVAL = data.sobaQNT * 25.0;
    data.lamenVAL = data.lamenQNT * 48.0;

    var result =
        data.uramakiVAL +
        data.hotrollVAL +
        data.niguriVAL +
        data.hossomakiVAL +
        data.guiozaVAL +
        data.tempuraVAL +
        data.gohanVAL +
        data.temakiVAL +
        data.sunomonoVAL +
        data.teppanVAL +
        data.yakissobaVAL +
        data.sobaVAL +
        data.lamenVAL;

    var total = document.getElementById("total");
    total.innerHTML = `${result}`;
}

// Algo
function saveData() {
    const formData = {
    };

    //Criar um arquivo Json para Download
    const a = document.createElement("a"); // "a" é o link do download
    a.href = URL.createObjectURL(
        new Blob([JSON.stringify(formData, null, 2)], { type: "aplication.json" })
    );
    a.setAttribute("download", "formData.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    //Tirar os elementos dos campos
    document.getElementById("contactForm").reset();
}

function deletarData() {
    //Tirar os elementos dos campos
    document.getElementById("contactForm").reset();
}
