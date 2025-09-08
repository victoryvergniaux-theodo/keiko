function logError(error) {
    console.log("There was an error: code ".concat(error.code, " !!"));
    console.log("File: ".concat(error.details.file));
    console.log("Error Message: ".concat(error.details.message));
}
logError({
    code: 500,
    details: {
        file: "user.ts",
        message: "user is not defined"
    }
});
