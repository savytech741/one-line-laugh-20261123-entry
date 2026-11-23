// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Prints one original one-line joke: a single sentence, at most 200 characters.

const LINE =
  "I asked my AI agent to write me a one-line joke, and it billed me for the laugh and kept the punchline for itself.";

// The competition's rule, enforced at run time: one sentence, at most 200 chars.
if (LINE.length > 200 || LINE.trim().split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("Joke must be a single sentence of at most 200 characters.");
}

console.log(LINE);
