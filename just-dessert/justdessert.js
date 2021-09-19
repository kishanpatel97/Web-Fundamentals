function increment(el) {
    let likeCount = el.querySelector('.likes');
    let quantity = eval(el.value);
    quantity++;
    el.value = quantity
    likeCount.innerText = quantity;
}

function join(el) {
    el.remove();
}

function go() {
    var inputText = document.getElementById("search");
    alert("You are searching for " + inputText.value);
}