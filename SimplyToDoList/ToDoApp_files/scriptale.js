document.querySelectorAll('.todo-list .form-check-input').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        var todoItem = this.closest('.todo-item');
        if (this.checked) {
            todoItem.classList.add('inactive');
        } else {
            todoItem.classList.remove('inactive');
        }
    });
});

document.querySelectorAll('.remove-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var todoItem = this.closest('.todo-item');
        if (todoItem) todoItem.remove();
    });
});

// Pastikan event listener dipasang setelah DOM siap
window.addEventListener('DOMContentLoaded', function () {
    var dialog = document.getElementById('dialogOverlay');
    if (dialog) dialog.style.display = 'none'; // pastikan dialog tidak tampil saat load
    var showBtn = document.getElementById('showDialogBtn');
    if (showBtn) {
        showBtn.addEventListener('click', function () {
            if (dialog) dialog.style.display = 'flex';
        });
    }
    // Event listener tombol close harus dipasang ulang setiap kali dialog muncul
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'closeDialogBtn') {
            if (dialog) dialog.style.display = 'none';
        }
    });

    // Interaksi button tag: hanya satu aktif, lainnya opacity 0.3
    const tagButtons = document.querySelectorAll('.tags-container .tag');
    tagButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active-tag')) {
                // Jika diklik lagi, reset semua
                tagButtons.forEach(b => {
                    b.classList.remove('active-tag');
                    b.style.opacity = '1';
                });
            } else {
                tagButtons.forEach(b => {
                    b.classList.remove('active-tag');
                    b.style.opacity = '0.3';
                });
                this.classList.add('active-tag');
                this.style.opacity = '1';
            }
        });
    });
});

// Add button navigation
document.querySelector('.btn-add').addEventListener('click', function () {
    window.location.href = 'AddList.html';
});

// Dialog functionality for Nama Penyusun button
document.querySelector('.btn-name').addEventListener('click', function () {
    const dialog = document.createElement('div');
    dialog.className = 'dialog-overlay d-flex align-items-center justify-content-center'; dialog.innerHTML = `
        <div class="basic-dialog">
            <h2 class="headline">Penyusun</h2>
            <div class="supporting-text">
            Disusun menggunakan Bootstrap 5.3.0 oleh<br />
                <span style="font-weight: 600">Alexandra Pritha Sari</span><br />
                <span style="font-weight: 600">NIM : 245150401111006</span><br />
            </div>
            <button class="close-btn" onclick="this.closest('.dialog-overlay').remove()">Close</button>
        </div>
    `;
    document.body.appendChild(dialog);
});

