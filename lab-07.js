try {
  console.log("Attempting to throw a generic error...");
  throwGenericError();
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log(
    "This will always execute after the generic error try..catch block."
  );
}

console.log("Program continues after handling generic error...\n");


try {
  console.log("Attempting to throw a custom error...");
  throwCustomError();
} catch (error) {
  console.error("Caught an error:", error.message);
  console.error("Error name:", error.name);
} finally {
  console.log(
    "This will always execute after the custom error try..catch block."
  );
}

console.log("Program continues after handling custom error...");
