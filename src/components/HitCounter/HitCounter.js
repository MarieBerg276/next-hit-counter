function HitCounter() {
    let { hits } = JSON.parse(readFile(DATABASE_PATH));

    hits += 1;

    writeFile(DATABASE_PATH, JSON.stringify({ hits }))

    return hits
}