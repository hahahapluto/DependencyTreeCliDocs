<!-- ---
sidebar: auto
--- -->

# dependencytreecli

A Node.js command-line tool for analyzing module dependencies, which will recursively search for all nodes starting from package.json\_ Dependency relationships in modules and generate dependency graph.

## Installation

Installation toolkit so that you can access it from the command line.

```
$ npm install dependencytreecli
```

## Usage

### Analyze dependencies

Dependencytreecli provides you with a command to analyze the dependencies of the current project and generate a dependency graph by running the following command in the root directory of the project:

```
$ dependency-tree-cli analyze

$ dependency-tree-cli ana
```

This command will recursively search for dependencies starting from the current project's package.json, and automatically open the generated dependency graph in the form of a web page.

### Control depth

You can also use the -- depth=n parameter to limit the hierarchical depth of downward recursive analysis. For example, if you only want to view the direct dependencies of the current project, you can run the following command:

```
$ dependency-tree-cli --depth = n

$ dependency-tree-cli -d=n
```

If you use the dependency-tree-cli --depth command without parameters, you will be asked to enter the depth of the hierarchy from the command line.

```
$ dependency-tree-cli --depth

$ dependency-tree-cli -d
```

### Save as JSON file

If you want to save the analyzed dependency results as a JSON file, you can use the -- JSON=[file path] parameter. (ps: [file path] is the file path where you want to save the results.)

```
$ dependency-tree-cli --json=[file-path]

$ dependency-tree-cli -j=[file-path]
```

If you use the dependency-tree-cli --json command without parameters, you will be asked by the command line to enter the file path you want to specify.

```js
$ dependency-tree-cli --json

$ dependency-tree-cli -j
```

### View Version

If you need to know the current version of this tool, you can use the following command to view it:

```js
$ dependency-tree-cli --version

$ dependency-tree-cli -V
```

### View help

If you need to know more about the commands and parameters of this tool, you can use the following commands to view the help document:

```js
$ dependency-tree-cli

$ dependency-tree-cli --help

$ dependency-tree-cli --h
```

## Note

- This tool is based on the package. json analysis in the project. Please ensure that all dependencies are installed correctly and that the project directory structure is correct.
- For large projects and deep dependencies, it may take longer to complete the analysis process.

If you need further support or have any other questions, please feel free to contact us.
