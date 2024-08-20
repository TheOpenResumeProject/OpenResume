
//const files = document.getElementById('myFile');
//files.addEventListener('submit', handleSubmit);


const fileInput = document.getElementById("myFile");
fileInput.addEventListener("change", handleFiles);

function handleFiles(event){
    
      const file = event.target.files[0];
      let fileReader = new FileReader();

      fileReader.onload = function(){
            
            const typedArray = new Uint8Array(this.result);
            const loadingTask = pdfjsLib.getDocument(typedArray);
            loadingTask.promise.then(function(pdf){
                  let textArray = [];
                  let promises = [];
                  for(let i = 1; i <= pdf.numPages; i++){
                  promises.push(extractText(pdf,i,textArray));}
                  Promise.all(promises).then(()=>{
                  sessionStorage.setItem('content', JSON.stringify(textArray));
                              });
                        });
      }; 
      fileReader.readAsArrayBuffer(file);
                     
            
}
   function extractText(pdf, pageNumber, textArray){ return pdf.getPage(pageNumber).then(function(page){return page.getTextContent();}).then(function(textContent){
                        textContent.items.forEach(function(item){ textArray.push(item.str + ' '); }); }).catch (function(error){ console.error("Error reading file", error); });
   }
/*

function handleSubmit(event){
    event.preventDefault();
    const fileOne = event.target.files[0];
    const fileReader = new FileReader();

        fileReader.onload = function(){
        const typedArray = new Uint8Array(this.result);
        const loadingTask = pdfjsLib.getDocument(typedArray);
        loadingTask.promise.then(function(pdf){
            let allText = [];
            let promises = [];
            for(let i = 1; i <= pdf.numPages; i++){
                extractText(pdf, i);}
            });       
                }
        fileReader.readAsArrayBuffer(fileOne);
            }


function extractText(pdf, pageNumber){
    let textArray = [];
    return pdf.getPage(pageNumber).then(function(page){return page.getTextContent();}).then(function(textContent){textContent.items.forEach(function(item){
                textArray.push(item.str); });  return textArray;}).catch(function(error){ console.log(error.message);});
}



function handleSubmit(event){    
event.preventDefault();
const fileInput = document.getElementById('myFile');
const file = fileInput.files;

if (file[0].type !== "application/pdf")
    {
    console.log('Not a pdf file');
    return;
    } 
    sessionStorage.setItem("docName", file[0].name);
    //console.log("Name of the file is: " + file[0].name );
    //console.log(file[0]);
    console.log(fileInput);
    }
 
    */


   
