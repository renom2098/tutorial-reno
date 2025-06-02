function samplePromise() {
  return Promise.resolve("Reno");
}

const name = await samplePromise();
console.info(name);