recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
  if(dirName == null || dirName === undefined)
  {
  var files = data.files;
  for(var i = 0 ; i < data.subDirs.length;i++){
  var subFiles = listFiles(data.subDirs[i],dirName);
  for(var z =0; z< subFiles.length;z++){
    //push all files in folder
    files.push(subFiles[z]);
  
  }

  }
  return files;
  
  } else {
  var files =[];
  if(data.dirName === dirName ){files = data.files;}
  for(var i = 0 ; i < data.subDirs.length;i++){
  if(data.subDirs[i].dirName === dirName){
  var subFiles = listFiles(data.subDirs[i],dirName);
  for(var z =0; z< subFiles.length;z++){
    //push all files in folder
    files.push(subFiles[z]);
  
  }}

  }
  return files;
  
  
  }
  
	
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
  var fibNums =[];
  fibNums[0]=0;
for(var i = 1; i <=n;i++){
if(i==1){
fibNums[i]=i;
}else {
fibNums[i] =fibNums[i-2] + fibNums[i-1];
}

}
return fibNums[n];
  },
};
