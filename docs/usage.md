<!-- ---
sidebar: auto
--- -->

# dependencytreecli

一个用于分析模块依赖关系的 Node.js 命令行工具，它将从 package.json 开始递归查找所有 node_modules 中的依赖关系，并生成依赖关系图。

## 安装

安装工具包，以便您可以在命令行中访问它。

```
$ npm install dependencytreecli
```

## 使用

### 分析依赖

dependencytreecli 提供给您一个命令，在项目根目录下，运行以下命令可以帮您分析当前项目的依赖关系并生成依赖关系图：

```
$ dependency-tree-cli analyze

$ dependency-tree-cli ana
```

该命令将从当前项目的 package.json 开始递归查找依赖关系，并将生成的依赖关系图自动打开，以网页的形式展现。

![Alt text](/assets/ana.png)

[图片](最终展示的网页)

### 控制深度

您还可以使用--depth=n 参数来限制向下递归分析的层次深度。例如，如果您只想查看当前项目的直接依赖关系，可以运行以下命令：

```
$ dependency-tree-cli --depth = n

$ dependency-tree-cli -d=n
```

![Alt text](/assets/depth1.png)

如果您不带参数直接利用 dependency-tree-cli --depth 命令，将会由命令行要求您输入层次深度。

```
$ dependency-tree-cli --depth

$ dependency-tree-cli -d
```

![Alt text](/assets/depth2.png)

[图片]

### 保存成 JSON 文件

如果您希望将分析的依赖结果保存为 JSON 文件，您可以使用--json=[file-path]参数。( ps:[file-path] 为您要保存结果的文件路径。)

```
$ dependency-tree-cli --json=[file-path]

$ dependency-tree-cli -j=[file-path]
```

![Alt text](/assets/save1.png)

[图片](最终生成的东西)

如果您不带参数直接利用 dependency-tree-cli --json 命令，将会由命令行要求您输入你要指定文件路径。

```js
$ dependency-tree-cli --json

$ dependency-tree-cli -j
```

[图片]

### 查看版本

如果您需要了解本工具的当前版本，可以使用以下命令查看：

```js
$ dependency-tree-cli --version

$ dependency-tree-cli -V
```

![Alt text](/assets/version.png)

### 查看帮助

如果您需要了解关于该工具的更多命令和参数，可以使用以下命令查看帮助文档：

```js
$ dependency-tree-cli

$ dependency-tree-cli --help

$ dependency-tree-cli --h
```

![Alt text](/assets/help.png)

## 注意

- 该工具基于项目中的 package.json 进行分析。请确保正确安装所有的依赖项，并确保项目目录结构正确。
- 对于大型项目和深层次的依赖关系，可能需要更长时间来完成分析过程。

如果需要进一步的支持或有其他问题，请随时联系我们。
