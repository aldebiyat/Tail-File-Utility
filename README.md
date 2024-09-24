The objective of this challenge is to build a subset of the [`tail`](https://en.wikipedia.org/wiki/Tail_(Unix)) utility in Typescript.

Your solution should begin in `tail.ts`

You can run the utility using `npm start -- <arguments>`

Our version of tail should support the following use cases:

* `npm start -- <file>` should print the last 10 lines of the given file to standard out
	*   This should support absolute and relative unix file paths
* `npm start -- -n number <file>` should print the last `number` lines of the file
* `npm start -- <file1> <file2> ...` should print the the last 10 lines of all the provided files
* `npm start -- -n number <file1> <file2>` should print the last `number` lines of all provided files

The tail utility exits 0 on success, and >0 if an error occurs.

For your submission, please commit your source files to this GitHub repository.

## Notes

* If at all possible, use the standard library only and avoid external dependencies to complete this task.
* We have included minimist library to parse the command line arguments for you.
* You do not need to worry about cross platform support. You can complete the task assuming it'll be run on a POSIX compliant system.
* Shelling out and wrapping the existing tail binary on the system goes against the spirit of the exercise.
