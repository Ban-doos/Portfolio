document.querySelectorAll('.toggle-details').forEach((button) => {
    button.addEventListener('click', (event) => {
        const details = button.nextElementSibling;
        if (details.style.display === 'block') 
        {
            details.style.display = 'none';
            button.textContent = 'Voir plus';
        } 
        else 
        {
            details.style.display = 'block';
            button.textContent = 'Réduire';
        }
    });
});
