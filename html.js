
function createHtml(response) {
    htmlStr = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Portfolio</title>
    </head>
    <body>
        <h1>${response.name}</h1>
        <h1>${response.location}</h1>
        <h1>${response.bio}</h1>
        <h1>${response.linkedin}</h1>
        <h1>${response.github}</h1>
    </body>
    </html>`;

    return htmlStr;
}

module.exports = createHtml;