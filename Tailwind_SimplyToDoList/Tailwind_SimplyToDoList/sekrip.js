document.addEventListener('DOMContentLoaded', function() {
    // Checkbox functionality
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const todoItem = this.closest('article');
            if (this.checked) {
                todoItem.classList.add('inactive');
            } else {
                todoItem.classList.remove('inactive');
            }
        });
    });

    // Remove button functionality
    document.querySelectorAll('button').forEach(function(btn) {
        if (btn.innerHTML.includes('bi-x-lg')) {
            btn.addEventListener('click', function() {
                const todoItem = this.closest('article');
                if (todoItem) todoItem.remove();
            });
        }
    });

    // Tag selection functionality (for add-task.html)
    const tagButtons = document.querySelectorAll('button[type="button"]');
    if (tagButtons.length > 0) {
        tagButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tagButtons.forEach(b => {
                    b.classList.remove('bg-opacity-100');
                    b.classList.add('bg-opacity-30');
                });
                this.classList.remove('bg-opacity-30');
                this.classList.add('bg-opacity-100');
            });
        });
    }

    // Add button navigation
    const addButton = document.querySelector('.bg-gray-900.text-white.font-semibold.text-xl');
    if (addButton) {
        addButton.addEventListener('click', function() {
            window.location.href = 'add-task.html';
        });
    }

    // Dialog functionality for Nama Penyusun button
    const nameButton = document.querySelector('.bg-gray-900.text-white.font-semibold.py-3.px-6.rounded-xl.flex-grow');
    if (nameButton) {
        nameButton.addEventListener('click', function() {
            const dialog = document.createElement('div');
            dialog.className = 'dialog-overlay flex items-center justify-center';
            dialog.innerHTML = `
                <div class="basic-dialog">
                    <h2 class="headline">Penyusun</h2>
                    <div class="supporting-text">
                        Disusun menggunakan Tailwind CSS oleh<br />
                        <span style="font-weight: 600">Rifky Aditya Harun</span><br />
                        <span style="font-weight: 600">NIM : 245150400111002</span><br />
                    </div>
                    <button class="close-btn" onclick="this.closest('.dialog-overlay').remove()">Close</button>
                </div>
            `;
            document.body.appendChild(dialog);
        });
    }
});