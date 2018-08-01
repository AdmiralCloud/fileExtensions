# File Extension List
This little helper creates a list of file extensions including their "real" name and mimetype. 

Use it to determine mimetype from extenstion, a prettyfied name or vice versa.

Currently support more than 300 file types.

# Usage
```
const fileExtensions = require('file-extensions')

const result = fileExtensions.find( ext => ext.ext === 'mp4' )

console.log(result) 
// { "ext": "mp4", "name": "MPEG-4 Video", "mimetype": "video/mp4" }
```

# Installation
Download package from Github or use npm to install the package. 

After installation this package will automatically create the index.js file from sources.

# Contribution
If you want to add a new file extension, choose the right folder and add it like the other file extension. 

To commit, add it with git-add (or any GUI) and then use "git cz" on the CLI and answer the questions there. If you're done and want to release a new version, run "make release". 

Publishing to npm must be done manually.

# License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
