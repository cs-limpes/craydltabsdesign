document.querySelectorAll('input[name="tabs"]').forEach(input => {
      input.addEventListener('change', (e) => {
        const tabNumber = e.target.id.replace('tab', '');
        document.getElementById('tabImage').src = `image${tabNumber}.png`;
      });
    });