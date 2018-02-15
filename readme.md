# Boilerplate
This is a boilerplate for future use in web projects

## Organization of files
Root structures
```
boilerplate
-- assets // Assets suchs as designs, documents with copywriting etc.
-- node_modules // Contains all NPM packages
-- dist // Folder where site will be build
    ---- assets
        ---- css // Contains all compiled css
        ---- js // Contains all compiled js
        ---- img // Contains all compressed image files
    HTML // HTML files 
-- src
    ---- libraries // Contains all other libraries if any
    ---- styles // Contains all SCSS files
        app.scss // Main SASS file
    ---- scripts // Contains all JS files
    ---- images // Contains all uncompressed images
    HTML // HTML files
-- vendor // Folder where all bower components are installed
```

### Why this folder structure?
I am used to working with Laravel and some web apps (well react native to be precise), where the folder structure is always about the same:
All uncompressed files are src and using build tools all files that need compressing get compressed and separated from the source files, mostly called 'dist'.
All asset files such as css, images and js are wrapped in an 'assets' folder.

## Tools
### IDE
I used to work with Sublime Text 3 but switched over to Visual Studio Code which is now my preferred IDE. The IDE offers extensive plugins as well as a built-in terminal (11/10 on that),
an easy git diff view etc. It also supports all other modern functions such as split screen, fullscreen, color changes, config changes etc. Overall this is an excellent editor.

### CSS Preprocessor
Having experience with SASS (tried making my own SASS framework last year, which resulted in: [github repo](https://github.com/JCardoen/sass_framework) ).
I also use Laravel which comes with SASS. So I just kept using that (best thing is the 'modularization' of your .scss files plus the variables you can use).
I have thought about switching to PostCSS but will take a closer look this summer.
Installation: Requires having Ruby installed on your machine (add it to your PATH var). Simply run ```gem install yarn``` to install SASS.

### Linters
#### Javascript
I use a VS Code plugin for my JS (also an intellisense), and for this boilerplate I decided to have a go at the eslint npm package.
Why ESLint? I read this article: [Overview JS linting tools](https://www.sitepoint.com/comparison-javascript-linting-tools/).
We'd like to keep it as a dev dependency: ```npm install eslint --save-dev```

#### SASS
Using SCSS Lint to check quality of scss code: ```gem install scss_lint``` . Be sure to install this: ```gem install scss_lint_reporter_checkstyle```

### VSCode Extensions
I have all my VSCode Extensions saved in a git repo so I can transfer them across computers: [extensions](https://github.com/JCardoen/vscode-extensions).
I also have extensions for my other projects.

### Package Managers
Using npm (main packages), yarn (some packages), bower (front end packages mostly) and composer (php packages).

### JS Preprocessor
Thanks to the current specification ES6 I feel no need to use either Typescript or Coffeescript.
Although static typing is a nice thing to have I do not feel like I would need it in a boilerplate like this.

### Build tools
I choose to use Gulp, why? In all honesty, they are almost familiar so you basically choose upon your own preference. I decided to pick Gulp because I like the name better and also because Laravel uses Gulp.
#### Gulpfile
My Gulp file should do the following tasks:
- Linting/Hinting js and scss files
- Compile and minify js and scss files
- Autoprefixing

Available tasks:
- Build: 
    - compiles and concats .scss files into a single .css file
    - compiles .js
    - minifies/compresses image files
    - export them to dist folder
    - copy php files to dist folder
    - copy templates to dist folder
- Lint:
    - lints the scss files
    - lints javascript files
- Default: same as build

### Templating
For creating template, the Twig template engine is used (version 2).

### Database Abstraction Layer
Doctrine/dbal, I have no experience in implementing an abstraction layer hence I just went with the suggestion of the teacher.

Copyright disclaimer: Thanks to Adam to create a Markdown cheatsheet as I tend to forget a lot of syntax: [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
