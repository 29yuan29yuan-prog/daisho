//--------------------
//1.在庫データ（JSON的な構造）
//--------------------
const items=[
    {id:"D001",name:"オレンジジュース",price:150,stock:20,minStock:5},
    {id:"D002",name:"コーラ",         price:150,stock:12,minStock:5},
    {id:"D003",name:"お茶",           price:120,stock:30,minStock:10}
];

//HTML で<tbody id="item-list"> と書いた部分を JavaScript から取得する
const tbody = cocument.getElementByld("item-list");

//---------------------
//2.表示用の関数 render()
//---------------------
function render(){
    // 一度、中身をからにしてから作り直す
    tbody.innerHTML="";

    // items の中身を一件ずつ取り出して tr （行）を作る
    items.forEach(item=>{
        const tr = document.createElement("tr");

        // 在庫が少ないときはクラスを追加して背景色を変える
        if (item.stock<item.minStock){
            tr.classList.add("low-stock");
        }

        // 行の中身（セル）をテンプレート文字列でまとめて書く
        tr.innerHTML=`
           <td>${item.id}</td>
           <td>${item.name}</td>
           <td>${item.price}</td>
           <td>${item.stock}</td>
           <td>
             <button onclick="changeStock('${item.id}',1)">+</button>
             
           `
    })
}