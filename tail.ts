import minimist from 'minimist';
import fs from 'fs';
import path from 'path';


// First we need a function to read the last n lines of a file
const readLastNLines = (filePath: string, n: number): string | null => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    const lastNLines = lines.slice(-n).join('\n');
    return lastNLines;
  } catch (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return null;
  }
};

// Second we need a function to handle the command line arguments and call the readLastNLines function
const main = () => {
    // Use minimist to parse the command line arguments
    const argv = minimist(process.argv.slice(2));

    // Extract the line numbers if -n was provided in command line
    const numberOfLines = argv.n || 10;

    // Extract the file path(s) and validate them
    const files = argv._;

    if (files.length === 0) {
        console.error('Error: No file provided.');
        process.exit(1);
    }

    let success = true;
    for (const file of files) {
        // Construct the absolute path off of file
        const completePath = path.resolve(file);

        // Check if the file was found
        if(!fs.existsSync(completePath)) {
            console.error(`Error: File not found for this path ${file}`);
            success = false;
            continue;
        }

        // Now we need to read the file
        const result = readLastNLines(completePath, numberOfLines);
        if (result === null) {
            success = false;
            continue;
        }

        if (file.length > 1) {
            console.log(`==> ${file} <==`);
          }
      
          console.log(result);
        }

    process.exit(success ? 0 : 1);
};

main();