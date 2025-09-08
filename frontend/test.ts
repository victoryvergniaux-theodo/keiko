function logError(error: error) {
  console.log(`There was an error: code ${error.code} !!`)

  console.log(`File: ${error.details.file}`)
  console.log(`Error Message: ${error.details.message}`)
}

interface details {
  file: string
  message: string
}

interface error {
  code: number
  details: details
}

logError({
  code: 500,
  details: {
    file: "user.ts",
    message: "user is not defined",
  },
})
