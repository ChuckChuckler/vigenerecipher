function encode(){
    let msgElm = document.getElementById("msg");
    let keyElm = document.getElementById("key");
    let msg = msgElm.value.toLowerCase();
    let key = keyElm.value.toLowerCase();
    if(msg == ""){
        document.getElementById("display").innerText = "No message is inputted";
    }else if(key == ""){
        document.getElementById("display").innerText = "No key is inputted";
    }else{
        let finalMsg = "";
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        msg = msg.split('');
        key = key.split('');
        if(key.length >= msg.length){
            for(let i = 0; i < msg.length; i++){
                if(alphabet.includes(msg[i])){
                    let msgIndex = alphabet.indexOf(msg[i]);
                    let keyIndex = alphabet.indexOf(key[i]);
                    msgIndex+=keyIndex;
                    if(msgIndex > 25){
                        msgIndex-=26;
                    }
                    finalMsg += alphabet[msgIndex];
                }else{
                    finalMsg += " ";
                }
            }
            document.getElementById("display").innerText = finalMsg;
            document.getElementById("copy").style.display = "block";
        }else{
            document.getElementById("display").innerText = "Key length must be greater than or equal to message length.";
        }
    }
}

function decode(){
    let msgElm = document.getElementById("msg");
    let keyElm = document.getElementById("key");
    let msg = msgElm.value;
    let key = keyElm.value;
    if(msg == ""){
        document.getElementById("display").innerText = "No message is inputted";
    }else if(key == ""){
        document.getElementById("display").innerText = "No key is inputted";
    }else{
        let finalMsg = "";
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        msg = msg.split('');
        key = key.split('');
        if(key.length >= msg.length){
            for(let i = 0; i < msg.length; i++){
                if(alphabet.includes(msg[i])){
                    let alphbtIndex = alphabet.indexOf(msg[i]);
                    let keyIndex = alphabet.indexOf(key[i]);
                    alphbtIndex = alphbtIndex - keyIndex;
                    if(alphbtIndex < 0){
                        alphbtIndex+=26;
                    }
                    finalMsg += alphabet[alphbtIndex];
                }else{
                    finalMsg += " ";
                }
            }
            document.getElementById("display").innerText = finalMsg;
        }else{
            document.getElementById("display").innerText = "Key length must be greater than or equal to message length.";
        }
    }
}

function rdrctDecoder(){
    window.location.href = "decoder.html";
}

function rdrctEncoder(){
    window.location.href = "encoder.html";
}

function copy(){
    document.getElementById("copyMsg").innerText = "Text copied!";
    let txt = document.getElementById("display");
    //txt.select();
    //txt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txt.innerText);
}