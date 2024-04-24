var itemsComQuantidadeValor = 0;

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



    const items = [
        { Prato: "uramaki", Quantidade: parseInt(document.getElementById("uramaki").value), Valor: data.uramakiVAL },
        { Prato: "hotroll", Quantidade: parseInt(document.getElementById("hotroll").value), Valor: data.hotrollVAL },
        { Prato: "niguri", Quantidade: parseInt(document.getElementById("niguri").value), Valor: data.niguriVAL },
        { Prato: "hossomaki", Quantidade: parseInt(document.getElementById("hossomaki").value), Valor: data.hossomakiVAL },
        { Prato: "guioza", Quantidade: parseInt(document.getElementById("guioza").value), Valor: data.guiozaVAL },
        { Prato: "tempura", Quantidade: parseInt(document.getElementById("tempura").value), Valor: data.tempuraVAL },
        { Prato: "gohan", Quantidade: parseInt(document.getElementById("gohan").value), Valor: data.gohanVAL },
        { Prato: "temaki", Quantidade: parseInt(document.getElementById("temaki").value), Valor: data.temakiVAL },
        { Prato: "sunomono", Quantidade: parseInt(document.getElementById("sunomono").value), Valor: data.sunomonoVAL },
        { Prato: "teppan", Quantidade: parseInt(document.getElementById("teppan").value), Valor: data.teppanVAL },
        { Prato: "yakissoba", Quantidade: parseInt(document.getElementById("yakissoba").value), Valor: data.yakissobaVAL },
        { Prato: "soba", Quantidade: parseInt(document.getElementById("soba").value), Valor: data.sobaVAL },
        { Prato: "lamen", Quantidade: parseInt(document.getElementById("lamen").value), Valor: data.lamenVAL }
    ];

    // Filtrar os itens com Quantidade e Valor maiores que zero
    itemsComQuantidadeValor = items.filter(item => item.Quantidade > 0 && item.Valor > 0);

    console.log(itemsComQuantidadeValor);

}

// Algo
function saveData() {

    console.log("Itens a serem salvos:", itemsComQuantidadeValor);
    // Criar um arquivo JSON para download
    const jsonData = JSON.stringify(itemsComQuantidadeValor, null, 3); // Converte os itens para formato JSON

    const blob = new Blob([jsonData], { type: "application/json" }); // Cria um objeto Blob
    const url = URL.createObjectURL(blob); // Cria uma URL para o objeto Blob

    const a = document.createElement("a"); // Cria um elemento "a" para o link de download
    a.href = url; // Define o atributo href com a URL do objeto Blob
    a.download = "recibo.json"; // Define o atributo download com o nome do arquivo
    a.click(); // Simula um clique no link de download

    // Limpar os elementos dos campos após o download
    document.getElementById("Form").reset();
}


function deletarData() {
    //Tirar os elementos dos campos
    document.getElementById("Form").reset();
}
