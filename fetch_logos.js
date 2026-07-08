const fs = require('fs');

async function download(url, filename) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to download ${url}: ${res.statusText}`);
    return;
  }
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(filename, buffer);
  console.log(`Downloaded ${filename}`);
}

async function main() {
  await download("https://logo.clearbit.com/scania.com", "public/logos/scania.png");
  await download("https://logo.clearbit.com/volvo.com", "public/logos/volvo.png");
  await download("https://logo.clearbit.com/ivecogroup.com", "public/logos/iveco.png");
  await download("https://logo.clearbit.com/daf.com", "public/logos/daf.png");
}

main();
