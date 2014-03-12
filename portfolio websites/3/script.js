var loadItems =  function(data) {
	var container = document.getElementById("container");
	container.innerHTML ="";
	
	for (var i=0; i<data.length; i++) {
	var currentItem = data[i];
	
	var newProduct = document.createElement ("div");
	newProduct.classList.add("product");
	
	var img = document.createElement ("img");
	img.src = currentItem.image;
	newProduct.appendChild (img);
	
	var name = document.createElement ("span");
	name.innerHTML = currentItem.name;
	name.classList.add("productName");
	newProduct.appendChild (name);
	
	var price = document.createElement ("span");
	price.innerHTML = currentItem.price;
	price.classList.add("productPrice");
	newProduct.appendChild (price);
	
	var stock = document.createElement ("span");
	stock.classList.add("stock");
	if (currentItem.inStock == true){
		stock.innerHTML = "In Stock";
		}
		else {
		stock.classList.add("outOfStock");
		stock.innerHTML = "Out of stock";
		}
	newProduct.appendChild (stock);
	
	container.appendChild (newProduct);
	}
}