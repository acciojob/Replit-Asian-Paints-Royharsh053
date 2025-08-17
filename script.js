//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the selected grid item
    const selectedItem = document.getElementById(blockId);
    if (selectedItem) {
        selectedItem.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID');
    }
});

document.getElementById('Reset').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});