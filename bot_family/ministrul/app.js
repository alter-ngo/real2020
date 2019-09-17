const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", receivedMessage => {
  if (receivedMessage.author == client.user) {
    // Prevent bot from responding to its own messages
    return;
  }

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage);
  }
});

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
  let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
  let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
  let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

  console.log("Command received: " + primaryCommand);
  console.log("Arguments: " + arguments); // There may not be any arguments

  if (primaryCommand == "spune") {
    spune(receivedMessage, arguments);
  } else if (primaryCommand == "real") {
    real(receivedMessage, arguments);
  }  else if (primaryCommand == "daca") {
    real(receivedMessage, arguments);
  } 
  else {
    receivedMessage.channel.send(
      "Nu îți trebuie educație alternativă să înveți să scrii, tinere! Repetă comanda."
    );
  }
}

function real(receivedMessage, args) {
  if (args[0] == "despre") {
    receivedMessage.channel.send(
      "Registrul Educațional Alternativ va livra cea mai mare colecție de date despre sistemul de învățământ românesc, combinând informații oficiale de la instituții de stat cu opiniile elevilor, profesorilor și tutorilor. \n\nColectăm sute de variabile pentru fiecare instituție de învățământ, de la notele de la clasă și până la calificările profesorilor. \n\nVom folosi aceste date bogate pentru a ajuta elevi, părinți, tutori, cercetători, conduceri și factori decizionali prin diverse căi. \n\nProiectul este inițiat și menținut în totalitate de o echipă de liceeni și studenți voluntari, având susținere din partea unor organizații din societatea civilă și mediul academic."
    );
  } else if (args[0] == "e" && args[1]== "2019") {
    receivedMessage.channel.send(
      "Si vorbesti de bataie, Si nu esti in ring, esti la meetup la #estereal."
    );
  } else if (args[0] == "cc" && args[1] == "lista") {
    receivedMessage.channel.send(
      "1. **Transparență**\n2. **Dialog**\n3. **Take it outside**\n4. **Every opinion counts**\n5. **Echilibru**\n6. **Obiectiv**\n7. **Respect**"
    );
  } else if (args[0] == "cc" && args[1] == "listamare") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n1. **Transparență** Discuțiile legate de proiect trebuie purtate pe cât posibil pe canale publice, pentru a le permite tuturor colegilor să fie la curent cu ultimele noutăți.\n\n2. **Dialog** Discuțiile legate de proiect trebuie să fie amiabile și civilizate, pentru a ne permite să ne concentrăm pe ce este cu adevărat important. Critica este foarte utilă, dar doar în formă constructivă.\n\n3. **Take it outside** În cazul în care critica devine neconstructivă dintr-un motiv sau altul, persoanele implicate trebuie să se retragă într-un spațiu privat pentru a continua discuția, pentru a nu cultiva o atmosferă toxică.\n\n4. **Every opinion counts** Proiectul nostru se bazează pe tratarea opiniilor ca egale. Trebuie aplicat principiul ăsta și intern. Sunt încurajate discuțiile deschise și poll-urile, pentru a include cât mai multe perspective.\n\n5. **Echilibru** Chiar dacă lucram la un proiect foarte mișto, trebuie să avem grijă și de noi și să păstrăm un echilibru de timp și energie între viața personală și proiect. Astă ajută pe termen lung și proiectul, prin evitarea burnout-ului.\n\n6. **Obiectiv** Trebuie să nu ne lăsăm copleșiți de satisfacții personale derivate din implicarea în proiect și să prioritizăm calitatea proiectului.\n\n7. **Respect** Munca fiecăruia trebuie respectată și apreciată, însă calitatea rămâne prioritară pentru produsul final, în acord cu punctul 6."
    );
  } else if (args[0] == "cc" && args[1] == "art1") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n1. **Transparență** Discuțiile legate de proiect trebuie purtate pe cât posibil pe canale publice, pentru a le permite tuturor colegilor să fie la curent cu ultimele noutăți."
    );
  } else if (args[0] == "cc" && args[1] == "art2") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n2. **Dialog** Discuțiile legate de proiect trebuie să fie amiabile și civilizate, pentru a ne permite să ne concentrăm pe ce este cu adevărat important. Critica este foarte utilă, dar doar în formă constructivă."
    );
  } else if (args[0] == "cc" && args[1] == "art3") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n3. **Take it outside** În cazul în care critica devine neconstructivă dintr-un motiv sau altul, persoanele implicate trebuie să se retragă într-un spațiu privat pentru a continua discuția, pentru a nu cultiva o atmosferă toxică."
    );
  } else if (args[0] == "cc" && args[1] == "art4") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n4. **Every opinion counts** Proiectul nostru se bazează pe tratarea opiniilor ca egale. Trebuie aplicat principiul ăsta și intern. Sunt încurajate discuțiile deschise și poll-urile, pentru a include cât mai multe perspective."
    );
  } else if (args[0] == "cc" && args[1] == "art5") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n5. **Echilibru** Chiar dacă lucram la un proiect foarte mișto, trebuie să avem grijă și de noi și să păstrăm un echilibru de timp și energie între viața personală și proiect. Astă ajută pe termen lung și proiectul, prin evitarea burnout-ului."
    );
  } else if (args[0] == "cc" && args[1] == "art6") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n6. **Obiectiv** Trebuie să nu ne lăsăm copleșiți de satisfacții personale derivate din implicarea în proiect și să prioritizăm calitatea proiectului."
    );
  } else if (args[0] == "cc" && args[1] == "art7") {
    receivedMessage.channel.send(
      "Conform codului de conduită:\n\n7. **Respect** Munca fiecăruia trebuie respectată și apreciată, însă calitatea rămâne prioritară pentru produsul final, în acord cu punctul 6."
    );
  } else {
    receivedMessage.channel.send("Tinerilor, un lucru este cert: #estereal.");
  }
}

function spune(receivedMessage, args) {
  if (args[0] == "buna") {
    receivedMessage.channel.send("Salutări alternative, dragilor!");
  } else if (args[0] == "bravo") {
    receivedMessage.channel.send(
      "Ca reprezentant al Ministerului Educațional Alternativ, țin să vă felicit pentru eforturile voluntare depuse pentru asigurarea calității serviciului public de educație din România."
    );
  } else if (args[0] == "stop") {
    receivedMessage.channel.send(
      "În calitate de ministru, vă rog să încetați aceste activități dăunătoare cât de curând."
    );
  } else if (args[0] == "start") {
    receivedMessage.channel.send(
      "Toți factorii decizionali au căzut de acord. Să purcedem!"
    );
  } else if (args[0] == "haide") {
    receivedMessage.channel.send(
      "Vă rog să vă mișcați fundul constituțional pentru îndeplinirea acestor sarcini."
    );
  } else if (args[0] == "oof") {
    receivedMessage.channel.send(
      "Țin să transmit regrete sincere la adresa prezentei situații de neconstituționalitate."
    );
  } else if (args[0] == "lma") {
    receivedMessage.channel.send(
      "În calitate de ministru, doresc să vă transmit la mulți ani plini de situații de constituționalitate din partea echipei REAL!"
    );
  } else {
    receivedMessage.channel.send("Tinerilor, un lucru este cert: #estereal.");
  }
}

client.login("XXXXX"); // Replace XXXXX with your bot token
