const ts=require('typescript'),fs=require('fs');let failed=false;
const files=['App.js','src/components/ThreeDLab.native.js','src/components/ThreeDLab.web.js','src/components/AlgorithmLab.js','src/components/LogicLab.js','src/data/courses.js'];
for (const f of files) {
 const kind=(f==='App.js'||f.includes('components'))?ts.ScriptKind.JSX:ts.ScriptKind.JS;
 const sf=ts.createSourceFile(f,fs.readFileSync(f,'utf8'),ts.ScriptTarget.Latest,true,kind);
 if(sf.parseDiagnostics.length){failed=true;console.log(f,sf.parseDiagnostics.map(d=>{const p=sf.getLineAndCharacterOfPosition(d.start);return `${p.line+1}:${p.character+1} ${ts.flattenDiagnosticMessageText(d.messageText,' ')}`}));} else console.log(f,'syntax OK');
}
process.exit(failed?1:0);
