$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Assuming products is an array of product objects available globally
    const product = products.find(p => p.id === productId);

    if (product) {
        $('#product-image').attr('src', product.image);
        $('#product-name').text(product.name);
        $('#product-description').text(product.description);
        $('#product-price').text(`GH₵ ${product.price}`);

        $('#add-to-cart').click(function () {
            addToCart(product.id);
            alert('Product added to cart!');
        });
    } else {
        $('#product-details').html('<p>Product not found.</p>');
    }
});
