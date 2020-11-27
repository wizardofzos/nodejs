 // no jQuery required.... change text with result of backend call


  function wtfMeter () {
    // Some sort of debug...
    console.log("WTF: " + this.responseText);
    // document.getElementById('but').innerHTML =   this.responseText;
  }

  function getBackend(endpoint="jsondata"){
    // *WARNING* this function calls itself [endpoint] fast! (112 ms)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/" + endpoint);
    xhr.onload = function(e){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          document.getElementById('but').innerHTML =   xhr.responseText['string-attribute'];
        }
      }
    };
    xhr.send(null); 
    window.setTimeout(getBackend, 112);
    return true;
  }
 
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", wtfMeter);
  oReq.open("GET", "/when");
  oReq.onload = function (e) {
    if (oReq.readyState === 4) {
      if (oReq.status === 200) {
        document.getElementById('but').innerHTML =   this.responseText;
      } else {
        console.error(oReq.statusText);
      }
    }
  };
  oReq.send(null);
 
