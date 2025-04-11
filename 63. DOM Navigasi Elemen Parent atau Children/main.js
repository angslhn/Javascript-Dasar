// 1. Mencari Parent dari Paragraf 2
document.getElementById("cariParent").addEventListener("click", function() {
    let parent = document.getElementById("paragraf2").parentElement;
    document.getElementById("hasil").innerText = "Parent dari Paragraf 2 adalah: " + parent.tagName;
});

// 2. Mencari Child dari Container
document.getElementById("cariChild").addEventListener("click", function() {
    let container = document.getElementById("container");
    let children = container.children;
    let childText = "Child dari container: ";
    for (let i = 0; i < children.length; i++) {
        childText += children[i].tagName + " ";
    }
    document.getElementById("hasil").innerText = childText;
});

// 3. Mencari Sibling dari Paragraf 2
document.getElementById("cariSibling").addEventListener("click", function() {
    let nextSibling = document.getElementById("paragraf2").nextElementSibling;
    let prevSibling = document.getElementById("paragraf2").previousElementSibling;
    let siblingText = "Sibling Paragraf 2: \n";
    siblingText += prevSibling ? "Sebelumnya: " + prevSibling.innerText + "\n" : "Tidak ada elemen sebelum ini.\n";
    siblingText += nextSibling ? "Sesudahnya: " + nextSibling.innerText : "Tidak ada elemen setelah ini.";
    
    document.getElementById("hasil").innerText = siblingText;
});