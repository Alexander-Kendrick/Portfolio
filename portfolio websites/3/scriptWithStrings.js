var loadItems =  function(data) {
	var container = document.getElementById("container");
	container.innerHTML ="";
	
	var string = "";
	
	for (var i=0; i<data.length; i++) {
	var currentItem = data[i];
	string += '<div class="product">';
	string += '<img src="' + currentItem.image + '"/>';
	string += '<span class="productName"' + currentItem.name + '</span>';
	string += '<span class="productPrice">' + currentItem.price + '</span>';
	
	if (currentItem.inStock == true){
		string += '<span class="stock">' + "In Stock" + '</span>';
		}
		else {
		string += '<span class="stock outOfStock">' + "Out of stock" +'</span>';
		}
	string += '</div>';
	container.innerHTML =string;
	}
}