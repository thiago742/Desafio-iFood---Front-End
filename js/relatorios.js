const filterToggle = document.querySelector('.filter-bar span');
const filterItems = document.querySelector('.filter-items');

filterToggle.addEventListener('click', function() {
if (filterItems.style.display === 'none' || filterItems.style.display === '') {
    filterItems.style.display = 'block'; 
    }   else  {
    filterItems.style.display = 'none';  
    }
});