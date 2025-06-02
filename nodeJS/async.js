function samplePromise() {
  return Promise.resolve("Reno");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();