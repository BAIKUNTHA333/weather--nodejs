const path=require('path');
console.log(path.dirname("E:/new project/osmodule/osmod.js"))
console.log(path.extname("E:/new project/osmodule/osmod.js"))
console.log(path.basename("E:/new project/osmodule/osmod.js"))
const myPath=path.parse("E:/new project/osmodule/osmod.js")
console.log(myPath.root);
