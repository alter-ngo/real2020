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
  } else {
    receivedMessage.channel.send(
      "Nu îți trebuie educație alternativă să înveți să scrii, tinere! Repetă comanda."
    );
  }
}

function real(receivedMessage, args) {
  if (args[0] == "motivatie") {
    receivedMessage.channel.send(
      "Considerăm ca ultima medie și promovabilitatea sunt măsurători necesare, dar nu suficiente, deoarece nu înglobează complet calitatea unei instituții de învățământ. În plus, cei doi indicatori tradiționali variază implicit în funcție de dificultatea examenului, deci nu pot oferii un suport stabil de măsurare a progresului. De asemenea, ultima medie se bazează pe elevii din anul precedent, care au fost ghidați la rândul lor de elevii din anul precedent lor, impregnând o inerție ce nu facilitează dezvoltarea meritocratică a instituțiilor de învățământ."
    );
  } else if (args[0] == "despre") {
    receivedMessage.channel.send(
      "Registrul Educațional Alternativ este o platformă prin care liceele sunt evaluate chiar de către elevi, profesori, părinți și absolvenți. Acesta a fost gândit pentru a îi ajuta pe elevii din clasa a VIII-a în alegerea opțiunilor de liceu, dar și pentru a le oferi conducerilor instituțiilor de învățământ un mecanism de autoevaluare, încurajând astfel competitivitatea constructivă."
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
  } else {
    receivedMessage.channel.send("Tinerilor, un lucru este cert: #estereal.");
  }
}

client.login("XXXXX"); // Replace XXXXX with your bot token
