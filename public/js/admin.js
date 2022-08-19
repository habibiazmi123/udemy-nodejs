const deleteProduct = (btn) => {
    const productId = btn.parentNode.querySelector('[name="productId"]').value;
    const csrf = btn.parentNode.querySelector('[name="_csrf"]').value;

    const productElement = btn.closest('article')

    fetch(`/admin/delete-product/${productId}`, {
        method: 'DELETE',
        headers: { csrf }
    })
    .then(res => res.json())
    .then(result => {
        productElement.parentNode.removeChild(productElement);
    })
    .catch(err => console.log(err));
}