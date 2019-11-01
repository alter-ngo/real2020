const functions = require('firebase-functions');

exports.host = functions.https.onRequest((req, res) => {
    const userAgent = req.headers["user-agent"].toLowerCase();
    let indexHTML = fs.readFileSync("./hosting/index.html").toString();
    const path = req.path ? req.path.split("/") : req.path;
    const ogPlaceholder = '<meta name="functions-insert-dynamic-og">';
  
    const isBot =
      userAgent.includes("googlebot") ||
      userAgent.includes("yahoou") ||
      userAgent.includes("bingbot") ||
      userAgent.includes("baiduspider") ||
      userAgent.includes("yandex") ||
      userAgent.includes("yeti") ||
      userAgent.includes("yodaobot") ||
      userAgent.includes("gigabot") ||
      userAgent.includes("ia_archiver") ||
      userAgent.includes("facebookexternalhit") ||
      userAgent.includes("twitterbot") ||
      userAgent.includes("developers.google.com")
        ? true
        : false;
  
    if (isBot) {
      // will be replaced by dynamic logic
      indexHTML = indexHTML.replace(ogPlaceholder, getOpenGraph());
      res.status(200).send(indexHTML);
      return;
    } else {
      indexHTML = indexHTML.replace(ogPlaceholder, getOpenGraph());
      res.status(200).send(indexHTML);
      return;
    }
  });
  
  const defaultDesc =
    "Cea mai mare colecție de date deschise despre învățământul românesc.";
  const defaultTitle = "Registrul Educational Alternativ";
  const defaultLogo = "%PUBLIC_URL%/loader.png";
  
  const getOpenGraph = dynamic => {
    let og = `<meta property="og:type" content="website" />`;
  
    if (!dynamic) {
      og += `<meta property="og:title" content="${defaultTitle}" />`;
      og += `<meta property="og:description" content="${defaultDesc}" />`;
      og += `<meta property="og:image" content="${defaultLogo}" />`;
    }
  
    return og;
  };
