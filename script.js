// Form submission untuk WhatsApp
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const phone = document.getElementById('phone').value;
    const menu = document.getElementById('menu').value;
    const jumlah = document.getElementById('jumlah').value;
    const catatan = document.getElementById('catatan').value;
    
    // Nomor WhatsApp restoran
    const restaurantPhone = '6281234567890';
    
    // Format pesan
    let message = `Halo, saya ingin melakukan pesanan.%0A`;
    message += `Nama: ${nama}%0A`;
    message += `No. Telepon: ${phone}%0A`;
    message += `Menu: ${menu}%0A`;
    message += `Jumlah: ${jumlah} porsi%0A`;
    
    if (catatan) {
        message += `Catatan: ${catatan}%0A`;
    }
    
    // Link WhatsApp
    const whatsappLink = `https://wa.me/${restaurantPhone}?text=${message}`;
    
    // Buka WhatsApp
    window.open(whatsappLink, '_blank');
});

// Smooth scroll untuk menu order buttons
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});