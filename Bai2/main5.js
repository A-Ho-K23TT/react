//cau5a
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => {
    console.log("Đã chờ xong");
  });
//5b
function delayLog(ms, message) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, ms);
    });
  }
//5c
async function runDelaysParallel() {
    delayLog(1000, "1s trôi qua...");
    delayLog(2000, "2s trôi qua...");
    delayLog(3000, "3s trôi qua...");
  }
  
  runDelaysParallel();  
//5d
async function fetchPostTitle() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log("Title:", data.title);
    } catch (error) {
      console.error("Lỗi khi fetch:", error);
    }
  }
  
  fetchPostTitle();

//hoặc
fetch ("https://jsonplaceholder.typicode.com/posts/1")
  .then(result => await .json())
  
  

   