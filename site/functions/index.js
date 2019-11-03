const functions = require("firebase-functions");
const fs = require("fs");
const fetch = require("node-fetch");

exports.host = functions.https.onRequest(async (req, res) => {
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

  if (isBot && path[1] == "blog") {
    let content = await getOpenGraph(path[2]);
    indexHTML = indexHTML.replace(ogPlaceholder, content);
    res.status(200).send(indexHTML);
    return;
  }

  let content = await getOpenGraph();
  indexHTML = indexHTML.replace(ogPlaceholder, content);
  res.status(200).send(indexHTML);
});

const defaultDesc =
  "Cea mai mare colecție de date deschise despre învățământul românesc.";
const defaultTitle = "Registrul Educational Alternativ";
const defaultLogo =
  "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/media%2Flogo_real_text_opaque.png?alt=media&token=6b23818b-aaf7-4964-aa8a-bd6318621cb1";

const getOpenGraph = async dynamic => {
  let og = `<meta property="og:type" content="website" />`;

  if (!dynamic) {
    og += `<meta property="og:title" content="${defaultTitle}" />`;
    og += `<meta property="og:description" content="${defaultDesc}" />`;
    og += `<meta property="og:image" content="${defaultLogo}" />`;
  } else {
    await fetch(
      "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/blogs%2Fblogs.json?alt=media&token=85937259-49b5-4fce-83c6-a823f382c4c3"
    )
      .then(r => r.json())
      .then(json => {
        json = json["blogs"];
        json.forEach(blog => {
          if (blog.slug == dynamic) {
            og += `<meta property="og:title" content="${blog.title}" />`;
            og += `<meta property="og:description" content="${blog.excerpt}" />`;
            og += `<meta property="og:image" content="${blog.imageSrc}" />`;
          }
        });
      });
  }

  return og;
};
