document.addEventListener('DOMContentLoaded', function() {
    let options = document.getElementsByClassName('dropdown-item');
    for (const option of options) {
        option.addEventListener('click', function() {
            let text = option.innerHTML;
            let dropdownId = option.parentNode.parentNode.id;
            if (dropdownId == 'hourDropdown') {
                document.getElementById('hour').value = text;
            } else {
                document.getElementById('minute').value = text;
            }
        })
    }
});
