const fs = require('fs').promises;
const fsGeneral = require('fs'); // для стрімів треба було встановити

// fs.appendFile('./file.txt','hello').then(()=>{  // create file and text in it, також дозаписує дані в файлі
//     console.log('Done');
// }).catch(e => {
//     console.log(e);
// })

// fs.writeFile('./file.txt','hello1').then(()=>{  // перезапише те що є в файлі
//     console.log('Done');
// }).catch(e => {
//     console.log(e);
// })

// fs.readFile('./file.txt').then(data=>{  // read те що є в файлі
//     console.log(data.toString()); // to string is optional if you wish to convert data from buffer to string
// })

// fs.unlink('./file.txt').then(value=>{  //removes file
//     console.log(value);
// })
// fs.rm('./file.txt').then(value=>{  //removes file
//     console.log(value);
// })

// fs.mkdir('./new_dir').catch(e=>{  //makes new directory
//     console.log(e);
// })

// fs.stat('./file.txt').then(info=>{  // shows stats of the file
//     console.log(info);
//     console.log(info.isDirectory());
//     console.log(info.isFile());
// })

// fs.readdir('./new_dir').then(files=>{  // read directory
//     console.log(files);
// })

// fs.readdir('./new_dir').then(files=>{  // read directory
//     console.log(files);
//     for (const file of files) {
//         fs.stat(`./new_dir/${file}`).then(info =>{
//             if(info.isFile()){
//                 fs.readFile(`./new_dir/${file}`).then(fileBuffer =>{
//                     console.log(`read file ${file} from './new_dir'`);
//                     console.log(fileBuffer.toString());
//                 })
//             }
//         })
//     }
// })

// fs.rename('./rename.css', './styles.css').catch( e=> {// перейменовує
//     // fs.rename('./style.css', './styles.html').catch( e=> {  // можна поміняти навіть розширення
//     // fs.rename('./rename.css', './new_directory/rename.css').catch( e=> { // push to the new directory, but only to the exist one
//         console.log(e);
// })

// fs.rmdir('./new_dir', {recursive: true}).catch(e=>{  // remove directory. could not delete not empty dir.
//     // recursive: true allows to remove with files
//     console.log(e);
// })

// streams - передає великі дані пачками

//write streams

//read streams

let readStream = fsGeneral.createReadStream('./file.txt');
let writeStream = fsGeneral.createWriteStream('./copy.txt');

// readStream.on('data', (data)=>{
//     writeStream.write(data);
//     console.log(data); //will show куски інфи які називаються chunk
// })
//
// readStream.on('end', ()=>{
//     console.log('done');
// })

readStream.pipe(writeStream) // з одного стріма перенаправляєш інфо в інший, краща альтернатива верхнього коду